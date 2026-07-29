-- Python for Kids: full schema setup for a fresh Supabase project
-- Paste this entire file into Supabase Dashboard → SQL Editor → Run

/* ========== 1) Initial schema ========== */
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT CHECK (role IN ('parent', 'child')) NOT NULL,
  parent_id UUID REFERENCES profiles(id),
  points INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Temporary FK for parents (will be dropped in flexible_profiles step)
DO $$ BEGIN
  ALTER TABLE profiles
    ADD CONSTRAINT profiles_id_fkey
    FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  phase INTEGER NOT NULL,
  week INTEGER NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  preloaded_code TEXT,
  hint TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE IF NOT EXISTS progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  lesson_id UUID NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(user_id, lesson_id)
);

CREATE TABLE IF NOT EXISTS submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE NOT NULL,
  code TEXT NOT NULL,
  feedback TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE IF NOT EXISTS badges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  criteria TEXT
);

CREATE TABLE IF NOT EXISTS user_badges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  badge_id UUID REFERENCES badges(id) ON DELETE CASCADE NOT NULL,
  awarded_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(user_id, badge_id)
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public lessons are viewable by everyone" ON lessons;
CREATE POLICY "Public lessons are viewable by everyone" ON lessons FOR SELECT USING (true);

/* ========== 2) Auth trigger ========== */
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name, role, avatar_url)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'username', new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    'parent',
    COALESCE(new.raw_user_meta_data->>'avatar_url', '👤')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

/* ========== 3) Flexible profiles (children without auth.users) ========== */
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_id_fkey;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users ON DELETE CASCADE;
UPDATE profiles SET user_id = id WHERE role = 'parent' AND user_id IS NULL;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, user_id, username, full_name, role, avatar_url)
  VALUES (
    new.id,
    new.id,
    COALESCE(new.raw_user_meta_data->>'username', new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    'parent',
    COALESCE(new.raw_user_meta_data->>'avatar_url', '👤')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

/* ========== 4) Non-recursive RLS ========== */
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Parents can view their children's profiles" ON profiles;
DROP POLICY IF EXISTS "Profiles are viewable by self or parent" ON profiles;
DROP POLICY IF EXISTS "Profiles can be inserted by self or parent" ON profiles;
DROP POLICY IF EXISTS "Profiles can be updated by self" ON profiles;
DROP POLICY IF EXISTS "Profiles can be deleted by self or parent" ON profiles;
DROP POLICY IF EXISTS "Users can manage own profile" ON profiles;
DROP POLICY IF EXISTS "Parents can manage children profiles" ON profiles;
DROP POLICY IF EXISTS "Profiles are viewable by owner or parent" ON profiles;
DROP POLICY IF EXISTS "Profiles can be inserted by owner or parent" ON profiles;
DROP POLICY IF EXISTS "Profiles can be updated by owner or parent" ON profiles;

CREATE POLICY "Users can manage own profile"
ON profiles FOR ALL
USING (auth.uid() = user_id);

CREATE POLICY "Parents can manage children profiles"
ON profiles FOR ALL
USING (parent_id = auth.uid());

/* ========== 5) PIN + email ========== */
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS pin TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS email TEXT;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, user_id, email, username, full_name, role, avatar_url)
  VALUES (
    new.id,
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'username', new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    'parent',
    COALESCE(new.raw_user_meta_data->>'avatar_url', '👤')
  )
  ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

/* ========== 6) Progress RLS (lesson_id is text) ========== */
DROP POLICY IF EXISTS "Parents can view children progress" ON progress;
DROP POLICY IF EXISTS "Parents can insert children progress" ON progress;
DROP POLICY IF EXISTS "Parents can update children progress" ON progress;
DROP POLICY IF EXISTS "Users can view own progress" ON progress;
DROP POLICY IF EXISTS "Users can insert own progress" ON progress;
DROP POLICY IF EXISTS "Users can update own progress" ON progress;

CREATE POLICY "Parents can view children progress"
  ON progress FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles p
      WHERE p.id = progress.user_id
        AND (p.parent_id = auth.uid() OR p.id = auth.uid())
    )
  );

CREATE POLICY "Parents can insert children progress"
  ON progress FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles p
      WHERE p.id = progress.user_id
        AND (p.parent_id = auth.uid() OR p.id = auth.uid())
    )
  );

CREATE POLICY "Parents can update children progress"
  ON progress FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM profiles p
      WHERE p.id = progress.user_id
        AND (p.parent_id = auth.uid() OR p.id = auth.uid())
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles p
      WHERE p.id = progress.user_id
        AND (p.parent_id = auth.uid() OR p.id = auth.uid())
    )
  );

CREATE POLICY "Users can view own progress"
  ON progress FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own progress"
  ON progress FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own progress"
  ON progress FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

/* ========== 7) Backfill parent profiles for users who signed up before schema existed ========== */
INSERT INTO public.profiles (id, user_id, email, username, full_name, role, avatar_url)
SELECT
  u.id,
  u.id,
  u.email,
  COALESCE(u.raw_user_meta_data->>'username', u.raw_user_meta_data->>'full_name', split_part(u.email, '@', 1)),
  COALESCE(u.raw_user_meta_data->>'full_name', split_part(u.email, '@', 1)),
  'parent',
  COALESCE(u.raw_user_meta_data->>'avatar_url', '👤')
FROM auth.users u
ON CONFLICT (id) DO UPDATE
SET
  user_id = EXCLUDED.user_id,
  email = EXCLUDED.email;

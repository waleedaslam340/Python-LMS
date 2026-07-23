-- Fix profiles table to allow children without an auth.users entry
-- 1. Remove the foreign key constraint from the primary key id
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_id_fkey;

-- 2. Add a new column to explicitly reference auth.users for parents
-- This is safer and cleaner than using the primary key for the reference
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users ON DELETE CASCADE;

-- 3. Copy existing IDs to the user_id column for existing parents
UPDATE profiles SET user_id = id WHERE role = 'parent' AND user_id IS NULL;

-- 4. Update the trigger to populate user_id
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

-- 5. Update RLS policies to use user_id instead of id for auth checks
DROP POLICY IF EXISTS "Profiles are viewable by self or parent" ON profiles;
DROP POLICY IF EXISTS "Profiles can be inserted by self or parent" ON profiles;
DROP POLICY IF EXISTS "Profiles can be updated by self" ON profiles;
DROP POLICY IF EXISTS "Profiles are viewable by owner or parent" ON profiles;
DROP POLICY IF EXISTS "Profiles can be inserted by owner or parent" ON profiles;
DROP POLICY IF EXISTS "Profiles can be updated by owner or parent" ON profiles;

-- Policy for owners (Parents) to see/edit their own profile
CREATE POLICY "Users can manage own profile" 
ON profiles FOR ALL 
USING (auth.uid() = user_id);

-- Policy for parents to manage their children
CREATE POLICY "Parents can manage children profiles" 
ON profiles FOR ALL 
USING (
  parent_id IN (
    SELECT id FROM profiles WHERE user_id = auth.uid()
  )
);

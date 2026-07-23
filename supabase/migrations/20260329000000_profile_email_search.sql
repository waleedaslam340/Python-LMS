-- Add email column to profiles to allow searching for parents
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS email TEXT;

-- Update existing parents with their email from auth.users (if possible)
-- This won't work globally but will help for future parents.
-- For the prototype, we assume parents will sign in again or we manually backfill.

-- Update the trigger to populate the email column
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, user_id, email, username, full_name, role, avatar_url)
  VALUES (
    new.id,
    new.id,
    new.email, -- Copying from auth.users.email
    COALESCE(new.raw_user_meta_data->>'username', new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    'parent',
    COALESCE(new.raw_user_meta_data->>'avatar_url', '👤')
  )
  ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

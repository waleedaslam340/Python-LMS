-- Add PIN column for child profile security
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS pin TEXT;

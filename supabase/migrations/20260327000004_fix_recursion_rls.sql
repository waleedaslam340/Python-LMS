-- Fix infinite recursion in profiles RLS policies
-- 1. Drop the problematic recursive policies
DROP POLICY IF EXISTS "Users can manage own profile" ON profiles;
DROP POLICY IF EXISTS "Parents can manage children profiles" ON profiles;

-- 2. Re-implement non-recursive policies
-- Policy for Parents to manage their own profile
-- Check if the auth user ID matches the profile's user_id column
CREATE POLICY "Users can manage own profile" 
ON profiles FOR ALL 
USING (auth.uid() = user_id);

-- Policy for Parents to manage their children's profiles
-- In our system, the parent's profile ID is identical to their auth.users ID.
-- So we can directly compare parent_id with auth.uid() without a subquery.
CREATE POLICY "Parents can manage children profiles" 
ON profiles FOR ALL 
USING (parent_id = auth.uid());

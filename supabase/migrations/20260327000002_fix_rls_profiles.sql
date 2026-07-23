-- Fix RLS policies for profiles table
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Parents can view their children's profiles" ON profiles;

-- Enable RLS (already enabled but good to ensure)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 1. SELECT: Users can view their own profile or their children's profiles
CREATE POLICY "Profiles are viewable by self or parent" 
ON profiles FOR SELECT 
USING (auth.uid() = id OR auth.uid() = parent_id);

-- 2. INSERT: Users can insert their own profile (trigger handles this but good for fallback)
-- OR parents can insert child profiles
CREATE POLICY "Profiles can be inserted by self or parent" 
ON profiles FOR INSERT 
WITH CHECK (
  auth.uid() = id 
  OR 
  (auth.uid() = parent_id AND role = 'child')
);

-- 3. UPDATE: Users can update their own profile
CREATE POLICY "Profiles can be updated by self" 
ON profiles FOR UPDATE 
USING (auth.uid() = id);

-- 4. DELETE: Users can delete their own profile or parents can delete children
CREATE POLICY "Profiles can be deleted by self or parent" 
ON profiles FOR DELETE 
USING (auth.uid() = id OR auth.uid() = parent_id);

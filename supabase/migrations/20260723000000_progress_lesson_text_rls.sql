-- Allow curriculum string lesson IDs (e.g. w1-basics, html-w1-intro)
ALTER TABLE progress
  DROP CONSTRAINT IF EXISTS progress_lesson_id_fkey;

ALTER TABLE progress
  ALTER COLUMN lesson_id TYPE TEXT USING lesson_id::text;

-- Progress RLS: parents manage children's progress; users manage own
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

import { supabase } from '@/lib/supabase/client';

export interface ProgressProfile {
  id: string;
  username: string;
  avatar_url: string;
  role: 'parent' | 'child';
  points: number;
}

const LOCAL_PROGRESS_KEY = 'localLessonProgress';

function readLocalProgress(): Record<string, { lessons: string[]; points: number }> {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(LOCAL_PROGRESS_KEY) || '{}');
  } catch {
    return {};
  }
}

function writeLocalProgress(data: Record<string, { lessons: string[]; points: number }>) {
  localStorage.setItem(LOCAL_PROGRESS_KEY, JSON.stringify(data));
}

export function getLocalCompletedLessons(profileId: string): string[] {
  return readLocalProgress()[profileId]?.lessons ?? [];
}

export async function completeLessonProgress(
  lessonId: string,
  activeProfile: ProgressProfile | null,
  setActiveProfile: (profile: ProgressProfile | null) => void
): Promise<{ ok: boolean; message: string; redirectTo: string }> {
  const redirectTo = lessonId.startsWith('html') ? '/html-dashboard/kid' : '/dashboard/kid';

  if (!activeProfile || activeProfile.role !== 'child') {
    return {
      ok: false,
      message: 'Pick a kid profile first so we can save your progress!',
      redirectTo: '/select-profile',
    };
  }

  const { data: { user } } = await supabase.auth.getUser();
  const newPoints = (activeProfile.points || 0) + 100;

  if (user) {
    const { error: progressError } = await supabase.from('progress').upsert(
      {
        user_id: activeProfile.id,
        lesson_id: lessonId,
        completed: true,
        completed_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,lesson_id' }
    );

    if (progressError) {
      return {
        ok: false,
        message: `Could not save progress: ${progressError.message}`,
        redirectTo,
      };
    }

    const { error: pointsError } = await supabase
      .from('profiles')
      .update({ points: newPoints })
      .eq('id', activeProfile.id);

    if (pointsError) {
      return {
        ok: false,
        message: `Progress saved, but points update failed: ${pointsError.message}`,
        redirectTo,
      };
    }

    setActiveProfile({ ...activeProfile, points: newPoints });
    return {
      ok: true,
      message: 'Amazing job! You earned 100 points! 🌟',
      redirectTo,
    };
  }

  // Kid PIN-only session: localStorage fallback
  const store = readLocalProgress();
  const existing = store[activeProfile.id] || { lessons: [], points: activeProfile.points || 0 };
  if (!existing.lessons.includes(lessonId)) {
    existing.lessons.push(lessonId);
    existing.points = newPoints;
  } else {
    existing.points = Math.max(existing.points, newPoints);
  }
  store[activeProfile.id] = existing;
  writeLocalProgress(store);
  setActiveProfile({ ...activeProfile, points: existing.points });

  return {
    ok: true,
    message: 'Amazing job! You earned 100 points! (Saved on this device) 🌟',
    redirectTo,
  };
}

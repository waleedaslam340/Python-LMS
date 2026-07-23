"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useProfile } from '@/lib/context/ProfileContext';
import { useRouter } from 'next/navigation';
import styles from './KidDashboard.module.css';
import { curriculum } from '@/lib/curriculum/data';
import ProgressBar from '@/components/ProgressBar';
import { 
  Rocket, 
  Trophy, 
  Star, 
  ChevronRight, 
  CheckCircle,
  Layout,
  Terminal
} from 'lucide-react';
import { getLocalCompletedLessons } from '@/lib/progress';

export default function KidDashboard() {
  const { activeProfile, isLoading: profileLoading } = useProfile();
  const [progress, setProgress] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!profileLoading && !activeProfile) {
      router.push('/select-profile');
    } else if (activeProfile) {
      fetchProgress();
    }
  }, [activeProfile, profileLoading]);

  const fetchProgress = async () => {
    if (!activeProfile) return;

    const { data } = await supabase
      .from('progress')
      .select('*')
      .eq('user_id', activeProfile.id);

    const remote = data || [];
    const localIds = getLocalCompletedLessons(activeProfile.id);
    const remoteIds = new Set(remote.map((p: { lesson_id: string }) => p.lesson_id));
    const merged = [
      ...remote,
      ...localIds
        .filter((id) => !remoteIds.has(id))
        .map((lesson_id) => ({ lesson_id, completed: true, user_id: activeProfile.id })),
    ];
    setProgress(merged);
    setLoading(false);
  };

  if (profileLoading || loading) {
    return (
      <div className={styles.loading}>
        <Rocket size={48} className={styles.rocket} />
        Synchronizing with Mission Control...
      </div>
    );
  }

  const completedLessonIds = new Set(progress.map(p => p.lesson_id));
  const totalLessons = curriculum.length;
  const completedCount = completedLessonIds.size;
  const progressPercent = (completedCount / totalLessons) * 100;

  // Next recommended lesson
  const nextLesson = curriculum.find(l => !completedLessonIds.has(l.id)) || curriculum[0];

  const badges = [
    { name: 'First Steps', icon: '🐣', requirement: 1 },
    { name: 'Logic Master', icon: '🧠', requirement: 4 },
    { name: 'Function Wizard', icon: '🧙‍♂️', requirement: 6 },
    { name: 'Module Pro', icon: '🔌', requirement: 7 },
    { name: 'Phase 1 Hero', icon: '🦸‍♂️', requirement: 8 },
    { name: 'List Ninja', icon: '🥷', requirement: 9 },
    { name: 'OOP Architect', icon: '🏗️', requirement: 11 },
    { name: 'Recursion Master', icon: '🪞', requirement: 12 },
    { name: 'Galaxy Explorer', icon: '🌌', requirement: 13 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.welcome}>
          <h1>Welcome Back, {activeProfile?.username}! {activeProfile?.avatar_url}</h1>
          <p>You have earned <strong>{activeProfile?.points || 0}</strong> points so far!</p>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{completedCount}</span>
            <span className={styles.statLabel}>Lessons</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{activeProfile?.points || 0}</span>
            <span className={styles.statLabel}>Points</span>
          </div>
        </div>
      </header>

      <div className={styles.grid}>
        <div className={styles.mainCol}>
          <section className={styles.card}>
            <h2><Rocket className={styles.icon} /> Current Mission</h2>
            <div className={styles.missionItem} onClick={() => router.push(`/lessons/${nextLesson.week}`)}>
              <div className={styles.missionIcon}>🚀</div>
              <div className={styles.missionInfo}>
                <h3>{nextLesson.title}</h3>
                <p>{nextLesson.description}</p>
              </div>
              <ChevronRight />
            </div>
            <div style={{ marginTop: '2rem' }}>
              <ProgressBar progress={progressPercent} label="Course Progress" />
            </div>
          </section>

          <section className={`${styles.card} ${styles.lessonSection}`} style={{ marginTop: '2rem' }}>
            <h2><Terminal className={styles.icon} /> Recent Lessons</h2>
            <div className={styles.missionList}>
              {curriculum.slice(0, 5).map(lesson => {
                const isDone = completedLessonIds.has(lesson.id);
                return (
                  <div 
                    key={lesson.id} 
                    className={styles.missionItem}
                    onClick={() => router.push(`/lessons/${lesson.week}`)}
                  >
                    <div className={styles.missionIcon} style={{ background: isDone ? '#9ADE7B' : '#FFD93D' }}>
                      {isDone ? '✅' : '📝'}
                    </div>
                    <div className={styles.missionInfo}>
                      <h3>Week {lesson.week}: {lesson.title}</h3>
                    </div>
                    {isDone ? <CheckCircle size={20} className={styles.statusIcon} /> : <ChevronRight />}
                  </div>
                );
              })}
            </div>
            <button 
              onClick={() => router.push('/')}
              style={{ 
                marginTop: '1.5rem', 
                background: 'none', 
                border: 'none', 
                color: '#6BCBCA', 
                fontWeight: 700, 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              See all lessons <ChevronRight size={16} />
            </button>
          </section>
        </div>

        <aside className={styles.sidebar}>
          <section className={styles.card}>
            <h2><Trophy className={styles.icon} /> Your Badges</h2>
            <div className={styles.badgesGrid}>
              {badges.map((badge, idx) => {
                const isEarned = completedCount >= badge.requirement;
                return (
                  <div key={idx} className={`${styles.badge} ${isEarned ? styles.badgeEarned : ''}`}>
                    <span className={styles.badgeIcon}>{badge.icon}</span>
                    <span className={styles.badgeName}>{badge.name}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className={styles.card} style={{ marginTop: '2rem' }}>
            <h2><Star className={styles.icon} /> Daily Tip</h2>
            <p style={{ color: '#636E72', lineHeight: 1.6 }}>
              Always remember to talk to your Rubber Duck! 🦆 If you explain your code to a duck, you'll often find the solution yourself!
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}

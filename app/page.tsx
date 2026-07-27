"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { curriculum as pythonCurriculum } from '@/lib/curriculum/data';
import { htmlCurriculum } from '@/lib/curriculum/html-data';
import { useProfile } from '@/lib/context/ProfileContext';
import styles from './page.module.css';
import { Rocket, Trophy, Play, ChevronDown, ChevronUp, Sparkles, ArrowRight } from 'lucide-react';

export default function Home() {
  const [expandedCourse, setExpandedCourse] = useState<'python' | 'html' | null>('python');
  const { activeProfile } = useProfile();
  const points = activeProfile?.points ?? 0;

  const renderGrid = (course: 'python' | 'html') => {
    const data = course === 'python' ? pythonCurriculum : htmlCurriculum;
    const routePrefix = course === 'python' ? '/lessons' : '/html-lessons';

    return (
      <motion.div
        className={styles.grid}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        {data.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            className={`${styles.lessonCard} glass-panel`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -6 }}
          >
            <div className={styles.lessonHeader}>
              <span className={styles.weekNumber}>Week {lesson.week}</span>
              <span className={styles.phaseTag}>Phase {lesson.phase}</span>
            </div>
            <h3 className={styles.lessonTitle}>{lesson.title}</h3>
            <p className={styles.lessonDesc}>{lesson.description}</p>
            <Link href={`${routePrefix}/${lesson.week}`} className={styles.startBtn}>
              <Play size={18} fill="currentColor" /> Let&apos;s Start!
            </Link>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="container">
      <motion.header
        className={styles.hero}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={`${styles.heroInner} glass-panel`}>
          <motion.div
            className={styles.rocketWrap}
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
          >
            <Rocket size={56} className={styles.rocket} />
          </motion.div>
          <p className={styles.brandMark}>Python Mission Control</p>
          <h1 className={styles.title}>Learn to code like an explorer</h1>
          <p className={styles.subtitle}>
            {activeProfile
              ? `Welcome back, ${activeProfile.username}! Pick a path and keep building.`
              : 'Fun Python & HTML missions for kids — practice, play, and level up.'}
          </p>
          <div className={styles.heroActions}>
            <Link href="/courses" className={styles.ctaPrimary}>
              <Sparkles size={18} /> Explore Missions
            </Link>
            <Link
              href={activeProfile ? '/dashboard/kid' : '/login'}
              className={styles.ctaSecondary}
            >
              {activeProfile ? 'Open My Desk' : 'Log In'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </motion.header>

      <section className={styles.curriculum}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          Your Learning Path
        </motion.h2>
        <p className={styles.sectionHint}>Expand a track to jump into any week.</p>

        <div className={styles.courseContainer}>
          <motion.button
            type="button"
            className={`${styles.courseToggle} glass-panel ${expandedCourse === 'python' ? styles.courseToggleActive : ''}`}
            onClick={() => setExpandedCourse(expandedCourse === 'python' ? null : 'python')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            aria-expanded={expandedCourse === 'python'}
          >
            <div className={styles.courseToggleLeft}>
              <span className={`${styles.courseIcon} ${styles.pythonIcon}`} aria-hidden="true">
                🐍
              </span>
              <div className={styles.courseCopy}>
                <h3>Python Mission Control</h3>
                <span>{pythonCurriculum.length} weekly lessons</span>
              </div>
            </div>
            {expandedCourse === 'python' ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
          </motion.button>
          <AnimatePresence>{expandedCourse === 'python' && renderGrid('python')}</AnimatePresence>

          <motion.button
            type="button"
            className={`${styles.courseToggle} glass-panel ${expandedCourse === 'html' ? styles.courseToggleActive : ''}`}
            onClick={() => setExpandedCourse(expandedCourse === 'html' ? null : 'html')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            aria-expanded={expandedCourse === 'html'}
          >
            <div className={styles.courseToggleLeft}>
              <span className={`${styles.courseIcon} ${styles.htmlIcon}`} aria-hidden="true">
                🌐
              </span>
              <div className={styles.courseCopy}>
                <h3>HTML Web Builder</h3>
                <span>{htmlCurriculum.length} weekly lessons</span>
              </div>
            </div>
            {expandedCourse === 'html' ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
          </motion.button>
          <AnimatePresence>{expandedCourse === 'html' && renderGrid('html')}</AnimatePresence>
        </div>
      </section>

      <motion.section
        className={styles.stats}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className={`${styles.statCard} glass-panel`}>
          <Trophy size={44} color="#FFD93D" />
          <h3>{points} Points</h3>
          <p>
            {activeProfile
              ? `Nice work, ${activeProfile.username}! Keep going to earn badges.`
              : 'Log in to track points and unlock badges.'}
          </p>
        </div>
      </motion.section>
    </div>
  );
}

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { curriculum as pythonCurriculum } from '@/lib/curriculum/data';
import { htmlCurriculum } from '@/lib/curriculum/html-data';
import { useProfile } from '@/lib/context/ProfileContext';
import styles from './page.module.css';
import { Rocket, Trophy, Play, ChevronDown, ChevronUp } from 'lucide-react';

export default function Home() {
  const [expandedCourse, setExpandedCourse] = useState<'python' | 'html' | null>(null);
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
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, translateY: -5 }}
          >
            <div className={styles.lessonHeader}>
              <span className={styles.weekNumber}>Week {lesson.week}</span>
              <span className={styles.phaseTag}>Phase {lesson.phase}</span>
            </div>
            <h3 className={styles.lessonTitle}>{lesson.title}</h3>
            <p className={styles.lessonDesc}>{lesson.description}</p>
            <Link href={`${routePrefix}/${lesson.week}`} className={styles.startBtn}>
              <Play size={18} fill="currentColor" /> Let's Start!
            </Link>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="container">
      <motion.header 
        className={`${styles.hero} glass-panel`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Rocket size={64} className={styles.rocket} />
        </motion.div>
        <p className={styles.brandEyebrow}>Mission Control</p>
        <h1 className={styles.title}>Python for Kids</h1>
        <p className={styles.subtitle}>Ready to become a coding wizard? Choose your path!</p>
      </motion.header>

      <section className={styles.curriculum}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Your Learning Path
        </motion.h2>
        
        <div className={styles.courseContainer}>
          {/* Python Course Toggle */}
          <motion.div 
            className={`${styles.courseToggle} glass-panel ${expandedCourse === 'python' ? styles.courseToggleActive : ''}`}
            onClick={() => setExpandedCourse(expandedCourse === 'python' ? null : 'python')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.courseToggleLeft}>
              <span className={styles.courseIcon}>🐍</span>
              <h3>Python Mission Control</h3>
            </div>
            {expandedCourse === 'python' ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
          </motion.div>
          <AnimatePresence>
            {expandedCourse === 'python' && renderGrid('python')}
          </AnimatePresence>

          {/* HTML Course Toggle */}
          <motion.div 
            className={`${styles.courseToggle} glass-panel ${expandedCourse === 'html' ? styles.courseToggleActive : ''}`}
            onClick={() => setExpandedCourse(expandedCourse === 'html' ? null : 'html')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.courseToggleLeft}>
              <span className={styles.courseIcon}>🌐</span>
              <h3>HTML Web Builder</h3>
            </div>
            {expandedCourse === 'html' ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
          </motion.div>
          <AnimatePresence>
            {expandedCourse === 'html' && renderGrid('html')}
          </AnimatePresence>
        </div>
      </section>

      <motion.section 
        className={styles.stats}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div 
          className={`${styles.statCard} glass-panel`}
          whileHover={{ rotate: [-1, 1, -1, 1, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Trophy size={48} color="#FFD93D" />
          <h3>{points} Points</h3>
          <p>
            {activeProfile
              ? `Nice work, ${activeProfile.username}! Keep going to earn badges!`
              : 'Keep going to earn badges!'}
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}

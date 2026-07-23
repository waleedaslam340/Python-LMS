"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  progress: number; // 0 to 100
  label?: string;
}

export default function ProgressBar({ progress, label }: ProgressBarProps) {
  const getMessage = (p: number) => {
    if (p === 0) return "Ready to start? 🚀";
    if (p < 25) return "Great start! 🌟";
    if (p < 50) return "Halfway there! Keep going! 💪";
    if (p < 75) return "You're a coding pro! 🧙‍♂️";
    if (p < 100) return "Almost a Python Master! 🔥";
    return "You're a Python Master! 🏆";
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.label}>{label || "Your Progress"}</span>
        <span className={styles.percentage}>{Math.round(progress)}%</span>
      </div>
      <div className={styles.track}>
        <motion.div 
          className={styles.fill}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <p className={styles.message}>{getMessage(progress)}</p>
    </div>
  );
}

"use client";

import Link from 'next/link';
import { Home, User, Star, Sun, Moon, BookOpen } from 'lucide-react';
import { useProfile } from '@/lib/context/ProfileContext';
import { useTheme } from '@/lib/context/ThemeContext';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { activeProfile, logout } = useProfile();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>
        <span className={styles.brandIcon} aria-hidden="true">🐍</span>
        <span className={styles.brandText}>Python Mission Control</span>
      </Link>
      <div className={styles.linksContainer}>
        <motion.button
          onClick={toggleTheme}
          className={styles.themeToggle}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          whileTap={{ scale: 0.9 }}
          initial={false}
          animate={{ rotate: theme === 'light' ? 0 : 180 }}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </motion.button>

        <Link href="/" className={styles.navLink}>
          <Home size={18} /> Home
        </Link>
        <Link href="/courses" className={styles.navLink}>
          <BookOpen size={18} /> Courses
        </Link>
        <Link href="/dashboard/kid" className={styles.navLink}>
          <Star size={18} /> My Desk
        </Link>
        <Link href="/parent" className={styles.navLink}>
          <User size={18} /> Parents
        </Link>

        {activeProfile ? (
          <motion.div
            className={styles.profileBadge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className={styles.avatar}>{activeProfile.avatar_url}</span>
            <span className={styles.username}>{activeProfile.username}</span>
            <button onClick={logout} className={styles.logoutBtn} type="button">
              Log Out
            </button>
          </motion.div>
        ) : (
          <Link href="/login" className={styles.loginBtn}>
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
}

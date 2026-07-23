import Link from 'next/link';
import styles from './page.module.css';

const upcoming = [
  {
    key: 'computer',
    icon: '💻',
    title: 'Computer Basics',
    desc: 'Understand how computers work: hardware, software, and everyday digital tools.',
    cardClass: styles.computerCard,
  },
  {
    key: 'network',
    icon: '🌐',
    title: 'Network Basics',
    desc: 'Learn the fundamentals of networks, routers, and how devices talk to each other.',
    cardClass: styles.networkCard,
  },
  {
    key: 'digest',
    icon: '📡',
    title: 'Digest IP',
    desc: 'Decode IP addresses, packets, and the basics of how the internet moves data.',
    cardClass: styles.digestCard,
  },
];

export default function CoursesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Select Your Mission</h1>
      <p className={styles.subtitle}>Pick a live track — more missions are on the way.</p>

      <div className={styles.grid}>
        <Link href="/dashboard/kid" className={`${styles.card} ${styles.pythonCard} glass-panel`}>
          <div className={styles.icon}>🐍</div>
          <h2 className={styles.cardTitle}>Python Mission Control</h2>
          <p className={styles.cardDesc}>
            Learn to code with Python! Build games, solve puzzles, and become a coding wizard.
          </p>
          <div className={styles.startBtn}>Launch Python</div>
        </Link>

        <Link href="/html-dashboard/kid" className={`${styles.card} ${styles.htmlCard} glass-panel`}>
          <div className={styles.icon}>🌐</div>
          <h2 className={styles.cardTitle}>HTML Web Builder</h2>
          <p className={styles.cardDesc}>
            Master the building blocks of the web! Create your own websites from scratch.
          </p>
          <div className={styles.startBtn}>Launch HTML</div>
        </Link>

        {upcoming.map((course) => (
          <div
            key={course.key}
            className={`${styles.card} ${course.cardClass} ${styles.comingSoon} glass-panel`}
            aria-disabled="true"
          >
            <span className={styles.comingSoonBadge}>Coming soon</span>
            <div className={styles.icon}>{course.icon}</div>
            <h2 className={styles.cardTitle}>{course.title}</h2>
            <p className={styles.cardDesc}>{course.desc}</p>
            <div className={`${styles.startBtn} ${styles.comingSoonBtn}`}>Not available yet</div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Link from 'next/link';
import styles from '../page.module.css';

export default function NetworkBasicsPage() {
  return (
    <div className={styles.container}>
      <span className={styles.comingSoonBadge}>Coming soon</span>
      <h1 className={styles.title}>Network Basics</h1>
      <p className={styles.cardDesc}>
        This mission is still under construction. Check back soon for networks, routers, and how devices talk!
      </p>
      <Link href="/courses" className={`${styles.startBtn} ${styles.backLink}`}>
        Back to Courses
      </Link>
    </div>
  );
}

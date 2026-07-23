import Link from 'next/link';
import styles from '../page.module.css';

export default function DigestIPPage() {
  return (
    <div className={styles.container}>
      <span className={styles.comingSoonBadge}>Coming soon</span>
      <h1 className={styles.title}>Digest IP</h1>
      <p className={styles.cardDesc}>
        This mission is still under construction. Check back soon for IP addresses, packets, and internet basics!
      </p>
      <Link href="/courses" className={`${styles.startBtn} ${styles.backLink}`}>
        Back to Courses
      </Link>
    </div>
  );
}

import Link from 'next/link';
import { Dictionary } from '@/types';
import styles from './Footer.module.css';

interface FooterProps {
  dict: Dictionary;
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const copyright = dict.footer.copyright.replace('{year}', currentYear.toString());

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <nav className={styles.links}>
          <Link href="/legal" className={styles.link}>
            {dict.footer.legal}
          </Link>
          <Link href="/privacy" className={styles.link}>
            {dict.footer.privacy}
          </Link>
        </nav>
        
        <p className={styles.copyright}>{copyright}</p>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { Dictionary } from '@/types';
import styles from './Footer.module.css';

interface FooterProps {
  dict?: Dictionary;
  dictionary?: { footer: { tagline?: string; legal: string; privacy: string; copyright: string } };
}

export default function Footer({ dict, dictionary }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const footer = dict?.footer || dictionary?.footer;
  
  if (!footer) {
    return null;
  }
  
  const copyright = footer.copyright.replace('{year}', currentYear.toString()).replace('© 2024', `© ${currentYear}`);

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.container}`}>
        <nav className={styles.links} aria-label="Footer navigation">
          <Link href="/legal" className={styles.link}>
            {footer.legal}
          </Link>
          <Link href="/privacy" className={styles.link}>
            {footer.privacy}
          </Link>
        </nav>
        
        <p className={styles.copyright}>{copyright}</p>
      </div>
    </footer>
  );
}

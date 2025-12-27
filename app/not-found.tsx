import Link from 'next/link';
import styles from './error.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.message}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className={styles.suggestions}>
          <p className={styles.suggestionsTitle}>Try one of these popular tools:</p>
          <div className={styles.linksGrid}>
            <Link href="/pinterest-video-downloader" className={styles.suggestionLink}>
              📌 Pinterest Video Downloader
            </Link>
            <Link href="/reddit-video-downloader" className={styles.suggestionLink}>
              🎬 Reddit Video Downloader
            </Link>
            <Link href="/twitter-video-downloader" className={styles.suggestionLink}>
              🐦 Twitter/X Video Downloader
            </Link>
            <Link href="/" className={styles.suggestionLink}>
              🏠 Homepage
            </Link>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/" className="btn btn-primary">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

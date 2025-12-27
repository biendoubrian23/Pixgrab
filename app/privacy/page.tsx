import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Pixgrab media downloader. Learn how we handle your data.',
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <Link href="/" className={styles.backLink}>← Back to home</Link>
          
          <h1 className={styles.title}>Privacy Policy</h1>
          
          <section className={styles.section}>
            <h2>Our Commitment</h2>
            <p>
              Pixgrab is designed with privacy in mind. We collect minimal data and 
              do not track your activity. Your privacy is important to us.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2>What We Don't Do</h2>
            <ul>
              <li>We don't require you to create an account</li>
              <li>We don't store the URLs you submit</li>
              <li>We don't store the media you download</li>
              <li>We don't use cookies for tracking</li>
              <li>We don't sell any data to third parties</li>
              <li>We don't use invasive analytics</li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h2>What We Do</h2>
            <ul>
              <li>
                <strong>Rate Limiting:</strong> We temporarily store your IP address in memory 
                (not on disk) to prevent abuse. This data is automatically deleted after 1 minute.
              </li>
              <li>
                <strong>Server Logs:</strong> Standard server logs may temporarily contain 
                IP addresses for security purposes. These are automatically rotated and deleted.
              </li>
              <li>
                <strong>Analytics:</strong> We may use privacy-focused analytics (like Plausible 
                or Simple Analytics) that don't use cookies or track personal data.
              </li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h2>How Media Download Works</h2>
            <p>
              When you submit a URL, we:
            </p>
            <ol>
              <li>Fetch the page to extract the media URL</li>
              <li>Stream the media directly to your browser</li>
              <li>Nothing is stored on our servers</li>
            </ol>
            <p>
              The entire process happens in real-time. We are simply a bridge between 
              you and the original source.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2>Third-Party Services</h2>
            <p>
              The downloaded media comes from third-party platforms (Pinterest, Reddit, X). 
              Please refer to their respective privacy policies for information about how 
              they handle your data:
            </p>
            <ul>
              <li><a href="https://policy.pinterest.com/privacy-policy" target="_blank" rel="noopener">Pinterest Privacy Policy</a></li>
              <li><a href="https://www.reddit.com/policies/privacy-policy" target="_blank" rel="noopener">Reddit Privacy Policy</a></li>
              <li><a href="https://twitter.com/privacy" target="_blank" rel="noopener">X (Twitter) Privacy Policy</a></li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h2>Your Rights</h2>
            <p>
              Since we don't collect personal data, there's nothing to delete. 
              However, if you have any privacy concerns, please contact us.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2>Contact</h2>
            <p>
              For privacy-related questions: 
              <a href="mailto:privacy@pixgrab.com">privacy@pixgrab.com</a>
            </p>
          </section>
          
          <p className={styles.lastUpdated}>Last updated: December 2024</p>
        </div>
      </div>
    </div>
  );
}

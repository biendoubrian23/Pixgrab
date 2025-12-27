import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Legal notice and terms of use for Pixgrab media downloader.',
};

export default function LegalPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <Link href="/" className={styles.backLink}>← Back to home</Link>
          
          <h1 className={styles.title}>Legal Notice</h1>
          
          <section className={styles.section}>
            <h2>About Pixgrab</h2>
            <p>
              Pixgrab is a free online tool that allows users to download publicly available 
              media (photos and videos) from Pinterest, Reddit, and X (Twitter) platforms.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2>Terms of Use</h2>
            <p>
              By using Pixgrab, you agree to the following terms:
            </p>
            <ul>
              <li>
                You will only download content that you have the right to download 
                (your own content, public domain, or with proper authorization).
              </li>
              <li>
                You will respect the copyright and intellectual property rights of content creators.
              </li>
              <li>
                You will not use downloaded content for commercial purposes without proper authorization.
              </li>
              <li>
                You will not use Pixgrab to infringe on anyone's rights or violate any laws.
              </li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h2>Disclaimer</h2>
            <p>
              Pixgrab is a technical tool that facilitates the download of publicly accessible media. 
              We do not host, store, or distribute any media content. All media is streamed directly 
              from the original source to the user.
            </p>
            <p>
              Users are solely responsible for ensuring they have the right to download and use 
              any content obtained through Pixgrab. We are not responsible for any misuse of 
              downloaded content.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2>DMCA / Copyright</h2>
            <p>
              If you are a content creator and believe your content is being downloaded without 
              authorization, please contact the original platform (Pinterest, Reddit, or X) to 
              adjust your privacy settings or remove the content.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2>Contact</h2>
            <p>
              For any questions regarding these terms, please contact us at: 
              <a href="mailto:legal@pixgrab.com">legal@pixgrab.com</a>
            </p>
          </section>
          
          <p className={styles.lastUpdated}>Last updated: December 2024</p>
        </div>
      </div>
    </div>
  );
}

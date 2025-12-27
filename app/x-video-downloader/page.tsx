'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import { MediaResult } from '@/types';
import { getDictionary } from '@/locales';
import styles from '../pinterest-video-downloader/page.module.css';

export default function XVideoDownloaderPage() {
  const dict = getDictionary('en');
  const [result, setResult] = useState<MediaResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async (url: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'An error occurred');
        return;
      }

      if (data.success && data.data) {
        setResult(data.data);
      } else {
        setError(data.error || 'No media found');
      }
    } catch {
      setError('Network error');
    } finally {
      setIsLoading(false);
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I download videos from X?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copy the X post URL containing the video, paste it into Pixgrab, and click Download. Your video will be ready instantly."
        }
      },
      {
        "@type": "Question",
        "name": "Does Pixgrab work with the new x.com domain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Pixgrab works with both x.com and twitter.com URLs. Simply paste either URL format."
        }
      },
      {
        "@type": "Question",
        "name": "What quality can I download X videos in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pixgrab downloads X videos in the highest available quality, up to 1080p HD."
        }
      },
      {
        "@type": "Question",
        "name": "Is downloading X videos free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Pixgrab is completely free to use with no download limits."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download X videos on my phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Pixgrab works on iPhone, Android, and any device with a web browser."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download X Videos",
    "description": "Step-by-step guide to download videos from X (Twitter)",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Find the X post",
        "text": "Open X and find the post with the video you want"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Copy the URL",
        "text": "Tap share and copy the post link"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Paste in Pixgrab",
        "text": "Paste the URL into Pixgrab"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Download",
        "text": "Click Download and save your video"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Header dict={dict} />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>X Video Downloader</h1>
          <p className={styles.subtitle}>
            Download videos from X (formerly Twitter) in HD quality. Works with both x.com and twitter.com links - free, fast, no watermark.
          </p>
          <div className={styles.formWrapper}>
            <DownloadForm
              dict={dict}
              isLoading={isLoading}
              error={error}
              onSubmit={handleDownload}
            />
            {result && <Result dict={dict} result={result} />}
          </div>
        </section>

        <section className={styles.contentSection}>
          <h2>Download Videos from X.com Easily</h2>
          <p>
            X (the platform formerly known as Twitter) is home to millions of videos shared daily. From 
            breaking news clips to viral moments, entertainment highlights to educational content - there's 
            always something worth saving. Pixgrab makes it simple to download any X video in high quality.
          </p>
          <p>
            Since Twitter rebranded to X, many users wonder if video downloaders still work. The answer 
            is yes! Pixgrab fully supports both the new x.com domain and the classic twitter.com URLs. 
            Just paste either format and we'll handle the rest.
          </p>

          <h2>X Video Downloader Features</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>🔗 Both Domains</h3>
              <p>Works with x.com and twitter.com URLs seamlessly.</p>
            </div>
            <div className={styles.feature}>
              <h3>📺 HD Quality</h3>
              <p>Download in the highest available quality up to 1080p.</p>
            </div>
            <div className={styles.feature}>
              <h3>🔊 With Audio</h3>
              <p>Videos include full audio - no silent downloads.</p>
            </div>
            <div className={styles.feature}>
              <h3>⚡ Fast Process</h3>
              <p>Download starts instantly after pasting the URL.</p>
            </div>
          </div>

          <h2>How to Download X Videos</h2>
          <ol className={styles.steps}>
            <li><strong>Find the post</strong> - Open X and locate the video you want to save</li>
            <li><strong>Copy the link</strong> - Tap the share icon and copy the post URL</li>
            <li><strong>Paste above</strong> - Enter the URL in the Pixgrab download box</li>
            <li><strong>Download</strong> - Click Download and save to your device</li>
          </ol>

          <h2>Popular X Video Categories</h2>
          <p>
            Users commonly download X videos from these categories:
          </p>
          <ul>
            <li><strong>Sports Highlights</strong> - Game-winning moments, incredible plays, athlete interviews</li>
            <li><strong>News & Current Events</strong> - Breaking news clips, press conferences, live footage</li>
            <li><strong>Entertainment</strong> - Movie trailers, music videos, celebrity content</li>
            <li><strong>Educational Content</strong> - Tutorials, explainers, how-to videos</li>
            <li><strong>Viral Moments</strong> - Trending clips, memes, funny videos</li>
          </ul>

          <h2>X vs Twitter: What Changed?</h2>
          <p>
            In 2023, Twitter was rebranded to X under new ownership. While the name and logo changed, 
            the video functionality remains largely the same. Pixgrab supports both the legacy twitter.com 
            URLs and the new x.com domain, so you can download videos regardless of which link format you have.
          </p>
        </section>

        <section className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>How do I download videos from X?</h3>
              <p>Copy the X post URL containing the video, paste it into Pixgrab, and click Download.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Does Pixgrab work with the new x.com domain?</h3>
              <p>Yes! Pixgrab works with both x.com and twitter.com URLs. Simply paste either URL format.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What quality can I download X videos in?</h3>
              <p>Pixgrab downloads X videos in the highest available quality, up to 1080p HD.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is downloading X videos free?</h3>
              <p>Yes, Pixgrab is completely free to use with no download limits.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I download X videos on my phone?</h3>
              <p>Absolutely! Pixgrab works on iPhone, Android, and any device with a web browser.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict} />
    </>
  );
}

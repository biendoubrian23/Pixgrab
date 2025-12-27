'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { MediaResult } from '@/types';
import { en } from '@/locales/en';
import styles from '../download-pinterest-photos/page.module.css';

const xVideosFAQ = {
  ...en,
  faq: {
    title: 'X (Twitter) Videos Download - FAQ',
    items: [
      {
        question: 'How do I download X/Twitter videos?',
        answer: 'Copy the tweet URL containing the video, paste it above, and click Download. We\'ll fetch the video in the best quality.',
      },
      {
        question: 'Does this work with the new X.com URLs?',
        answer: 'Yes! We support both twitter.com and x.com URLs.',
      },
      {
        question: 'Can I download Twitter GIFs?',
        answer: 'Yes, Twitter GIFs are converted to videos and can be downloaded like any other video.',
      },
      {
        question: 'What quality are the videos?',
        answer: 'We download the highest quality version available, typically 720p or 1080p when available.',
      },
      {
        question: 'Why doesn\'t my link work?',
        answer: 'Make sure the tweet is public and contains a video. Protected accounts and age-restricted content may not work.',
      },
    ],
  },
  hero: {
    ...en.hero,
    title: 'Download X (Twitter) Videos in HD',
    subtitle: 'Save videos from X/Twitter in best quality. Fast and free.',
  },
  input: {
    ...en.input,
    placeholder: 'Paste X/Twitter post URL here...',
  },
};

export default function DownloadXVideosPage() {
  const [result, setResult] = useState<MediaResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dict = xVideosFAQ;

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
        setError(data.error || dict.errors.serverError);
        return;
      }

      if (data.success && data.data) {
        setResult(data.data);
      } else {
        setError(data.error || dict.errors.noMedia);
      }
    } catch (err) {
      setError(dict.errors.networkError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className={styles.page}>
      <Header dict={dict} />
      
      <main className={styles.main}>
        <div className="container">
          <div className="content-narrow">
            <section className={styles.hero}>
              <h1 className={styles.title}>{dict.hero.title}</h1>
              <p className={styles.subtitle}>{dict.hero.subtitle}</p>
            </section>
            
            <section className={styles.downloadSection}>
              <DownloadForm
                dict={dict}
                isLoading={isLoading}
                error={error}
                onSubmit={handleDownload}
              />
              {result && <Result dict={dict} result={result} />}
            </section>
            
            <section className={styles.contentSection}>
              <h2>How to Download X/Twitter Videos</h2>
              <ol>
                <li>Find the tweet with the video you want to save</li>
                <li>Click on the tweet to open it</li>
                <li>Copy the URL from your browser's address bar</li>
                <li>Paste it in the download field above</li>
                <li>Click Download and save the HD video</li>
              </ol>
              
              <h2>Features of Our X Video Downloader</h2>
              <ul>
                <li><strong>HD Quality:</strong> Download in the highest resolution available</li>
                <li><strong>X.com & Twitter.com:</strong> Both URL formats supported</li>
                <li><strong>GIF Support:</strong> Twitter GIFs are downloaded as videos</li>
                <li><strong>No Account:</strong> Download without logging into X</li>
                <li><strong>Mobile Ready:</strong> Works on iPhone, Android, and all devices</li>
              </ul>
            </section>
          </div>
        </div>
        
        <section className={styles.faqSection}>
          <div className="container">
            <div className="content-narrow">
              <FAQ dict={dict} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer dict={dict} />
    </div>
  );
}

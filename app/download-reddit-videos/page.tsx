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

const redditVideosFAQ = {
  ...en,
  faq: {
    title: 'Reddit Videos Download - FAQ',
    items: [
      {
        question: 'How do I download Reddit videos?',
        answer: 'Copy the Reddit post URL, paste it above, and click Download. We\'ll fetch the video in the best available quality.',
      },
      {
        question: 'Does this work with Reddit videos that have sound?',
        answer: 'Yes! We download Reddit videos with their audio track included.',
      },
      {
        question: 'Can I download v.redd.it videos?',
        answer: 'Yes, we support all Reddit video formats including v.redd.it hosted videos.',
      },
      {
        question: 'What about Reddit GIFs?',
        answer: 'Reddit GIFs are actually videos. Just paste the link and we\'ll download them.',
      },
      {
        question: 'Do NSFW posts work?',
        answer: 'We can only download publicly accessible content. Some NSFW subreddits may require login.',
      },
    ],
  },
  hero: {
    ...en.hero,
    title: 'Download Reddit Videos with Audio',
    subtitle: 'Save Reddit videos in HD quality. Sound included. No app needed.',
  },
  input: {
    ...en.input,
    placeholder: 'Paste Reddit post URL here...',
  },
};

export default function DownloadRedditVideosPage() {
  const [result, setResult] = useState<MediaResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dict = redditVideosFAQ;

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
              {!result ? (
                <DownloadForm
                  dict={dict}
                  isLoading={isLoading}
                  error={error}
                  onSubmit={handleDownload}
                />
              ) : (
                <Result dict={dict} result={result} onReset={handleReset} />
              )}
            </section>
            
            <section className={styles.contentSection}>
              <h2>How to Download Reddit Videos</h2>
              <ol>
                <li>Find the Reddit post with the video you want</li>
                <li>Copy the post URL (e.g., reddit.com/r/subreddit/comments/...)</li>
                <li>Paste the URL in the field above</li>
                <li>Click Download</li>
                <li>Save the video to your device</li>
              </ol>
              
              <h2>Why Use Pixgrab for Reddit Videos?</h2>
              <ul>
                <li><strong>Audio Included:</strong> Unlike other tools, we include the sound</li>
                <li><strong>Best Quality:</strong> We fetch the highest resolution available</li>
                <li><strong>No Reddit Account:</strong> Download without logging in</li>
                <li><strong>Mobile Support:</strong> Works on all devices</li>
                <li><strong>v.redd.it Support:</strong> Full support for Reddit's video hosting</li>
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

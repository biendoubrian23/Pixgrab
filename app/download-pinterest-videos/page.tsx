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

const pinterestVideosFAQ = {
  ...en,
  faq: {
    title: 'Pinterest Videos Download - FAQ',
    items: [
      {
        question: 'How do I download Pinterest videos?',
        answer: 'Copy the Pinterest video pin URL, paste it in the input field above, and click Download. The video will be saved in original quality.',
      },
      {
        question: 'What format are Pinterest videos?',
        answer: 'Pinterest videos are typically in MP4 format. We preserve the original format and quality.',
      },
      {
        question: 'Can I download Pinterest videos on my phone?',
        answer: 'Yes! Pixgrab works on all devices. On mobile, tap Download, then save the video to your camera roll.',
      },
      {
        question: 'Why can\'t I download some Pinterest videos?',
        answer: 'Some pins may be private or region-restricted. We can only download publicly accessible content.',
      },
      {
        question: 'Is there a size limit?',
        answer: 'There\'s no strict limit, but very long videos may take longer to process.',
      },
    ],
  },
  hero: {
    ...en.hero,
    title: 'Download Pinterest Videos in HD Quality',
    subtitle: 'Save Pinterest video pins in original resolution. Fast and free.',
  },
};

export default function DownloadPinterestVideosPage() {
  const [result, setResult] = useState<MediaResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dict = pinterestVideosFAQ;

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
              <h2>How to Download Pinterest Videos</h2>
              <ol>
                <li>Open Pinterest and find the video you want to save</li>
                <li>Click on the pin to open it in full view</li>
                <li>Copy the URL from your browser</li>
                <li>Paste it in the download field above</li>
                <li>Click Download and save the HD video</li>
              </ol>
              
              <h2>Features of Our Pinterest Video Downloader</h2>
              <ul>
                <li><strong>HD Quality:</strong> Download videos in their original resolution</li>
                <li><strong>MP4 Format:</strong> Universal format that works everywhere</li>
                <li><strong>No Watermark:</strong> Clean videos without added branding</li>
                <li><strong>Mobile Friendly:</strong> Works perfectly on iOS and Android</li>
                <li><strong>Instant Download:</strong> No waiting, no queues</li>
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

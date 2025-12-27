'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { MediaResult } from '@/types';
import { en } from '@/locales/en';
import styles from './page.module.css';

const pinterestPhotosFAQ = {
  ...en,
  faq: {
    title: 'Pinterest Photos Download - FAQ',
    items: [
      {
        question: 'How do I download Pinterest photos?',
        answer: 'Simply paste the Pinterest pin URL in the input field above and click Download. We\'ll extract the original quality image for you.',
      },
      {
        question: 'What quality are the downloaded photos?',
        answer: 'We always download the original, highest quality version available. No compression, no watermark.',
      },
      {
        question: 'Can I download multiple photos from a Pinterest board?',
        answer: 'Currently, you can download one pin at a time. Paste each pin URL separately.',
      },
      {
        question: 'Do I need a Pinterest account?',
        answer: 'No, you don\'t need any account. Just paste the link to any public pin.',
      },
      {
        question: 'Is this free?',
        answer: 'Yes, Pixgrab is completely free. No registration, no subscription.',
      },
    ],
  },
  hero: {
    ...en.hero,
    title: 'Download Pinterest Photos in Original Quality',
    subtitle: 'Save any Pinterest image in full resolution. No login required.',
  },
};

export default function DownloadPinterestPhotosPage() {
  const [result, setResult] = useState<MediaResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dict = pinterestPhotosFAQ;

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
              <h2>How to Download Pinterest Photos</h2>
              <ol>
                <li>Find the Pinterest pin you want to download</li>
                <li>Copy the pin URL from your browser's address bar</li>
                <li>Paste the URL in the input field above</li>
                <li>Click the Download button</li>
                <li>Save the original quality image to your device</li>
              </ol>
              
              <h2>Why Use Pixgrab for Pinterest Photos?</h2>
              <ul>
                <li><strong>Original Quality:</strong> Get the full resolution image, not a compressed version</li>
                <li><strong>No Watermark:</strong> Download clean images without any added watermarks</li>
                <li><strong>No Account Required:</strong> No need to log in to Pinterest or create an account</li>
                <li><strong>Works on Mobile:</strong> Download directly to your phone or tablet</li>
                <li><strong>Free Forever:</strong> No hidden costs, subscriptions, or premium tiers</li>
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

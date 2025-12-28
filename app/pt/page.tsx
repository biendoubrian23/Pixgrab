'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { MediaResult } from '@/types';
import { pt } from '@/locales/pt';
import styles from '../page.module.css';

export default function PortugueseHome() {
  const [result, setResult] = useState<MediaResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dict = pt;

  const handleDownload = async (url: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
      <Header dict={dict} locale="pt" />
      
      <main className={styles.main}>
        <div className="container">
          <div className="content-narrow">
            <Hero dict={dict} />
            
            <section className={styles.downloadSection}>
              <DownloadForm
                dict={dict}
                isLoading={isLoading}
                error={error}
                onSubmit={handleDownload}
              />
              {result && (
                <Result
                  dict={dict}
                  result={result}
                />
              )}
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

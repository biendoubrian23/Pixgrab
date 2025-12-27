'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import Footer from '@/components/Footer';
import { MediaResult } from '@/types';
import { en } from '@/locales/en';
import styles from '../pinterest-video-downloader/page.module.css';

export default function RedditVideoDownloader() {
  const [result, setResult] = useState<MediaResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dict = en;

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
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const faqs = [
    {
      question: "How to download Reddit videos with sound?",
      answer: "Pixgrab automatically downloads Reddit videos with audio. Just paste the Reddit URL and click Download - the video will include sound."
    },
    {
      question: "Why do Reddit videos have no sound?",
      answer: "Reddit stores video and audio separately. Pixgrab merges them automatically so you get the complete video with sound."
    },
    {
      question: "Can I download Reddit videos on mobile?",
      answer: "Yes! Pixgrab works on all devices including iPhone, Android, iPad, and desktop browsers."
    },
    {
      question: "Is downloading Reddit videos free?",
      answer: "Yes, Pixgrab is 100% free to use. No registration, no hidden fees."
    },
    {
      question: "What Reddit video quality is available?",
      answer: "We provide the highest quality available, including 720p, 1080p, and 4K when available."
    },
    {
      question: "Can I download Reddit GIFs?",
      answer: "Absolutely! Pixgrab supports all Reddit media including videos, GIFs, and images."
    }
  ];

  return (
    <div className={styles.page}>
      <Header dict={dict} />
      
      <main className={styles.main}>
        <div className="container">
          <section className={styles.hero}>
            <h1 className={styles.title}>
              Reddit Video Downloader
              <span className={styles.highlight}> — With Sound, HD Quality</span>
            </h1>
            <p className={styles.subtitle}>
              Download Reddit videos with sound in HD quality. No watermark, no registration. 
              Save Reddit videos and GIFs to your device instantly.
            </p>
            
            <div className={styles.features}>
              <span className={styles.feature}>✓ Video + Audio</span>
              <span className={styles.feature}>✓ HD Quality</span>
              <span className={styles.feature}>✓ Free Forever</span>
              <span className={styles.feature}>✓ GIFs Supported</span>
            </div>
          </section>

          <section className={styles.downloadSection}>
            <DownloadForm
              dict={dict}
              isLoading={isLoading}
              error={error}
              onSubmit={handleDownload}
            />
            
            {result && (
              <Result dict={dict} result={result} />
            )}
          </section>

          <section className={styles.howTo}>
            <h2>How to Download Reddit Videos</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <h3>Copy the Reddit URL</h3>
                <p>Find the Reddit post with the video you want, click Share, and copy the link.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <h3>Paste the Link</h3>
                <p>Paste the copied Reddit video link into the input field above.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <h3>Download with Sound</h3>
                <p>Click Download and get your Reddit video with audio included!</p>
              </div>
            </div>
          </section>

          <section className={styles.content}>
            <h2>Best Reddit Video Downloader with Sound</h2>
            <p>
              Pixgrab is the most reliable Reddit video downloader that actually includes audio. 
              Unlike Reddit's native player that stores video and audio separately, Pixgrab 
              automatically merges them for you.
            </p>
            <p>
              Whether you want to save a funny video from r/videos, a tutorial from r/DIY, 
              or a clip from r/gaming, Pixgrab handles it all. Download Reddit videos in 
              the highest quality with full audio support.
            </p>
            
            <h3>Why Reddit Videos Don't Have Sound</h3>
            <p>
              Reddit hosts video and audio as separate files to save bandwidth. When you try 
              to download directly, you often get silent video. Pixgrab solves this by 
              automatically detecting and merging both streams.
            </p>

            <h3>Features of Our Reddit Downloader</h3>
            <ul>
              <li><strong>Audio Included:</strong> Videos download with sound, always</li>
              <li><strong>Multiple Formats:</strong> MP4, WebM, GIF support</li>
              <li><strong>All Subreddits:</strong> Works with any public Reddit post</li>
              <li><strong>High Quality:</strong> Up to 4K resolution when available</li>
              <li><strong>No Account Needed:</strong> Start downloading immediately</li>
              <li><strong>Cross-Platform:</strong> Works on any device or browser</li>
            </ul>
          </section>

          <section className={styles.faq}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details key={index} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.question}</summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer dict={dict} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Pixgrab Reddit Video Downloader",
            "url": "https://pixgrab.com/reddit-video-downloader",
            "description": "Download Reddit videos with sound in HD quality for free.",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })
        }}
      />
    </div>
  );
}

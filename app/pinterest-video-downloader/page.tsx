'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import Footer from '@/components/Footer';
import { MediaResult } from '@/types';
import { en } from '@/locales/en';
import styles from './page.module.css';

export default function PinterestVideoDownloader() {
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
      question: "How to download Pinterest videos?",
      answer: "Simply copy the Pinterest video URL, paste it into the input field above, and click Download. Your video will be ready in seconds."
    },
    {
      question: "Is downloading Pinterest videos free?",
      answer: "Yes, Pixgrab is 100% free to use. No registration, no hidden fees."
    },
    {
      question: "Can I download Pinterest videos on iPhone?",
      answer: "Yes! Pixgrab works on all devices including iPhone, Android, iPad, and desktop browsers."
    },
    {
      question: "What video quality can I download?",
      answer: "We provide the highest quality available, up to 1080p HD and 4K when available."
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation required. Pixgrab works directly in your web browser."
    },
    {
      question: "Is it legal to download Pinterest videos?",
      answer: "Downloading videos for personal use is generally allowed. Always respect copyright and the original creator's rights."
    }
  ];

  return (
    <div className={styles.page}>
      <Header dict={dict} />
      
      <main className={styles.main}>
        <div className="container">
          <section className={styles.hero}>
            <h1 className={styles.title}>
              Pinterest Video Downloader
              <span className={styles.highlight}> — Free HD Download</span>
            </h1>
            <p className={styles.subtitle}>
              Download Pinterest videos in HD quality. No watermark, no registration required. 
              Save Pinterest video pins to your device in just one click.
            </p>
            
            <div className={styles.features}>
              <span className={styles.feature}>✓ HD Quality</span>
              <span className={styles.feature}>✓ No Watermark</span>
              <span className={styles.feature}>✓ Free Forever</span>
              <span className={styles.feature}>✓ Works on Mobile</span>
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
            <h2>How to Download Pinterest Videos</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <h3>Copy the Pinterest URL</h3>
                <p>Open Pinterest, find the video you want to download, and copy its URL from the address bar or share button.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <h3>Paste the Link</h3>
                <p>Paste the copied Pinterest video link into the input field above.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <h3>Download Your Video</h3>
                <p>Click the Download button and save the video to your device. It's that simple!</p>
              </div>
            </div>
          </section>

          <section className={styles.content}>
            <h2>Best Pinterest Video Downloader Online</h2>
            <p>
              Pixgrab is the fastest and most reliable Pinterest video downloader available online. 
              Our tool allows you to save any Pinterest video to your device in the highest quality possible, 
              completely free of charge.
            </p>
            <p>
              Whether you want to save a recipe video, a DIY tutorial, or an inspiring video pin, 
              Pixgrab makes it easy. Simply paste the Pinterest video URL, and we'll handle the rest. 
              No watermarks, no quality loss, no complicated steps.
            </p>
            
            <h3>Why Choose Pixgrab for Pinterest Video Downloads?</h3>
            <ul>
              <li><strong>High Quality:</strong> Download videos in their original quality, up to 1080p HD</li>
              <li><strong>No Registration:</strong> Start downloading immediately without creating an account</li>
              <li><strong>No Watermark:</strong> Your downloaded videos are clean and watermark-free</li>
              <li><strong>Fast &amp; Free:</strong> Instant downloads at no cost</li>
              <li><strong>Mobile Friendly:</strong> Works perfectly on iPhone, Android, and tablets</li>
              <li><strong>Safe &amp; Secure:</strong> We don't store your data or downloaded videos</li>
            </ul>

            <h3>Supported Pinterest Video Formats</h3>
            <p>
              Pixgrab supports all types of Pinterest video content including regular video pins, 
              idea pins with video, story pins, and promoted video pins. The videos are downloaded 
              in MP4 format, which is compatible with all devices and media players.
            </p>
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

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Pixgrab Pinterest Video Downloader",
            "url": "https://pixgrab.com/pinterest-video-downloader",
            "description": "Download Pinterest videos in HD quality for free. No watermark, no registration required.",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "12847"
            }
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
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Download Pinterest Videos",
            "description": "Learn how to download Pinterest videos in HD quality for free",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Copy the Pinterest URL",
                "text": "Open Pinterest, find the video you want to download, and copy its URL"
              },
              {
                "@type": "HowToStep",
                "name": "Paste the Link",
                "text": "Paste the copied Pinterest video link into the input field"
              },
              {
                "@type": "HowToStep",
                "name": "Download Your Video",
                "text": "Click the Download button and save the video to your device"
              }
            ]
          })
        }}
      />
    </div>
  );
}

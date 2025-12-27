'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import Footer from '@/components/Footer';
import { MediaResult } from '@/types';
import { en } from '@/locales/en';
import styles from '../pinterest-video-downloader/page.module.css';

export default function TwitterVideoDownloader() {
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
      question: "How to download Twitter/X videos?",
      answer: "Copy the tweet URL containing the video, paste it above, and click Download. Your video will be ready in seconds."
    },
    {
      question: "Can I download videos from X (formerly Twitter)?",
      answer: "Yes! Pixgrab works with both twitter.com and x.com URLs. Both platforms are fully supported."
    },
    {
      question: "What video quality is available?",
      answer: "We offer multiple quality options including 480p, 720p, and 1080p. Choose the quality that suits your needs."
    },
    {
      question: "Is it free to download Twitter videos?",
      answer: "Yes, Pixgrab is 100% free. No registration, no hidden fees, no limits."
    },
    {
      question: "Can I download Twitter GIFs?",
      answer: "Absolutely! Pixgrab supports all media types including videos, GIFs, and images from tweets."
    },
    {
      question: "Does this work on iPhone/Android?",
      answer: "Yes! Pixgrab works on all devices. Just open it in your mobile browser and download directly."
    }
  ];

  return (
    <div className={styles.page}>
      <Header dict={dict} />
      
      <main className={styles.main}>
        <div className="container">
          <section className={styles.hero}>
            <h1 className={styles.title}>
              Twitter Video Downloader
              <span className={styles.highlight}> — Download X Videos Free</span>
            </h1>
            <p className={styles.subtitle}>
              Download Twitter and X videos in HD quality. No watermark, no registration. 
              Save videos from tweets to your device instantly.
            </p>
            
            <div className={styles.features}>
              <span className={styles.feature}>✓ Twitter & X Support</span>
              <span className={styles.feature}>✓ HD Quality</span>
              <span className={styles.feature}>✓ GIFs & Videos</span>
              <span className={styles.feature}>✓ 100% Free</span>
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
            <h2>How to Download Twitter/X Videos</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <h3>Copy the Tweet URL</h3>
                <p>Find the tweet with the video, tap Share, and copy the link to the tweet.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <h3>Paste the Link</h3>
                <p>Paste the tweet URL into the input field above.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <h3>Download Your Video</h3>
                <p>Click Download and save the video to your device!</p>
              </div>
            </div>
          </section>

          <section className={styles.content}>
            <h2>Best Twitter & X Video Downloader</h2>
            <p>
              Pixgrab is the fastest way to download videos from Twitter and X. Our tool 
              works with both twitter.com and x.com URLs, so you can save any video 
              regardless of which domain you're using.
            </p>
            <p>
              Save viral videos, sports clips, news content, or any media shared on the 
              platform. Pixgrab preserves the original quality and provides multiple 
              resolution options.
            </p>
            
            <h3>Twitter vs X - What's the Difference?</h3>
            <p>
              Twitter rebranded to X in 2023, but both domains still work. Pixgrab 
              supports both twitter.com and x.com links, so you don't need to worry 
              about which one you're using.
            </p>

            <h3>Why Use Pixgrab for Twitter Videos?</h3>
            <ul>
              <li><strong>Multiple Qualities:</strong> Choose from 480p, 720p, or 1080p</li>
              <li><strong>No Registration:</strong> Download immediately without signing up</li>
              <li><strong>GIF Support:</strong> Download Twitter GIFs as video files</li>
              <li><strong>Fast Processing:</strong> Videos ready in seconds</li>
              <li><strong>Mobile Friendly:</strong> Works perfectly on any device</li>
              <li><strong>Free Forever:</strong> No hidden costs or subscriptions</li>
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
            "name": "Pixgrab Twitter Video Downloader",
            "url": "https://pixgrab.com/twitter-video-downloader",
            "description": "Download Twitter and X videos in HD quality for free.",
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

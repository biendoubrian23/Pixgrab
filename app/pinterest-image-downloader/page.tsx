'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import { MediaResult } from '@/types';
import { getDictionary } from '@/locales';
import styles from '../pinterest-video-downloader/page.module.css';

export default function PinterestImageDownloaderPage() {
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
        "name": "How do I download Pinterest images?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copy the Pinterest pin URL, paste it into Pixgrab, and click Download. Your HD image will be ready in seconds."
        }
      },
      {
        "@type": "Question",
        "name": "What quality are Pinterest images downloaded in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pixgrab downloads Pinterest images in their original HD quality - the highest resolution available."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download entire Pinterest boards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently, you can download individual pins. For boards, copy each pin URL separately."
        }
      },
      {
        "@type": "Question",
        "name": "Is Pixgrab free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Pixgrab is completely free with no limits on downloads. No registration required."
        }
      },
      {
        "@type": "Question",
        "name": "Will downloaded images have a watermark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, all Pinterest images are downloaded in their original form without any watermarks added."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Pinterest Images",
    "description": "Step-by-step guide to download Pinterest photos in HD quality",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Find the Pinterest pin",
        "text": "Open Pinterest and find the image you want to download"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Copy the URL",
        "text": "Click the share button and copy the pin URL"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Paste in Pixgrab",
        "text": "Paste the URL into the Pixgrab download box"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Download",
        "text": "Click Download and save your HD image"
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
          <h1 className={styles.title}>Pinterest Image Downloader</h1>
          <p className={styles.subtitle}>
            Download Pinterest images and photos in HD quality. Save any pin to your device instantly - no watermark, no registration.
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
          <h2>Save Pinterest Photos in Original Quality</h2>
          <p>
            Looking for the best way to download Pinterest images? Pixgrab is the ultimate Pinterest image 
            downloader that lets you save any pin in its original HD resolution. Whether you're collecting 
            inspiration for a project, saving recipes, or archiving your favorite designs, our tool makes 
            it effortless.
          </p>
          <p>
            Pinterest is a visual discovery platform with millions of beautiful images, from stunning 
            photography to creative infographics. However, saving these images in high quality isn't 
            always straightforward. That's where Pixgrab comes in - we provide the original image file 
            without compression or quality loss.
          </p>

          <h2>Why Use Pixgrab for Pinterest Photos?</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>🖼️ HD Quality</h3>
              <p>Get Pinterest images in their original resolution - no compression, no quality loss.</p>
            </div>
            <div className={styles.feature}>
              <h3>✨ No Watermark</h3>
              <p>Downloaded images are clean and watermark-free, exactly as uploaded.</p>
            </div>
            <div className={styles.feature}>
              <h3>⚡ Instant Download</h3>
              <p>Just paste the URL and download. No waiting, no multiple steps.</p>
            </div>
            <div className={styles.feature}>
              <h3>📱 All Devices</h3>
              <p>Works on iPhone, Android, PC, Mac - any device with a browser.</p>
            </div>
          </div>

          <h2>How to Download Pinterest Images</h2>
          <ol className={styles.steps}>
            <li><strong>Find your pin</strong> - Browse Pinterest and find the image you want</li>
            <li><strong>Copy the URL</strong> - Tap the share button and copy the link</li>
            <li><strong>Paste here</strong> - Enter the URL in the box above</li>
            <li><strong>Download</strong> - Click the download button and save to your device</li>
          </ol>

          <h2>Popular Pinterest Image Categories</h2>
          <p>
            Users commonly download Pinterest images from these popular categories:
          </p>
          <ul>
            <li><strong>Home Decor & Interior Design</strong> - Room inspiration, furniture ideas, DIY projects</li>
            <li><strong>Recipes & Food</strong> - Cooking inspiration, meal prep ideas, dessert photos</li>
            <li><strong>Fashion & Style</strong> - Outfit ideas, accessory inspiration, seasonal trends</li>
            <li><strong>Art & Illustration</strong> - Digital art, drawings, creative designs</li>
            <li><strong>Photography</strong> - Landscapes, portraits, travel photography</li>
            <li><strong>Wedding & Events</strong> - Decoration ideas, dress inspiration, planning boards</li>
          </ul>
        </section>

        <section className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>How do I download Pinterest images?</h3>
              <p>Copy the Pinterest pin URL, paste it into Pixgrab, and click Download. Your HD image will be ready in seconds.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What quality are Pinterest images downloaded in?</h3>
              <p>Pixgrab downloads Pinterest images in their original HD quality - the highest resolution available.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I download entire Pinterest boards?</h3>
              <p>Currently, you can download individual pins. For boards, copy each pin URL separately.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is Pixgrab free to use?</h3>
              <p>Yes, Pixgrab is completely free with no limits on downloads. No registration required.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Will downloaded images have a watermark?</h3>
              <p>No, all Pinterest images are downloaded in their original form without any watermarks added.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict} />
    </>
  );
}

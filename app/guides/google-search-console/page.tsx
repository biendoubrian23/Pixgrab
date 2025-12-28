import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../../blog/page.module.css';

export const metadata: Metadata = {
  title: 'How to Set Up Google Search Console - Complete Guide 2024 | Pixgrab',
  description: 'Step-by-step guide to setting up Google Search Console. Learn how to verify your website, submit sitemaps, and monitor your search performance.',
  keywords: 'google search console, setup guide, website verification, sitemap submission, seo monitoring, search performance',
  alternates: {
    canonical: 'https://pixgrab.com/guides/google-search-console',
  },
  openGraph: {
    title: 'Google Search Console Setup Guide 2024',
    description: 'Complete step-by-step guide to setting up and using Google Search Console.',
    url: 'https://pixgrab.com/guides/google-search-console',
    type: 'article',
  },
};

const dictionary = {
  title: 'Pixgrab',
  nav: { home: 'Home', legal: 'Legal' },
  footer: { tagline: 'Download videos from Pinterest, Reddit, and Twitter/X', legal: 'Legal', privacy: 'Privacy', copyright: '© 2024 Pixgrab. All rights reserved.' },
};

export default function GoogleSearchConsoleGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Set Up Google Search Console',
    description: 'A complete guide to setting up Google Search Console for your website',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Create a Google Account',
        text: 'If you don\'t have one, create a Google account at accounts.google.com',
      },
      {
        '@type': 'HowToStep',
        name: 'Access Google Search Console',
        text: 'Go to search.google.com/search-console and sign in',
      },
      {
        '@type': 'HowToStep',
        name: 'Add Your Property',
        text: 'Click "Add property" and enter your website URL',
      },
      {
        '@type': 'HowToStep',
        name: 'Verify Ownership',
        text: 'Choose a verification method and follow the instructions',
      },
      {
        '@type': 'HowToStep',
        name: 'Submit Your Sitemap',
        text: 'Navigate to Sitemaps and submit your sitemap URL',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.page}>
        <Header dictionary={dictionary} />
        
        <main className={styles.articlePage}>
          <Link href="/blog" className={styles.backLink}>
            ← Back to Blog
          </Link>
          
          <article>
            <header className={styles.articleHeader}>
              <div className={styles.articleMeta}>
                <span className={styles.category}>SEO Guide</span>
                <span className={styles.readTime}>10 min read</span>
              </div>
              <h1>How to Set Up Google Search Console: Complete Guide 2024</h1>
            </header>

            <div className={styles.content}>
              <p>Google Search Console (GSC) is a free tool that helps you monitor your website&apos;s presence in Google search results. This comprehensive guide will walk you through setting it up from scratch.</p>

              <h2>What is Google Search Console?</h2>
              <p>Google Search Console is a free service offered by Google that helps you:</p>
              <ul>
                <li>Monitor how Google sees your website</li>
                <li>Fix indexing problems</li>
                <li>See which queries bring traffic to your site</li>
                <li>Check your site&apos;s mobile usability</li>
                <li>Submit sitemaps for faster indexing</li>
                <li>Get alerts about issues on your site</li>
              </ul>

              <h2>Step 1: Create or Access Your Google Account</h2>
              <p>You need a Google account to use Search Console. If you already have Gmail, YouTube, or any Google service, you can use that account.</p>
              <div className={styles.stepBox}>
                <h3>Don&apos;t have a Google account?</h3>
                <p>Visit <strong>accounts.google.com</strong> and click &quot;Create account&quot;. Follow the prompts to set up your free account.</p>
              </div>

              <h2>Step 2: Go to Google Search Console</h2>
              <p>Visit <strong>search.google.com/search-console</strong> and sign in with your Google account.</p>

              <h2>Step 3: Add Your Property</h2>
              <p>When you first access Search Console, you&apos;ll be prompted to add a property. There are two types:</p>
              <ul>
                <li><strong>Domain</strong> - Covers all subdomains and protocols (recommended)</li>
                <li><strong>URL prefix</strong> - Covers only the exact URL you specify</li>
              </ul>

              <div className={styles.tipBox}>
                <p><strong>Recommendation:</strong> Use the Domain option if possible. This gives you a complete view of all your site&apos;s URLs, including www and non-www versions, HTTP and HTTPS.</p>
              </div>

              <h2>Step 4: Verify Your Website</h2>
              <p>Google needs to confirm you own the website. There are several verification methods:</p>

              <h3>Method 1: DNS Record (For Domain property)</h3>
              <ol>
                <li>Copy the TXT record provided by Google</li>
                <li>Log into your domain registrar (GoDaddy, Namecheap, etc.)</li>
                <li>Add the TXT record to your DNS settings</li>
                <li>Wait for DNS propagation (can take up to 48 hours)</li>
                <li>Click &quot;Verify&quot; in Search Console</li>
              </ol>

              <h3>Method 2: HTML File Upload</h3>
              <ol>
                <li>Download the HTML verification file from Google</li>
                <li>Upload it to your website&apos;s root directory</li>
                <li>Make sure the file is accessible at yoursite.com/google*.html</li>
                <li>Click &quot;Verify&quot;</li>
              </ol>

              <h3>Method 3: HTML Meta Tag</h3>
              <ol>
                <li>Copy the meta tag provided</li>
                <li>Add it to the &lt;head&gt; section of your homepage</li>
                <li>Click &quot;Verify&quot;</li>
              </ol>

              <h3>Method 4: Google Analytics or Tag Manager</h3>
              <p>If you already have Google Analytics or Tag Manager set up, you can use those for verification.</p>

              <h2>Step 5: Submit Your Sitemap</h2>
              <p>A sitemap helps Google discover all the pages on your website.</p>
              <div className={styles.stepBox}>
                <h3>How to submit your sitemap:</h3>
                <ol>
                  <li>In Search Console, go to &quot;Sitemaps&quot; in the left menu</li>
                  <li>Enter your sitemap URL (usually yoursite.com/sitemap.xml)</li>
                  <li>Click &quot;Submit&quot;</li>
                </ol>
              </div>

              <div className={styles.tipBox}>
                <p><strong>Pro Tip:</strong> Most modern frameworks generate sitemaps automatically. For Next.js, you can create a sitemap.ts file in your app directory.</p>
              </div>

              <h2>Step 6: Wait for Data</h2>
              <p>Search Console doesn&apos;t show data immediately. It typically takes:</p>
              <ul>
                <li>2-3 days for initial data to appear</li>
                <li>Several weeks for comprehensive insights</li>
                <li>Up to 3 months for accurate performance trends</li>
              </ul>

              <h2>Key Features to Use</h2>

              <h3>Performance Report</h3>
              <p>See which queries bring users to your site, your average position, click-through rates, and impressions.</p>

              <h3>Coverage Report</h3>
              <p>Identify pages that are indexed, excluded, or have errors that prevent indexing.</p>

              <h3>Mobile Usability</h3>
              <p>Check if your pages are mobile-friendly and identify any mobile usability issues.</p>

              <h3>Core Web Vitals</h3>
              <p>Monitor your site&apos;s loading performance, interactivity, and visual stability metrics.</p>

              <h2>Common Issues and Solutions</h2>
              <ul>
                <li><strong>Not indexed</strong> - Check your robots.txt and meta robots tags</li>
                <li><strong>Duplicate content</strong> - Use canonical tags to indicate the preferred URL</li>
                <li><strong>Mobile issues</strong> - Ensure responsive design and proper viewport settings</li>
                <li><strong>Slow pages</strong> - Optimize images, enable caching, use a CDN</li>
              </ul>

              <h2>Best Practices</h2>
              <ul>
                <li>Check Search Console at least weekly</li>
                <li>Set up email alerts for critical issues</li>
                <li>Keep your sitemap updated as you add new pages</li>
                <li>Regularly review and fix any coverage errors</li>
                <li>Monitor Core Web Vitals and fix issues promptly</li>
              </ul>
            </div>

            <aside className={styles.relatedLinks}>
              <h3>Related Resources</h3>
              <ul>
                <li><Link href="/blog">Back to Blog</Link></li>
                <li><Link href="/">Pixgrab Homepage</Link></li>
                <li><Link href="/pinterest-video-downloader">Pinterest Video Downloader</Link></li>
              </ul>
            </aside>
          </article>
        </main>

        <Footer dictionary={dictionary} />
      </div>
    </>
  );
}

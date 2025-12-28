import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getDictionary } from '@/locales';
import styles from './page.module.css';

const articles = [
  {
    slug: 'how-to-download-pinterest-videos',
    title: 'How to Download Pinterest Videos in 2025 - Complete Guide',
    excerpt: 'Learn the easiest ways to save Pinterest videos to your device. Step-by-step tutorial with tips and tricks.',
    category: 'Pinterest',
    readTime: '5 min',
    date: '2025-01-15',
  },
  {
    slug: '10-pinterest-tips-tricks',
    title: '10 Pinterest Tips & Tricks You Need to Know',
    excerpt: 'Discover hidden Pinterest features, download secrets, and optimization tips for power users.',
    category: 'Pinterest',
    readTime: '7 min',
    date: '2025-01-10',
  },
  {
    slug: 'reddit-video-with-sound',
    title: 'How to Download Reddit Videos with Sound (2025)',
    excerpt: 'The ultimate guide to downloading Reddit videos with audio. Solve the common "no sound" problem.',
    category: 'Reddit',
    readTime: '4 min',
    date: '2025-01-08',
  },
  {
    slug: 'twitter-x-video-downloader-guide',
    title: 'Twitter/X Video Downloader: Everything You Need to Know',
    excerpt: 'Download videos from X (formerly Twitter) in HD quality. Works with both x.com and twitter.com URLs.',
    category: 'Twitter',
    readTime: '5 min',
    date: '2025-01-05',
  },
  {
    slug: 'tiktok-video-download-without-watermark',
    title: 'Download TikTok Videos Without Watermark - Free Methods',
    excerpt: 'Save TikTok videos in HD quality without the TikTok watermark. Multiple methods explained.',
    category: 'TikTok',
    readTime: '6 min',
    date: '2025-01-03',
  },
  {
    slug: 'instagram-reels-download-guide',
    title: 'How to Download Instagram Reels in 2025',
    excerpt: 'Save Instagram Reels to your phone or computer easily. Works without login.',
    category: 'Instagram',
    readTime: '4 min',
    date: '2025-01-01',
  },
];

export default function BlogPage() {
  const dict = getDictionary('en');

  return (
    <div className={styles.page}>
      <Header dict={dict} />
      <main className={styles.main}>
        <div className="container">
          <section className={styles.hero}>
            <h1 className={styles.title}>Pixgrab Blog</h1>
            <p className={styles.subtitle}>
              Tips, tutorials, and guides for downloading videos and images from social media platforms.
            </p>
          </section>

          <section className={styles.articles}>
            {articles.map((article) => (
              <article key={article.slug} className={styles.articleCard}>
                <div className={styles.articleMeta}>
                  <span className={styles.category}>{article.category}</span>
                  <span className={styles.readTime}>{article.readTime} read</span>
                </div>
                <h2 className={styles.articleTitle}>
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <Link href={`/blog/${article.slug}`} className={styles.readMore}>
                  Read more →
                </Link>
              </article>
            ))}
          </section>

          <section className={styles.cta}>
            <h2>Ready to Download?</h2>
            <p>Start downloading videos and images from your favorite platforms now.</p>
            <div className={styles.ctaLinks}>
              <Link href="/pinterest-video-downloader" className="btn btn-primary">Pinterest</Link>
              <Link href="/reddit-video-downloader" className="btn btn-primary">Reddit</Link>
              <Link href="/twitter-video-downloader" className="btn btn-primary">Twitter/X</Link>
              <Link href="/tiktok-video-downloader" className="btn btn-primary">TikTok</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer dict={dict} />
    </div>
  );
}

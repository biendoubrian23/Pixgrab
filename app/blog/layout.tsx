import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Video Download Tips & Tutorials | Pixgrab',
  description: 'Learn how to download videos from Pinterest, Reddit, Twitter, TikTok, and Instagram. Tips, tricks, and step-by-step guides.',
  keywords: [
    'download video tutorial',
    'pinterest tips',
    'reddit video guide',
    'twitter download tutorial',
    'tiktok save video',
    'instagram reels download',
    'social media downloader guide',
  ],
  openGraph: {
    title: 'Pixgrab Blog - Video Download Tips & Tutorials',
    description: 'Learn how to download videos from all social media platforms.',
    url: 'https://pixgrab.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pixgrab.com/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}

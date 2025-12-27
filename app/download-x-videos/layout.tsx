import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download X Videos - Save Twitter Videos in HD Quality',
  description: 'Free X/Twitter video downloader. Download Twitter videos in HD quality. Supports x.com and twitter.com. No account required.',
  keywords: [
    'twitter video downloader',
    'x video downloader',
    'download twitter videos',
    'download x videos',
    'twitter video saver',
    'save twitter videos',
    'twitter gif downloader',
  ],
  openGraph: {
    title: 'Download X (Twitter) Videos in HD',
    description: 'Free Twitter video downloader. Save videos from X/Twitter in HD quality.',
    url: 'https://pixgrab.com/download-x-videos',
  },
  alternates: {
    canonical: 'https://pixgrab.com/download-x-videos',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

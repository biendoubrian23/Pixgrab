import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download Reddit Videos - Save Reddit Videos with Audio',
  description: 'Free Reddit video downloader with sound. Download v.redd.it videos in HD quality. No account required. Works on mobile.',
  keywords: [
    'reddit video downloader',
    'download reddit videos',
    'reddit video downloader with sound',
    'v.redd.it downloader',
    'save reddit videos',
    'reddit video saver',
  ],
  openGraph: {
    title: 'Download Reddit Videos with Audio',
    description: 'Free Reddit video downloader. Save v.redd.it videos in HD with sound.',
    url: 'https://pixgrab.com/download-reddit-videos',
  },
  alternates: {
    canonical: 'https://pixgrab.com/download-reddit-videos',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

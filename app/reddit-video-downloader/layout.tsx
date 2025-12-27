import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reddit Video Downloader with Sound - Download Reddit Videos HD | Pixgrab',
  description: 'Download Reddit videos with sound in HD quality. Free Reddit video downloader that includes audio. Works on all devices. No registration required.',
  keywords: [
    'reddit video downloader',
    'reddit video downloader with sound',
    'download reddit video',
    'reddit video download',
    'reddit downloader',
    'save reddit video',
    'reddit video with audio',
    'reddit gif downloader',
    'reddit video download hd',
    'reddit video saver'
  ],
  alternates: {
    canonical: 'https://pixgrab.com/reddit-video-downloader',
  },
  openGraph: {
    title: 'Reddit Video Downloader with Sound - Free HD Download',
    description: 'Download Reddit videos with sound in HD quality. Free and easy to use.',
    url: 'https://pixgrab.com/reddit-video-downloader',
    siteName: 'Pixgrab',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reddit Video Downloader with Sound',
    description: 'Download Reddit videos with audio in HD quality. Free!',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

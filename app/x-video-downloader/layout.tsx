import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'X Video Downloader - Download Twitter/X Videos Free | Pixgrab',
  description: 'Download X (formerly Twitter) videos in HD quality for free. Save videos from x.com and twitter.com without watermark. Works on all devices.',
  keywords: [
    'x video downloader',
    'download x videos',
    'x.com video downloader',
    'save x videos',
    'x video saver',
    'download from x',
    'x media downloader',
    'x.com downloader',
    'save videos from x',
    'x twitter video download',
  ],
  openGraph: {
    title: 'X Video Downloader - Download Twitter/X Videos Free',
    description: 'Download X videos in HD quality. Save videos from x.com without watermark. 100% free.',
    url: 'https://pixgrab.com/x-video-downloader',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X Video Downloader - Download Videos Free',
    description: 'Download X videos in HD quality. Save videos from x.com without watermark.',
  },
  alternates: {
    canonical: 'https://pixgrab.com/x-video-downloader',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

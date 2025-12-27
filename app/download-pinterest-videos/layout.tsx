import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download Pinterest Videos - Save Pinterest Video Pins in HD',
  description: 'Free Pinterest video downloader. Save Pinterest video pins in HD quality without watermark. Works on mobile. No account needed.',
  keywords: [
    'pinterest video downloader',
    'download pinterest videos',
    'save pinterest videos',
    'pinterest video saver',
    'download pinterest video pin',
    'pinterest mp4 download',
  ],
  openGraph: {
    title: 'Download Pinterest Videos in HD Quality',
    description: 'Free Pinterest video downloader. Save video pins without watermark or compression.',
    url: 'https://pixgrab.com/download-pinterest-videos',
  },
  alternates: {
    canonical: 'https://pixgrab.com/download-pinterest-videos',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

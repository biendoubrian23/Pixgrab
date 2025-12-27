import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download Pinterest Photos - Save Pinterest Images in Original Quality',
  description: 'Free Pinterest photo downloader. Save Pinterest images in original quality without watermark. No login required. Works on mobile.',
  keywords: [
    'pinterest photo downloader',
    'download pinterest images',
    'save pinterest photos',
    'pinterest image saver',
    'pinterest photo saver',
    'download pinterest pictures',
  ],
  openGraph: {
    title: 'Download Pinterest Photos in Original Quality',
    description: 'Free Pinterest photo downloader. Save images without watermark or compression.',
    url: 'https://pixgrab.com/download-pinterest-photos',
  },
  alternates: {
    canonical: 'https://pixgrab.com/download-pinterest-photos',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

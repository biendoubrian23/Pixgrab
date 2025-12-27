import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pinterest Image Downloader - Save HD Photos Free | Pixgrab',
  description: 'Download Pinterest images in HD quality for free. Save Pinterest photos, pins, and boards without watermark. No registration required. Works on all devices.',
  keywords: [
    'pinterest image downloader',
    'download pinterest images',
    'save pinterest photos',
    'pinterest photo downloader',
    'pinterest hd downloader',
    'download pinterest pins',
    'pinterest board downloader',
    'save pinterest images free',
    'pinterest picture downloader',
    'download from pinterest',
  ],
  openGraph: {
    title: 'Pinterest Image Downloader - Save HD Photos Free',
    description: 'Download Pinterest images in HD quality. Save photos and pins without watermark. 100% free.',
    url: 'https://pixgrab.com/pinterest-image-downloader',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinterest Image Downloader - Save HD Photos Free',
    description: 'Download Pinterest images in HD quality. Save photos and pins without watermark.',
  },
  alternates: {
    canonical: 'https://pixgrab.com/pinterest-image-downloader',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

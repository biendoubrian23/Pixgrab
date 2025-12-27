import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pinterest Video Downloader - Download Pinterest Videos HD Free | Pixgrab',
  description: 'Download Pinterest videos in HD quality for free. No watermark, no registration. Save Pinterest video pins to your device instantly. Works on iPhone, Android & PC.',
  keywords: [
    'pinterest video downloader',
    'download pinterest video',
    'pinterest video download',
    'save pinterest video',
    'pinterest video saver',
    'pinterest downloader',
    'download video from pinterest',
    'pinterest video download online',
    'pinterest video downloader hd',
    'pinterest video downloader free'
  ],
  alternates: {
    canonical: 'https://pixgrab.com/pinterest-video-downloader',
    languages: {
      'en': 'https://pixgrab.com/pinterest-video-downloader',
      'fr': 'https://pixgrab.com/fr/pinterest-video-downloader',
    },
  },
  openGraph: {
    title: 'Pinterest Video Downloader - Download Pinterest Videos HD Free',
    description: 'Download Pinterest videos in HD quality for free. No watermark, no registration required.',
    url: 'https://pixgrab.com/pinterest-video-downloader',
    siteName: 'Pixgrab',
    type: 'website',
    images: [
      {
        url: '/og-pinterest-video.png',
        width: 1200,
        height: 630,
        alt: 'Pinterest Video Downloader - Pixgrab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinterest Video Downloader - Download HD Videos Free',
    description: 'Download Pinterest videos in HD quality. No watermark, no registration.',
    images: ['/og-pinterest-video.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

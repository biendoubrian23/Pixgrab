import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Download Pinterest, Reddit & X Media | Free HD',
  description: 'Download Pinterest photos and videos, Reddit videos with sound, and X/Twitter media in original HD quality. 100% free - No login required. No watermark. No compression.',
  keywords: [
    'pinterest downloader',
    'download pinterest video',
    'download pinterest photos',
    'pinterest video saver',
    'save pinterest images hd',
    'reddit video downloader',
    'reddit video with sound',
    'download reddit clips',
    'twitter video downloader',
    'x video downloader',
    'download twitter videos free',
    'save x media',
    'free video downloader online',
    'no watermark downloader',
  ],
  openGraph: {
    title: 'Pixgrab - Download Pinterest, Reddit & X Media | Free HD',
    description: 'Download photos and videos in original HD quality. 100% free - No login. No watermark. No compression.',
    url: 'https://pixgrab.com/en',
    siteName: 'Pixgrab',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixgrab.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixgrab - Free Pinterest, Reddit & X Media Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixgrab - Download Pinterest, Reddit & X Media',
    description: 'Download photos and videos in original HD quality. Free - No login - No watermark.',
    images: ['https://pixgrab.com/og-image.png'],
    creator: '@pixgrab',
    site: '@pixgrab',
  },
  alternates: {
    canonical: 'https://pixgrab.com/en',
    languages: {
      'en': 'https://pixgrab.com/en',
      'fr': 'https://pixgrab.com/fr',
      'es': 'https://pixgrab.com/es',
      'pt': 'https://pixgrab.com/pt',
      'it': 'https://pixgrab.com/it',
      'de': 'https://pixgrab.com/de',
      'nl': 'https://pixgrab.com/nl',
      'x-default': 'https://pixgrab.com',
    },
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

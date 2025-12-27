import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Download Pinterest, Reddit & X Media',
  description: 'Download Pinterest photos and videos, Reddit videos, and X/Twitter media in original quality. No login. No watermark. No compression.',
  openGraph: {
    title: 'Pixgrab - Download Pinterest, Reddit & X Media',
    description: 'Download photos and videos in original quality. No login. No watermark.',
    url: 'https://pixgrab.com/en',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://pixgrab.com/en',
    languages: {
      'en': 'https://pixgrab.com/en',
      'fr': 'https://pixgrab.com/fr',
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

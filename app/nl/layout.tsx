import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Download Pinterest, Reddit & X Video\'s | Gratis HD',
  description: 'Download Pinterest foto\'s en video\'s, Reddit video\'s met geluid, en X/Twitter media in originele HD kwaliteit. 100% gratis - Geen login. Geen watermerk. Geen compressie.',
  keywords: [
    'pinterest video downloaden',
    'pinterest foto downloaden',
    'pinterest downloader nederlands',
    'pinterest hd opslaan',
    'reddit video downloaden',
    'reddit video met geluid',
    'twitter video downloaden',
    'x video downloaden',
    'gratis video downloader',
    'zonder watermerk',
    'pinterest afbeeldingen opslaan',
    'download pinterest nederland',
  ],
  openGraph: {
    title: 'Pixgrab - Download Pinterest, Reddit & X Video\'s | Gratis HD',
    description: 'Download foto\'s en video\'s in originele HD kwaliteit. 100% gratis - Geen login. Geen watermerk.',
    url: 'https://pixgrab.com/nl',
    siteName: 'Pixgrab',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: 'https://pixgrab.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixgrab - Gratis Pinterest, Reddit & X Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixgrab - Download Pinterest, Reddit & X Video\'s',
    description: 'Download foto\'s en video\'s in HD kwaliteit. Gratis - Geen login - Geen watermerk.',
    images: ['https://pixgrab.com/og-image.png'],
    creator: '@pixgrab',
    site: '@pixgrab',
  },
  alternates: {
    canonical: 'https://pixgrab.com/nl',
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

export default function DutchLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}

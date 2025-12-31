import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Scarica Video da Pinterest, Reddit e X | Gratis HD',
  description: 'Scarica foto e video da Pinterest, video da Reddit con audio, e media da X/Twitter in qualità HD originale. 100% gratis - Senza login. Senza filigrana. Senza compressione.',
  keywords: [
    'scaricare video pinterest',
    'scaricare foto pinterest',
    'pinterest downloader italiano',
    'salvare pinterest hd',
    'scaricare video reddit',
    'reddit video con audio',
    'scaricare video twitter',
    'scaricare video x',
    'scaricatore video gratis',
    'senza filigrana',
    'salvare immagini pinterest',
    'download pinterest italia',
  ],
  openGraph: {
    title: 'Pixgrab - Scarica Video da Pinterest, Reddit e X | Gratis HD',
    description: 'Scarica foto e video in qualità HD originale. 100% gratis - Senza login. Senza filigrana.',
    url: 'https://pixgrab.com/it',
    siteName: 'Pixgrab',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: 'https://pixgrab.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixgrab - Scaricatore Pinterest, Reddit e X Gratis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixgrab - Scarica Video da Pinterest, Reddit e X',
    description: 'Scarica foto e video in qualità HD. Gratis - Senza login - Senza filigrana.',
    images: ['https://pixgrab.com/og-image.png'],
    creator: '@pixgrab',
    site: '@pixgrab',
  },
  alternates: {
    canonical: 'https://pixgrab.com/it',
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

export default function ItalianLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}

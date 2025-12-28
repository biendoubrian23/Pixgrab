import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Scarica Media da Pinterest, Reddit e X',
  description: 'Scarica foto e video da Pinterest, video da Reddit e media da X/Twitter in qualità originale. Senza login. Senza filigrana. Senza compressione.',
  openGraph: {
    title: 'Pixgrab - Scarica Media da Pinterest, Reddit e X',
    description: 'Scarica foto e video in qualità originale. Senza login. Senza filigrana.',
    url: 'https://pixgrab.com/it',
    locale: 'it_IT',
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

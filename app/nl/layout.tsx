import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Download Pinterest, Reddit & X Media',
  description: 'Download Pinterest-foto\'s en -video\'s, Reddit-video\'s en X/Twitter-media in originele kwaliteit. Geen login. Geen watermerk. Geen compressie.',
  openGraph: {
    title: 'Pixgrab - Download Pinterest, Reddit & X Media',
    description: 'Download foto\'s en video\'s in originele kwaliteit. Geen login. Geen watermerk.',
    url: 'https://pixgrab.com/nl',
    locale: 'nl_NL',
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

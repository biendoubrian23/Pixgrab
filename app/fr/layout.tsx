import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Télécharger médias Pinterest, Reddit & X',
  description: 'Téléchargez photos et vidéos Pinterest, vidéos Reddit et médias X/Twitter en qualité originale. Sans compte. Sans filigrane. Sans compression.',
  keywords: [
    'télécharger pinterest',
    'télécharger vidéo pinterest',
    'télécharger photo pinterest',
    'télécharger vidéo reddit',
    'télécharger vidéo twitter',
    'télécharger vidéo x',
    'pinterest downloader français',
  ],
  openGraph: {
    title: 'Pixgrab - Télécharger médias Pinterest, Reddit & X',
    description: 'Téléchargez photos et vidéos en qualité originale. Sans compte. Sans filigrane.',
    url: 'https://pixgrab.com/fr',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://pixgrab.com/fr',
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

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

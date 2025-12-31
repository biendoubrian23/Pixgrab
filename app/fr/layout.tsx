import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Télécharger Vidéos Pinterest, Reddit & X | Gratuit HD',
  description: 'Téléchargez photos et vidéos Pinterest, vidéos Reddit avec son, et médias X/Twitter en qualité HD originale. 100% gratuit - Sans compte. Sans filigrane. Sans compression.',
  keywords: [
    'télécharger vidéo pinterest',
    'télécharger photo pinterest',
    'pinterest downloader français',
    'sauvegarder pinterest hd',
    'télécharger vidéo reddit',
    'reddit vidéo avec son',
    'télécharger vidéo twitter',
    'télécharger vidéo x',
    'téléchargeur vidéo gratuit',
    'sans filigrane',
    'télécharger image pinterest',
    'enregistrer vidéo pinterest',
  ],
  openGraph: {
    title: 'Pixgrab - Télécharger Vidéos Pinterest, Reddit & X | Gratuit HD',
    description: 'Téléchargez photos et vidéos en qualité HD originale. 100% gratuit - Sans compte. Sans filigrane.',
    url: 'https://pixgrab.com/fr',
    siteName: 'Pixgrab',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://pixgrab.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixgrab - Téléchargeur Pinterest, Reddit & X Gratuit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixgrab - Télécharger Vidéos Pinterest, Reddit & X',
    description: 'Téléchargez photos et vidéos en qualité HD. Gratuit - Sans compte - Sans filigrane.',
    images: ['https://pixgrab.com/og-image.png'],
    creator: '@pixgrab',
    site: '@pixgrab',
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
      'x-default': 'https://pixgrab.com',
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

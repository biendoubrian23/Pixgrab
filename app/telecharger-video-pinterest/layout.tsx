import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Télécharger Vidéo Pinterest - Gratuit HD | Pixgrab',
  description: 'Téléchargez les vidéos Pinterest en qualité HD gratuitement. Sauvegardez les épingles vidéo sans filigrane ni inscription. Fonctionne sur tous les appareils.',
  keywords: [
    'télécharger vidéo pinterest',
    'pinterest video downloader',
    'téléchargeur pinterest',
    'sauvegarder vidéo pinterest',
    'pinterest vidéo gratuit',
    'télécharger épingle vidéo',
    'pinterest downloader français',
    'enregistrer vidéo pinterest',
    'pinterest téléchargement',
    'télécharger pin vidéo',
  ],
  openGraph: {
    title: 'Télécharger Vidéo Pinterest - Gratuit HD',
    description: 'Téléchargez les vidéos Pinterest en HD gratuitement. Sans filigrane ni inscription.',
    url: 'https://pixgrab.com/telecharger-video-pinterest',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Télécharger Vidéo Pinterest - Gratuit',
    description: 'Téléchargez les vidéos Pinterest en HD gratuitement.',
  },
  alternates: {
    canonical: 'https://pixgrab.com/telecharger-video-pinterest',
    languages: {
      'en': 'https://pixgrab.com/pinterest-video-downloader',
      'fr': 'https://pixgrab.com/telecharger-video-pinterest',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Télécharger Vidéo Reddit avec Son - Gratuit | Pixgrab',
  description: 'Téléchargez les vidéos Reddit avec le son en qualité HD. Téléchargeur v.redd.it gratuit. Fonctionne sur mobile sans application.',
  keywords: [
    'télécharger vidéo reddit',
    'reddit video downloader',
    'téléchargeur reddit',
    'v.redd.it télécharger',
    'reddit vidéo son',
    'sauvegarder vidéo reddit',
    'télécharger reddit gratuit',
    'reddit video avec audio',
    'téléchargeur v.redd.it',
    'reddit downloader français',
  ],
  openGraph: {
    title: 'Télécharger Vidéo Reddit avec Son - Gratuit',
    description: 'Téléchargez les vidéos Reddit en HD avec le son. Gratuit et sans inscription.',
    url: 'https://pixgrab.com/telecharger-video-reddit',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Télécharger Vidéo Reddit - Gratuit',
    description: 'Téléchargez les vidéos Reddit en HD avec le son.',
  },
  alternates: {
    canonical: 'https://pixgrab.com/telecharger-video-reddit',
    languages: {
      'en': 'https://pixgrab.com/reddit-video-downloader',
      'fr': 'https://pixgrab.com/telecharger-video-reddit',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

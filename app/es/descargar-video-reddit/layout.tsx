import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Descargador de Videos de Reddit - Descargar Videos con Audio | Pixgrab',
  description: 'Descarga videos de Reddit con audio gratis. Guarda videos de cualquier subreddit en HD. Compatible con todos los dispositivos.',
  keywords: 'descargar video reddit, descargador reddit, bajar videos reddit con audio, guardar video reddit, reddit video download',
  alternates: {
    canonical: 'https://pixgrab.com/es/descargar-video-reddit',
    languages: {
      'en': 'https://pixgrab.com/reddit-video-downloader',
      'fr': 'https://pixgrab.com/telecharger-video-reddit',
      'pt': 'https://pixgrab.com/pt/baixar-video-reddit',
    },
  },
  openGraph: {
    title: 'Descargador de Videos de Reddit Gratis - Pixgrab',
    description: 'Descarga videos de Reddit con audio en HD. Sin marcas de agua.',
    url: 'https://pixgrab.com/es/descargar-video-reddit',
    type: 'website',
  },
};

export default function DescargarVideoRedditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

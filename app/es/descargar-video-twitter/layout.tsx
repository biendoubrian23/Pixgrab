import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Descargador de Videos de Twitter/X - Descargar Videos Gratis | Pixgrab',
  description: 'Descarga videos de Twitter/X gratis en calidad HD. Guarda tweets con video en tu dispositivo. Rápido y sin registro.',
  keywords: 'descargar video twitter, descargador twitter, bajar videos x, guardar video tweet, twitter video download gratis',
  alternates: {
    canonical: 'https://pixgrab.com/es/descargar-video-twitter',
    languages: {
      'en': 'https://pixgrab.com/twitter-video-downloader',
      'fr': 'https://pixgrab.com/telecharger-video-twitter',
      'pt': 'https://pixgrab.com/pt/baixar-video-twitter',
    },
  },
  openGraph: {
    title: 'Descargador de Videos de Twitter/X Gratis - Pixgrab',
    description: 'Descarga cualquier video de Twitter/X en HD. Fácil y sin marca de agua.',
    url: 'https://pixgrab.com/es/descargar-video-twitter',
    type: 'website',
  },
};

export default function DescargarVideoTwitterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

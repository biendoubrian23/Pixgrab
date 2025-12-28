import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Descargador de Videos de Pinterest - Descargar Videos Gratis | Pixgrab',
  description: 'Descarga videos de Pinterest gratis en calidad HD. Guarda pins de video de Pinterest en tu dispositivo. Rápido, fácil y sin registro.',
  keywords: 'descargar video pinterest, descargador pinterest, bajar videos pinterest, guardar video pinterest, pinterest video download gratis',
  alternates: {
    canonical: 'https://pixgrab.com/es/descargar-video-pinterest',
    languages: {
      'en': 'https://pixgrab.com/pinterest-video-downloader',
      'fr': 'https://pixgrab.com/telecharger-video-pinterest',
      'pt': 'https://pixgrab.com/pt/baixar-video-pinterest',
    },
  },
  openGraph: {
    title: 'Descargador de Videos de Pinterest Gratis - Pixgrab',
    description: 'Descarga cualquier video de Pinterest en HD. Fácil, rápido y sin marca de agua.',
    url: 'https://pixgrab.com/es/descargar-video-pinterest',
    type: 'website',
  },
};

export default function DescargarVideoPinterestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

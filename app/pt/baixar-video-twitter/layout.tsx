import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baixar Vídeos do Twitter/X - Download Grátis em HD | Pixgrab',
  description: 'Baixe vídeos do Twitter/X grátis em qualidade HD. Salve tweets com vídeo no seu dispositivo. Rápido e sem registro.',
  keywords: 'baixar video twitter, download twitter, salvar video x, twitter video download gratis',
  alternates: {
    canonical: 'https://pixgrab.com/pt/baixar-video-twitter',
    languages: {
      'en': 'https://pixgrab.com/twitter-video-downloader',
      'fr': 'https://pixgrab.com/telecharger-video-twitter',
      'es': 'https://pixgrab.com/es/descargar-video-twitter',
    },
  },
  openGraph: {
    title: 'Baixar Vídeos do Twitter/X Grátis - Pixgrab',
    description: 'Baixe qualquer vídeo do Twitter/X em HD. Fácil e sem marca d\'água.',
    url: 'https://pixgrab.com/pt/baixar-video-twitter',
    type: 'website',
  },
};

export default function BaixarVideoTwitterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

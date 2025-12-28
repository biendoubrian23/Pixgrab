import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baixar Vídeos do Pinterest - Download Grátis em HD | Pixgrab',
  description: 'Baixe vídeos do Pinterest grátis em qualidade HD. Salve pins de vídeo no seu dispositivo. Rápido, fácil e sem registro.',
  keywords: 'baixar video pinterest, download pinterest, salvar video pinterest, pinterest video download gratis',
  alternates: {
    canonical: 'https://pixgrab.com/pt/baixar-video-pinterest',
    languages: {
      'en': 'https://pixgrab.com/pinterest-video-downloader',
      'fr': 'https://pixgrab.com/telecharger-video-pinterest',
      'es': 'https://pixgrab.com/es/descargar-video-pinterest',
    },
  },
  openGraph: {
    title: 'Baixar Vídeos do Pinterest Grátis - Pixgrab',
    description: 'Baixe qualquer vídeo do Pinterest em HD. Fácil, rápido e sem marca d\'água.',
    url: 'https://pixgrab.com/pt/baixar-video-pinterest',
    type: 'website',
  },
};

export default function BaixarVideoPinterestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

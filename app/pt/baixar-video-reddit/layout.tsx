import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baixar Vídeos do Reddit - Download com Áudio Grátis | Pixgrab',
  description: 'Baixe vídeos do Reddit com áudio grátis. Salve vídeos de qualquer subreddit em HD. Compatível com todos os dispositivos.',
  keywords: 'baixar video reddit, download reddit, salvar video reddit com audio, reddit video download',
  alternates: {
    canonical: 'https://pixgrab.com/pt/baixar-video-reddit',
    languages: {
      'en': 'https://pixgrab.com/reddit-video-downloader',
      'fr': 'https://pixgrab.com/telecharger-video-reddit',
      'es': 'https://pixgrab.com/es/descargar-video-reddit',
    },
  },
  openGraph: {
    title: 'Baixar Vídeos do Reddit Grátis - Pixgrab',
    description: 'Baixe vídeos do Reddit com áudio em HD. Sem marcas d\'água.',
    url: 'https://pixgrab.com/pt/baixar-video-reddit',
    type: 'website',
  },
};

export default function BaixarVideoRedditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

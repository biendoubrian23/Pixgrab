import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Baixar Vídeos do Pinterest, Reddit e X | Grátis HD',
  description: 'Baixe fotos e vídeos do Pinterest, vídeos do Reddit com áudio, e mídias do X/Twitter em qualidade HD original. 100% grátis - Sem login. Sem marca d\'água. Sem compressão.',
  keywords: [
    'baixar vídeo pinterest',
    'baixar foto pinterest',
    'pinterest downloader português',
    'salvar pinterest hd',
    'baixar vídeo reddit',
    'reddit vídeo com áudio',
    'baixar vídeo twitter',
    'baixar vídeo x',
    'baixador de vídeos grátis',
    'sem marca d\'água',
    'salvar imagem pinterest',
    'download pinterest brasil',
  ],
  openGraph: {
    title: 'Pixgrab - Baixar Vídeos do Pinterest, Reddit e X | Grátis HD',
    description: 'Baixe fotos e vídeos em qualidade HD original. 100% grátis - Sem login. Sem marca d\'água.',
    url: 'https://pixgrab.com/pt',
    siteName: 'Pixgrab',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://pixgrab.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixgrab - Baixador de Pinterest, Reddit e X Grátis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixgrab - Baixar Vídeos do Pinterest, Reddit e X',
    description: 'Baixe fotos e vídeos em qualidade HD. Grátis - Sem login - Sem marca d\'água.',
    images: ['https://pixgrab.com/og-image.png'],
    creator: '@pixgrab',
    site: '@pixgrab',
  },
  alternates: {
    canonical: 'https://pixgrab.com/pt',
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

export default function PortugueseLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}

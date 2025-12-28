import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Baixar Mídias do Pinterest, Reddit e X',
  description: 'Baixe fotos e vídeos do Pinterest, vídeos do Reddit e mídias do X/Twitter em qualidade original. Sem login. Sem marca d\'água. Sem compressão.',
  openGraph: {
    title: 'Pixgrab - Baixar Mídias do Pinterest, Reddit e X',
    description: 'Baixe fotos e vídeos em qualidade original. Sem login. Sem marca d\'água.',
    url: 'https://pixgrab.com/pt',
    locale: 'pt_BR',
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

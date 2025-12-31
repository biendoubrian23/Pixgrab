import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Descargar Videos de Pinterest, Reddit y X | Gratis HD',
  description: 'Descarga fotos y videos de Pinterest, videos de Reddit con audio, y medios de X/Twitter en calidad HD original. 100% gratis - Sin registro. Sin marca de agua. Sin compresión.',
  keywords: [
    'descargar video pinterest',
    'descargar foto pinterest',
    'pinterest downloader español',
    'guardar pinterest hd',
    'descargar video reddit',
    'reddit video con audio',
    'descargar video twitter',
    'descargar video x',
    'descargador de videos gratis',
    'sin marca de agua',
    'bajar video pinterest',
    'guardar imagen pinterest',
  ],
  openGraph: {
    title: 'Pixgrab - Descargar Videos de Pinterest, Reddit y X | Gratis HD',
    description: 'Descarga fotos y videos en calidad HD original. 100% gratis - Sin registro. Sin marca de agua.',
    url: 'https://pixgrab.com/es',
    siteName: 'Pixgrab',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixgrab.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixgrab - Descargador de Pinterest, Reddit y X Gratis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixgrab - Descargar Videos de Pinterest, Reddit y X',
    description: 'Descarga fotos y videos en calidad HD. Gratis - Sin registro - Sin marca de agua.',
    images: ['https://pixgrab.com/og-image.png'],
    creator: '@pixgrab',
    site: '@pixgrab',
  },
  alternates: {
    canonical: 'https://pixgrab.com/es',
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

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

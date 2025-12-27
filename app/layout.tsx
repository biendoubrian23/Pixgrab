import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Pixgrab - Download Pinterest, Reddit & X Media',
    template: '%s | Pixgrab',
  },
  description: 'Download Pinterest photos and videos, Reddit videos, and X/Twitter media in original quality. No login. No watermark. No compression.',
  keywords: [
    'pinterest downloader',
    'download pinterest video',
    'download pinterest photos',
    'reddit video downloader',
    'twitter video downloader',
    'x video downloader',
    'save pinterest images',
    'pinterest video saver',
  ],
  authors: [{ name: 'Pixgrab' }],
  creator: 'Pixgrab',
  publisher: 'Pixgrab',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fr_FR',
    url: 'https://pixgrab.com',
    siteName: 'Pixgrab',
    title: 'Pixgrab - Download Pinterest, Reddit & X Media',
    description: 'Download photos and videos in original quality. No login. No watermark.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixgrab - Media Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixgrab - Download Pinterest, Reddit & X Media',
    description: 'Download photos and videos in original quality. No login. No watermark.',
    images: ['/og-image.png'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/icon-192x192.png',
  },
  alternates: {
    canonical: 'https://pixgrab.com',
    languages: {
      'en': 'https://pixgrab.com/en',
      'fr': 'https://pixgrab.com/fr',
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a1a1a',
};

function ServiceWorkerRegistration() {
  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js').then(
                function(registration) {
                  console.log('SW registered: ', registration);
                },
                function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                }
              );
            });
          }
        `,
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}

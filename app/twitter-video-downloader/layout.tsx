import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Twitter Video Downloader - Download X Videos HD Free | Pixgrab',
  description: 'Download Twitter and X videos in HD quality for free. Save videos from tweets instantly. No registration, no watermark. Works on iPhone, Android & PC.',
  keywords: [
    'twitter video downloader',
    'x video downloader',
    'download twitter video',
    'twitter video download',
    'save twitter video',
    'twitter gif downloader',
    'download x video',
    'twitter to mp4',
    'twitter video saver',
    'download video from tweet'
  ],
  alternates: {
    canonical: 'https://pixgrab.com/twitter-video-downloader',
  },
  openGraph: {
    title: 'Twitter Video Downloader - Download X Videos Free',
    description: 'Download Twitter and X videos in HD quality. Free and easy.',
    url: 'https://pixgrab.com/twitter-video-downloader',
    siteName: 'Pixgrab',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter/X Video Downloader - Free HD',
    description: 'Download videos from Twitter and X in HD quality. Free!',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import { Dictionary } from '@/types';

export const en: Dictionary = {
  meta: {
    title: 'Pixgrab - Download Pinterest, Reddit & X Media',
    description: 'Download Pinterest photos and videos, Reddit videos, and X/Twitter media in original quality. No login. No watermark. No compression.',
  },
  hero: {
    title: 'Download photos and videos in original quality',
    titleLine1: 'Download',
    titleLine2: 'photos & videos in',
    titleHighlight: 'original quality',
    subtitle: 'Pinterest, Reddit, X — Paste a link, get your media. That simple.',
    features: [
      'No login required',
      'No watermark',
      'Original quality',
      'Works on mobile',
    ],
  },
  input: {
    placeholder: 'Paste Pinterest, Reddit, or X link here...',
    placeholderPinterest: 'Paste your Pinterest link here...',
    placeholderReddit: 'Paste your Reddit link here...',
    placeholderX: 'Paste your X/Twitter link here...',
    button: 'Download',
    loading: 'Analyzing...',
  },
  result: {
    download: 'Download',
    size: 'Size',
    format: 'Format',
    quality: 'Original quality',
    downloadAnother: 'Download another',
  },
  errors: {
    invalidUrl: 'Please enter a valid URL',
    unsupportedPlatform: 'This platform is not supported yet. Try Pinterest, Reddit, or X links.',
    noMedia: 'No downloadable media found at this link',
    serverError: 'Something went wrong. Please try again.',
    rateLimited: 'Too many requests. Please wait a moment.',
    networkError: 'Connection error. Check your internet.',
    comingSoon: 'This feature is coming soon! For now, try Pinterest, Reddit, or X links.',
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Is Pixgrab free?',
        answer: 'Yes, Pixgrab is completely free to use. No account, no subscription.',
      },
      {
        question: 'Which platforms are supported?',
        answer: 'Pinterest (photos and videos), Reddit (videos and images), and X/Twitter (videos).',
      },
      {
        question: 'Is the quality preserved?',
        answer: 'Yes. We download and deliver the original file without any compression or modification.',
      },
      {
        question: 'How do I save on my phone?',
        answer: 'After clicking Download, long-press the media and select "Save to Photos" (iOS) or it will save automatically (Android).',
      },
      {
        question: 'Is it safe?',
        answer: 'We do not store your data or the downloaded files. Everything is processed and immediately delivered to you.',
      },
    ],
  },
  mobile: {
    saveGuide: 'How to save on your phone',
    iosInstructions: 'Long-press the media, then tap "Save to Photos"',
    androidInstructions: 'Tap Download — the file saves automatically to your Downloads folder',
  },
  footer: {
    legal: 'Legal Notice',
    privacy: 'Privacy Policy',
    copyright: '© {year} Pixgrab. All rights reserved.',
  },
  platforms: {
    pinterest: 'Pinterest',
    reddit: 'Reddit',
    twitter: 'X (Twitter)',
  },
};

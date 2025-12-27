// Types pour Pixgrab

export type Platform = 'pinterest' | 'reddit' | 'twitter' | 'unknown';

export type MediaType = 'image' | 'video';

export interface MediaResult {
  success: boolean;
  platform: Platform;
  type: MediaType;
  url: string;
  thumbnailUrl?: string;
  filename: string;
  size?: number;
  width?: number;
  height?: number;
  duration?: number; // Pour les vidéos, en secondes
  error?: string;
}

export interface DownloadRequest {
  url: string;
}

export interface DownloadResponse {
  success: boolean;
  data?: MediaResult | MediaResult[];
  error?: string;
  message?: string;
}

export interface RateLimitInfo {
  remaining: number;
  reset: number;
  limit: number;
}

// Types pour l'internationalisation
export type Locale = 'en' | 'fr';

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    subtitle: string;
    features: string[];
  };
  input: {
    placeholder: string;
    placeholderPinterest: string;
    placeholderReddit: string;
    placeholderX: string;
    button: string;
    loading: string;
  };
  result: {
    download: string;
    size: string;
    format: string;
    quality: string;
    downloadAnother: string;
  };
  errors: {
    invalidUrl: string;
    unsupportedPlatform: string;
    noMedia: string;
    serverError: string;
    rateLimited: string;
    networkError: string;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  mobile: {
    saveGuide: string;
    iosInstructions: string;
    androidInstructions: string;
  };
  footer: {
    legal: string;
    privacy: string;
    copyright: string;
  };
  platforms: {
    pinterest: string;
    reddit: string;
    twitter: string;
  };
}

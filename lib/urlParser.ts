import { Platform } from '@/types';

/**
 * Détecte la plateforme à partir d'une URL
 */
export function detectPlatform(url: string): Platform {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();

    // Pinterest
    if (
      hostname.includes('pinterest.com') ||
      hostname.includes('pinterest.fr') ||
      hostname.includes('pin.it')
    ) {
      return 'pinterest';
    }

    // Reddit
    if (
      hostname.includes('reddit.com') ||
      hostname.includes('redd.it') ||
      hostname.includes('v.redd.it')
    ) {
      return 'reddit';
    }

    // X/Twitter
    if (
      hostname.includes('twitter.com') ||
      hostname.includes('x.com') ||
      hostname.includes('t.co')
    ) {
      return 'twitter';
    }

    // TikTok
    if (
      hostname.includes('tiktok.com') ||
      hostname.includes('vm.tiktok.com')
    ) {
      return 'tiktok';
    }

    // Instagram
    if (
      hostname.includes('instagram.com') ||
      hostname.includes('instagr.am')
    ) {
      return 'instagram';
    }

    // YouTube
    if (
      hostname.includes('youtube.com') ||
      hostname.includes('youtu.be') ||
      hostname.includes('youtube-nocookie.com')
    ) {
      return 'youtube';
    }

    // Facebook
    if (
      hostname.includes('facebook.com') ||
      hostname.includes('fb.com') ||
      hostname.includes('fb.watch')
    ) {
      return 'facebook';
    }

    // Threads
    if (
      hostname.includes('threads.net')
    ) {
      return 'threads';
    }

    return 'unknown';
  } catch {
    return 'unknown';
  }
}

/**
 * Valide si une URL est correctement formatée
 */
export function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Nettoie une URL (supprime les paramètres de tracking, etc.)
 */
export function cleanUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    
    // Paramètres à supprimer (tracking)
    const paramsToRemove = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term',
      'ref',
      'ref_src',
      'ref_url',
      's', // Twitter
      't', // Twitter
    ];

    paramsToRemove.forEach(param => {
      urlObj.searchParams.delete(param);
    });

    return urlObj.toString();
  } catch {
    return url;
  }
}

/**
 * Extrait l'ID du média depuis l'URL (spécifique à chaque plateforme)
 */
export function extractMediaId(url: string, platform: Platform): string | null {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;

    switch (platform) {
      case 'pinterest':
        // Format: /pin/123456789/
        const pinMatch = pathname.match(/\/pin\/(\d+)/);
        return pinMatch ? pinMatch[1] : null;

      case 'reddit':
        // Format: /r/subreddit/comments/abc123/title/
        const redditMatch = pathname.match(/\/comments\/([a-zA-Z0-9]+)/);
        return redditMatch ? redditMatch[1] : null;

      case 'twitter':
        // Format: /user/status/123456789
        const twitterMatch = pathname.match(/\/status\/(\d+)/);
        return twitterMatch ? twitterMatch[1] : null;

      default:
        return null;
    }
  } catch {
    return null;
  }
}

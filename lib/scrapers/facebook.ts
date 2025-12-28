/**
 * Facebook Video Scraper
 * Extrait les informations vidéo de Facebook
 */

import { MediaResult } from '@/types';

/**
 * Vérifie si l'URL est une URL Facebook vidéo valide
 */
export function isFacebookUrl(url: string): boolean {
  const patterns = [
    /facebook\.com\/[\w.]+\/videos\/\d+/i,
    /facebook\.com\/watch\/?\?v=\d+/i,
    /facebook\.com\/reel\/\d+/i,
    /fb\.watch\/[\w]+/i,
    /facebook\.com\/[\w.]+\/posts\/[\w]+/i,
  ];
  return patterns.some(pattern => pattern.test(url));
}

/**
 * Extrait l'ID de la vidéo Facebook
 */
export function extractFacebookVideoId(url: string): string | null {
  // Format: /videos/ID
  const videosMatch = url.match(/videos\/(\d+)/);
  if (videosMatch) {
    return videosMatch[1];
  }
  
  // Format: /watch?v=ID
  const watchMatch = url.match(/[?&]v=(\d+)/);
  if (watchMatch) {
    return watchMatch[1];
  }
  
  // Format: /reel/ID
  const reelMatch = url.match(/reel\/(\d+)/);
  if (reelMatch) {
    return reelMatch[1];
  }
  
  return null;
}

/**
 * Récupère les informations d'une vidéo Facebook
 */
export async function scrapeFacebookVideo(url: string): Promise<MediaResult> {
  try {
    // Résoudre les URLs courtes fb.watch
    let resolvedUrl = url;
    if (url.includes('fb.watch')) {
      try {
        const response = await fetch(url, {
          method: 'HEAD',
          redirect: 'follow',
        });
        resolvedUrl = response.url;
      } catch (e) {
        // Garder l'URL originale si la résolution échoue
      }
    }
    
    const videoId = extractFacebookVideoId(resolvedUrl);
    
    // Essayer d'obtenir les métadonnées via la page
    const pageData = await scrapeFacebookFromPage(resolvedUrl);
    
    if (pageData) {
      return {
        success: true,
        platform: 'facebook' as any,
        type: 'video',
        url: pageData.videoUrl || resolvedUrl,
        thumbnailUrl: pageData.thumbnailUrl || '',
        filename: `facebook-${videoId || Date.now()}.mp4`,
        width: 1080,
        height: 1920,
      };
    }
    
    // Fallback avec les infos de base
    return {
      success: true,
      platform: 'facebook' as any,
      type: 'video',
      url: resolvedUrl,
      thumbnailUrl: '',
      filename: `facebook-${videoId || Date.now()}.mp4`,
    };
    
  } catch (error) {
    console.error('Facebook scraping error:', error);
    return {
      success: false,
      platform: 'facebook' as any,
      type: 'video',
      url: '',
      filename: '',
      error: error instanceof Error ? error.message : 'Failed to fetch Facebook video',
    };
  }
}

/**
 * Extrait les données de la page Facebook
 */
async function scrapeFacebookFromPage(url: string): Promise<{ videoUrl: string; thumbnailUrl: string } | null> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      },
    });
    
    if (!response.ok) {
      return null;
    }
    
    const html = await response.text();
    
    // Chercher les métadonnées Open Graph
    const videoUrlMatch = html.match(/<meta property="og:video"[^>]*content="([^"]+)"/);
    const thumbnailMatch = html.match(/<meta property="og:image"[^>]*content="([^"]+)"/);
    
    if (videoUrlMatch || thumbnailMatch) {
      return {
        videoUrl: videoUrlMatch ? videoUrlMatch[1] : '',
        thumbnailUrl: thumbnailMatch ? thumbnailMatch[1] : '',
      };
    }
    
    return null;
  } catch (error) {
    console.error('Facebook page scraping error:', error);
    return null;
  }
}

// Alias for API compatibility
export const extractFacebookMedia = scrapeFacebookVideo;

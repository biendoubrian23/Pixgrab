/**
 * Instagram Reels/Video Scraper
 * Extrait les informations vidéo d'Instagram
 */

import { MediaResult } from '@/types';

/**
 * Vérifie si l'URL est une URL Instagram valide
 */
export function isInstagramUrl(url: string): boolean {
  const patterns = [
    /instagram\.com\/p\/[\w-]+/i,
    /instagram\.com\/reel\/[\w-]+/i,
    /instagram\.com\/reels\/[\w-]+/i,
    /instagram\.com\/tv\/[\w-]+/i,
  ];
  return patterns.some(pattern => pattern.test(url));
}

/**
 * Extrait le shortcode Instagram de l'URL
 */
export function extractInstagramShortcode(url: string): string | null {
  const match = url.match(/\/(p|reel|reels|tv)\/([\w-]+)/);
  return match ? match[2] : null;
}

/**
 * Récupère les informations d'une vidéo Instagram
 * Note: Instagram a des protections très strictes
 */
export async function scrapeInstagramVideo(url: string): Promise<MediaResult> {
  try {
    const shortcode = extractInstagramShortcode(url);
    
    if (!shortcode) {
      throw new Error('Could not extract Instagram shortcode');
    }
    
    // Essayer d'obtenir les données via l'API oEmbed
    const oembedUrl = `https://api.instagram.com/oembed?url=${encodeURIComponent(url)}`;
    
    try {
      const oembedResponse = await fetch(oembedUrl);
      
      if (oembedResponse.ok) {
        const oembedData = await oembedResponse.json();
        
        return {
          success: true,
          platform: 'instagram' as any,
          type: 'video',
          url: url,
          thumbnailUrl: oembedData.thumbnail_url || '',
          filename: `instagram-${shortcode}.mp4`,
          width: oembedData.thumbnail_width || 1080,
          height: oembedData.thumbnail_height || 1920,
        };
      }
    } catch (e) {
      // oEmbed peut échouer, continuer avec d'autres méthodes
    }
    
    // Fallback: retourner les infos de base
    return {
      success: true,
      platform: 'instagram' as any,
      type: 'video',
      url: url,
      thumbnailUrl: '',
      filename: `instagram-${shortcode}.mp4`,
    };
    
  } catch (error) {
    console.error('Instagram scraping error:', error);
    return {
      success: false,
      platform: 'instagram' as any,
      type: 'video',
      url: '',
      filename: '',
      error: error instanceof Error ? error.message : 'Failed to fetch Instagram video',
    };
  }
}

/**
 * Tente d'extraire l'URL vidéo directement de la page
 */
export async function scrapeInstagramFromPage(url: string): Promise<{ videoUrl: string; thumbnailUrl: string } | null> {
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
    
    if (videoUrlMatch) {
      return {
        videoUrl: videoUrlMatch[1],
        thumbnailUrl: thumbnailMatch ? thumbnailMatch[1] : '',
      };
    }
    
    return null;
  } catch (error) {
    console.error('Instagram page scraping error:', error);
    return null;
  }
}

// Alias for API compatibility
export const extractInstagramMedia = scrapeInstagramVideo;

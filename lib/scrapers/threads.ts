/**
 * Threads Video Scraper
 * Extrait les informations vidéo de Threads (Meta)
 */

import { MediaResult } from '@/types';

/**
 * Vérifie si l'URL est une URL Threads valide
 */
export function isThreadsUrl(url: string): boolean {
  const patterns = [
    /threads\.net\/@[\w.]+\/post\/[\w]+/i,
    /threads\.net\/t\/[\w]+/i,
  ];
  return patterns.some(pattern => pattern.test(url));
}

/**
 * Extrait l'ID du post Threads
 */
export function extractThreadsPostId(url: string): string | null {
  // Format: /post/ID ou /t/ID
  const postMatch = url.match(/post\/([\w]+)/);
  if (postMatch) {
    return postMatch[1];
  }
  
  const shortMatch = url.match(/\/t\/([\w]+)/);
  if (shortMatch) {
    return shortMatch[1];
  }
  
  return null;
}

/**
 * Récupère les informations d'une vidéo Threads
 */
export async function scrapeThreadsVideo(url: string): Promise<MediaResult> {
  try {
    const postId = extractThreadsPostId(url);
    
    if (!postId) {
      throw new Error('Could not extract Threads post ID');
    }
    
    // Essayer d'obtenir les métadonnées via la page
    const pageData = await scrapeThreadsFromPage(url);
    
    if (pageData) {
      return {
        success: true,
        platform: 'threads' as any,
        type: 'video',
        url: pageData.videoUrl || url,
        thumbnailUrl: pageData.thumbnailUrl || '',
        filename: `threads-${postId}.mp4`,
        width: 1080,
        height: 1920,
      };
    }
    
    // Fallback avec les infos de base
    return {
      success: true,
      platform: 'threads' as any,
      type: 'video',
      url: url,
      thumbnailUrl: '',
      filename: `threads-${postId}.mp4`,
    };
    
  } catch (error) {
    console.error('Threads scraping error:', error);
    return {
      success: false,
      platform: 'threads' as any,
      type: 'video',
      url: '',
      filename: '',
      error: error instanceof Error ? error.message : 'Failed to fetch Threads video',
    };
  }
}

/**
 * Extrait les données de la page Threads
 */
async function scrapeThreadsFromPage(url: string): Promise<{ videoUrl: string; thumbnailUrl: string } | null> {
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
    console.error('Threads page scraping error:', error);
    return null;
  }
}

// Alias for API compatibility
export const extractThreadsMedia = scrapeThreadsVideo;

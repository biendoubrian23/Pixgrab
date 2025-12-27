import { MediaResult } from '@/types';

/**
 * Extrait les URLs des médias depuis une page Pinterest
 */
export async function extractPinterestMedia(url: string): Promise<MediaResult | null> {
  try {
    // Fetch la page Pinterest
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Pinterest page: ${response.status}`);
    }

    const html = await response.text();

    // Chercher les données JSON embarquées dans la page
    // Pinterest utilise un script avec __PWS_DATA__ ou des meta tags
    
    // Méthode 1: Chercher la vidéo en premier
    const videoMatch = html.match(/"url":"(https:\/\/v1\.pinimg\.com\/videos\/[^"]+\.mp4)"/);
    if (videoMatch) {
      const videoUrl = videoMatch[1].replace(/\\u002F/g, '/');
      return {
        success: true,
        platform: 'pinterest',
        type: 'video',
        url: videoUrl,
        filename: `pinterest-video-${Date.now()}.mp4`,
      };
    }

    // Méthode 2: Chercher l'image originale (originals ou 736x)
    const imagePatterns = [
      /"url":"(https:\/\/i\.pinimg\.com\/originals\/[^"]+)"/,
      /"url":"(https:\/\/i\.pinimg\.com\/736x\/[^"]+)"/,
      /property="og:image" content="([^"]+)"/,
      /<meta name="og:image" content="([^"]+)"/,
    ];

    for (const pattern of imagePatterns) {
      const match = html.match(pattern);
      if (match) {
        let imageUrl = match[1].replace(/\\u002F/g, '/');
        
        // Essayer de convertir vers la version originale
        if (imageUrl.includes('/736x/')) {
          imageUrl = imageUrl.replace('/736x/', '/originals/');
        }
        
        const extension = imageUrl.match(/\.(\w+)(?:\?|$)/)?.[1] || 'jpg';
        
        return {
          success: true,
          platform: 'pinterest',
          type: 'image',
          url: imageUrl,
          thumbnailUrl: imageUrl.replace('/originals/', '/236x/'),
          filename: `pinterest-image-${Date.now()}.${extension}`,
        };
      }
    }

    return null;
  } catch (error) {
    console.error('Pinterest extraction error:', error);
    return null;
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { detectPlatform } from '@/lib/urlParser';
import { validateAndSanitizeUrl, sanitizeFilename } from '@/lib/security';
import { extractPinterestMedia } from '@/lib/scrapers/pinterest';
import { extractRedditMedia } from '@/lib/scrapers/reddit';
import { extractTwitterMedia } from '@/lib/scrapers/twitter';
import { checkRateLimit, getClientIp } from '@/lib/rateLimit';
import { DownloadResponse } from '@/types';

// Timeout pour les requêtes externes (10 secondes)
const SCRAPE_TIMEOUT = 10000;

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    // Rate limiting
    const clientIp = getClientIp(request);
    const rateLimitResult = checkRateLimit(clientIp);

    if (!rateLimitResult.allowed) {
      console.warn(`Rate limit exceeded for IP: ${clientIp.substring(0, 10)}...`);
      return NextResponse.json<DownloadResponse>(
        {
          success: false,
          error: 'Too many requests. Please wait a moment.',
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.ceil(rateLimitResult.resetIn / 1000)),
            'Retry-After': String(Math.ceil(rateLimitResult.resetIn / 1000)),
          },
        }
      );
    }

    // Parse le body avec protection contre les payloads volumineux
    let body;
    try {
      const text = await request.text();
      if (text.length > 4096) {
        return NextResponse.json<DownloadResponse>(
          { success: false, error: 'Request too large' },
          { status: 413 }
        );
      }
      body = JSON.parse(text);
    } catch {
      return NextResponse.json<DownloadResponse>(
        { success: false, error: 'Invalid JSON' },
        { status: 400 }
      );
    }

    const { url } = body;

    // Validation de l'URL avec sanitisation
    if (!url || typeof url !== 'string') {
      return NextResponse.json<DownloadResponse>(
        { success: false, error: 'Please provide a valid URL' },
        { status: 400 }
      );
    }

    // Validation et sanitisation sécurisée
    const validation = validateAndSanitizeUrl(url);
    if (!validation.valid || !validation.url) {
      return NextResponse.json<DownloadResponse>(
        { success: false, error: validation.error || 'Invalid URL' },
        { status: 400 }
      );
    }

    const sanitizedUrl = validation.url;

    // Détecter la plateforme
    const platform = detectPlatform(sanitizedUrl);

    if (platform === 'unknown') {
      return NextResponse.json<DownloadResponse>(
        {
          success: false,
          error: 'This platform is not supported yet. Try Pinterest, Reddit, or X links.',
        },
        { status: 400 }
      );
    }

    // Plateformes en cours de développement
    const comingSoonPlatforms = ['tiktok', 'instagram', 'youtube', 'facebook', 'threads'];
    if (comingSoonPlatforms.includes(platform)) {
      return NextResponse.json<DownloadResponse>(
        {
          success: false,
          error: `${platform.charAt(0).toUpperCase() + platform.slice(1)} downloads are coming soon! For now, try Pinterest, Reddit, or X links.`,
        },
        { status: 400 }
      );
    }

    // Extraire le média avec timeout
    let result = null;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), SCRAPE_TIMEOUT);

    try {
      switch (platform) {
        case 'pinterest':
          result = await extractPinterestMedia(sanitizedUrl);
          break;
        case 'reddit':
          result = await extractRedditMedia(sanitizedUrl);
          break;
        case 'twitter':
          result = await extractTwitterMedia(sanitizedUrl);
          break;
      }
    } finally {
      clearTimeout(timeoutId);
    }

    if (!result) {
      return NextResponse.json<DownloadResponse>(
        {
          success: false,
          error: 'No downloadable media found at this link',
        },
        { status: 404 }
      );
    }

    // Sanitiser le nom de fichier dans le résultat
    if (result.filename) {
      result.filename = sanitizeFilename(result.filename);
    }

    // Log pour monitoring (sans données sensibles)
    console.log(`Download success: platform=${platform}, duration=${Date.now() - startTime}ms`);

    return NextResponse.json<DownloadResponse>(
      {
        success: true,
        data: result,
      },
      {
        headers: {
          'X-RateLimit-Remaining': String(rateLimitResult.remaining),
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    );
  } catch (error) {
    console.error('Download API error:', error instanceof Error ? error.message : 'Unknown error');
    
    return NextResponse.json<DownloadResponse>(
      {
        success: false,
        error: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}

// Méthode GET non supportée
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST.' },
    { status: 405 }
  );
}

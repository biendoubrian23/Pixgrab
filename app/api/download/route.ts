import { NextRequest, NextResponse } from 'next/server';
import { detectPlatform, isValidUrl, cleanUrl } from '@/lib/urlParser';
import { extractPinterestMedia } from '@/lib/scrapers/pinterest';
import { extractRedditMedia } from '@/lib/scrapers/reddit';
import { extractTwitterMedia } from '@/lib/scrapers/twitter';
import { extractTikTokMedia } from '@/lib/scrapers/tiktok';
import { extractInstagramMedia } from '@/lib/scrapers/instagram';
import { extractYouTubeMedia } from '@/lib/scrapers/youtube';
import { extractFacebookMedia } from '@/lib/scrapers/facebook';
import { extractThreadsMedia } from '@/lib/scrapers/threads';
import { checkRateLimit, getClientIp } from '@/lib/rateLimit';
import { DownloadResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request);
    const rateLimitResult = checkRateLimit(clientIp);

    if (!rateLimitResult.allowed) {
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
          },
        }
      );
    }

    // Parse le body
    const body = await request.json();
    const { url } = body;

    // Validation de l'URL
    if (!url || typeof url !== 'string') {
      return NextResponse.json<DownloadResponse>(
        {
          success: false,
          error: 'Please provide a valid URL',
        },
        { status: 400 }
      );
    }

    if (!isValidUrl(url)) {
      return NextResponse.json<DownloadResponse>(
        {
          success: false,
          error: 'Please enter a valid URL',
        },
        { status: 400 }
      );
    }

    // Nettoyer l'URL
    const cleanedUrl = cleanUrl(url);

    // Détecter la plateforme
    const platform = detectPlatform(cleanedUrl);

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

    // Extraire le média selon la plateforme
    let result = null;

    switch (platform) {
      case 'pinterest':
        result = await extractPinterestMedia(cleanedUrl);
        break;
      case 'reddit':
        result = await extractRedditMedia(cleanedUrl);
        break;
      case 'twitter':
        result = await extractTwitterMedia(cleanedUrl);
        break;
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

    return NextResponse.json<DownloadResponse>(
      {
        success: true,
        data: result,
      },
      {
        headers: {
          'X-RateLimit-Remaining': String(rateLimitResult.remaining),
        },
      }
    );
  } catch (error) {
    console.error('Download API error:', error);
    
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

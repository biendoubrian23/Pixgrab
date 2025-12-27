import { NextRequest, NextResponse } from 'next/server';

/**
 * Proxy pour télécharger les médias en contournant CORS
 * Streame directement vers le client sans stocker
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const mediaUrl = searchParams.get('url');

    if (!mediaUrl) {
      return NextResponse.json(
        { error: 'URL parameter is required' },
        { status: 400 }
      );
    }

    // Valider que l'URL est d'une source autorisée
    const allowedDomains = [
      'pinimg.com',
      'redd.it',
      'reddit.com',
      'twimg.com',
      'video.twimg.com',
      'pbs.twimg.com',
    ];

    const url = new URL(mediaUrl);
    const isAllowed = allowedDomains.some(domain => url.hostname.includes(domain));

    if (!isAllowed) {
      return NextResponse.json(
        { error: 'Domain not allowed' },
        { status: 403 }
      );
    }

    // Fetch le média
    const response = await fetch(mediaUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': '*/*',
        'Referer': url.origin,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch media' },
        { status: response.status }
      );
    }

    // Déterminer le content-type
    const contentType = response.headers.get('content-type') || 'application/octet-stream';
    const contentLength = response.headers.get('content-length');

    // Headers pour le téléchargement
    const headers: HeadersInit = {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=3600',
    };

    if (contentLength) {
      headers['Content-Length'] = contentLength;
    }

    // Streamer la réponse
    return new NextResponse(response.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to proxy media' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 7 langues supportées
const locales = ['en', 'fr', 'es', 'pt', 'it', 'de', 'nl'];
const defaultLocale = 'en';
const LOCALE_COOKIE = 'PIXGRAB_LOCALE';

function getLocale(request: NextRequest): string {
  // 1. Vérifier le cookie de préférence utilisateur
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Vérifier le header Accept-Language du navigateur
  const acceptLanguage = request.headers.get('accept-language');
  
  if (acceptLanguage) {
    // Parser Accept-Language et trouver la meilleure correspondance
    const languages = acceptLanguage
      .split(',')
      .map(lang => {
        const [code, qValue] = lang.trim().split(';q=');
        return {
          code: code.substring(0, 2).toLowerCase(),
          quality: qValue ? parseFloat(qValue) : 1.0
        };
      })
      .sort((a, b) => b.quality - a.quality);
    
    for (const lang of languages) {
      if (locales.includes(lang.code)) {
        return lang.code;
      }
    }
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Ignorer les fichiers statiques, API, et autres routes spéciales
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') ||
    pathname === '/manifest.json' ||
    pathname === '/sw.js' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next();
  }
  
  // Vérifier si le pathname a déjà un locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    // Extraire le locale du path et sauvegarder en cookie
    const currentLocale = pathname.split('/')[1];
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, currentLocale, {
      maxAge: 60 * 60 * 24 * 365, // 1 an
      path: '/',
      sameSite: 'lax'
    });
    return response;
  }
  
  // Pour la page d'accueil sans locale, rediriger vers la langue détectée
  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  
  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE, locale, {
    maxAge: 60 * 60 * 24 * 365, // 1 an
    path: '/',
    sameSite: 'lax'
  });
  
  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files
    '/((?!_next/static|_next/image|favicon.ico|icons|.*\\..*|api).*)',
  ],
};

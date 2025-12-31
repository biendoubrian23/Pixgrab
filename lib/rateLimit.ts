// Rate limiter avancé basé sur IP
// Stockage en mémoire (reset au redémarrage du serveur)
// Pour la production, utiliser Redis

interface RateLimitEntry {
  count: number;
  resetAt: number;
  blocked: boolean;
  blockUntil?: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Configuration
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 20; // 20 requêtes par minute (réduit pour plus de sécurité)
const BLOCK_DURATION_MS = 5 * 60 * 1000; // 5 minutes de blocage si abus
const ABUSE_THRESHOLD = 50; // Si > 50 requêtes en 1 min, blocage temporaire

/**
 * Vérifie si une IP est rate-limitée
 * @returns true si la requête est autorisée, false sinon
 */
export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetIn: number;
} {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  // Nettoyer les entrées expirées occasionnellement
  if (Math.random() < 0.01) {
    cleanupExpiredEntries();
  }

  // Vérifier si l'IP est bloquée
  if (entry?.blocked && entry.blockUntil && entry.blockUntil > now) {
    return {
      allowed: false,
      remaining: 0,
      resetIn: entry.blockUntil - now,
    };
  }

  // Si pas d'entrée ou entrée expirée, créer une nouvelle
  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
      blocked: false,
    });
    return {
      allowed: true,
      remaining: MAX_REQUESTS - 1,
      resetIn: WINDOW_MS,
    };
  }

  // Incrémenter le compteur
  entry.count++;

  // Détecter les abus et bloquer
  if (entry.count > ABUSE_THRESHOLD) {
    entry.blocked = true;
    entry.blockUntil = now + BLOCK_DURATION_MS;
    console.warn(`IP blocked for abuse: ${ip.substring(0, 10)}... (${entry.count} requests)`);
    return {
      allowed: false,
      remaining: 0,
      resetIn: BLOCK_DURATION_MS,
    };
  }

  // Vérifier la limite normale
  if (entry.count > MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      resetIn: entry.resetAt - now,
    };
  }

  return {
    allowed: true,
    remaining: MAX_REQUESTS - entry.count,
    resetIn: entry.resetAt - now,
  };
}

/**
 * Nettoie les entrées expirées du store
 */
function cleanupExpiredEntries(): void {
  const now = Date.now();
  rateLimitStore.forEach((entry, ip) => {
    if (entry.resetAt < now) {
      rateLimitStore.delete(ip);
    }
  });
}

/**
 * Extrait l'IP d'une requête (compatible Vercel/serverless)
 */
export function getClientIp(request: Request): string {
  // Headers Vercel/Cloudflare
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  return 'unknown';
}

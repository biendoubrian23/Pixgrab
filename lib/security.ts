/**
 * Validation et sanitisation des URLs
 * Protection contre les attaques SSRF, XSS et injection
 */

// Liste blanche des domaines autorisés
const ALLOWED_DOMAINS = [
  // Pinterest
  'pinterest.com',
  'www.pinterest.com',
  'pin.it',
  'pinterest.fr',
  'pinterest.de',
  'pinterest.es',
  'pinterest.co.uk',
  // Reddit
  'reddit.com',
  'www.reddit.com',
  'old.reddit.com',
  'v.redd.it',
  // Twitter/X
  'twitter.com',
  'www.twitter.com',
  'x.com',
  'www.x.com',
  'mobile.twitter.com',
  // TikTok (coming soon)
  'tiktok.com',
  'www.tiktok.com',
  'vm.tiktok.com',
  // Instagram (coming soon)
  'instagram.com',
  'www.instagram.com',
  // YouTube (coming soon)
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'm.youtube.com',
  // Facebook (coming soon)
  'facebook.com',
  'www.facebook.com',
  'fb.watch',
  'm.facebook.com',
  // Threads (coming soon)
  'threads.net',
  'www.threads.net',
];

// Domaines bloqués (protection SSRF)
const BLOCKED_DOMAINS = [
  'localhost',
  '127.0.0.1',
  '0.0.0.0',
  '::1',
  '10.',
  '172.16.',
  '172.17.',
  '172.18.',
  '172.19.',
  '172.20.',
  '172.21.',
  '172.22.',
  '172.23.',
  '172.24.',
  '172.25.',
  '172.26.',
  '172.27.',
  '172.28.',
  '172.29.',
  '172.30.',
  '172.31.',
  '192.168.',
  'metadata.google.internal',
  '169.254.169.254', // AWS metadata
];

/**
 * Valide et sanitise une URL
 * @returns URL sanitisée ou null si invalide
 */
export function validateAndSanitizeUrl(input: string): { valid: boolean; url: string | null; error?: string } {
  try {
    // Trim et limite de longueur
    const trimmed = input.trim();
    if (trimmed.length > 2048) {
      return { valid: false, url: null, error: 'URL too long' };
    }

    // Vérifier les caractères dangereux
    if (/[<>'"\\]/.test(trimmed)) {
      return { valid: false, url: null, error: 'Invalid characters in URL' };
    }

    // Parser l'URL
    let parsed: URL;
    try {
      parsed = new URL(trimmed);
    } catch {
      return { valid: false, url: null, error: 'Invalid URL format' };
    }

    // Vérifier le protocole (HTTPS uniquement)
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return { valid: false, url: null, error: 'Only HTTP(S) URLs are allowed' };
    }

    // Vérifier les domaines bloqués (SSRF protection)
    const hostname = parsed.hostname.toLowerCase();
    for (const blocked of BLOCKED_DOMAINS) {
      if (hostname === blocked || hostname.startsWith(blocked) || hostname.endsWith('.' + blocked)) {
        return { valid: false, url: null, error: 'This domain is not allowed' };
      }
    }

    // Vérifier la liste blanche des domaines
    const isAllowed = ALLOWED_DOMAINS.some(domain => {
      return hostname === domain || hostname.endsWith('.' + domain);
    });

    if (!isAllowed) {
      return { valid: false, url: null, error: 'This platform is not supported' };
    }

    // Supprimer le fragment (hash)
    parsed.hash = '';

    // Retourner l'URL sanitisée
    return { valid: true, url: parsed.toString() };

  } catch (error) {
    console.error('URL validation error:', error);
    return { valid: false, url: null, error: 'Invalid URL' };
  }
}

/**
 * Échappe les caractères HTML pour prévenir XSS
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char] || char);
}

/**
 * Valide un nom de fichier pour le téléchargement
 */
export function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[^a-zA-Z0-9.-]/g, '_')
    .replace(/_{2,}/g, '_')
    .substring(0, 200);
}

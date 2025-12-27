# Pixgrab

**Download Pinterest, Reddit & X media in original quality**

A modern PWA (Progressive Web App) built with Next.js for downloading photos and videos from Pinterest, Reddit, and X (Twitter).

## Features

- 🖼️ **Pinterest**: Download photos and videos in original quality
- 🎬 **Reddit**: Download videos with audio
- 🐦 **X/Twitter**: Download videos and images
- 📱 **PWA**: Install on your phone like a native app
- 🌍 **Multilingual**: English and French support
- ⚡ **Fast**: Serverless architecture for instant results
- 🔒 **Private**: No data stored, no tracking
- 💰 **Free**: No ads, no premium, no subscription

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **PWA**: Service Worker + Web App Manifest
- **Deployment**: Vercel / Serverless

## Design Philosophy

- Ultra-clean, premium aesthetic
- **No rounded corners** - strict angular design
- Apple/Stripe-inspired minimalism
- Mobile-first responsive design
- Maximum whitespace and breathing room

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
pixgrab/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   ├── download/         # Main download API
│   │   └── proxy/            # Media proxy for CORS
│   ├── download-pinterest-photos/
│   ├── download-pinterest-videos/
│   ├── download-reddit-videos/
│   ├── download-x-videos/
│   ├── legal/
│   ├── privacy/
│   ├── en/                   # English locale
│   ├── fr/                   # French locale
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/               # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── DownloadForm.tsx
│   ├── Result.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── lib/                      # Utilities
│   ├── urlParser.ts
│   ├── rateLimit.ts
│   └── scrapers/
│       ├── pinterest.ts
│       ├── reddit.ts
│       └── twitter.ts
├── locales/                  # Translations
│   ├── en.ts
│   ├── fr.ts
│   └── index.ts
├── hooks/                    # Custom React hooks
│   └── useDownload.ts
├── types/                    # TypeScript types
│   └── index.ts
├── public/                   # Static assets
│   ├── manifest.json
│   ├── sw.js
│   └── icons/
└── middleware.ts             # i18n middleware
```

## SEO Pages

Each platform has a dedicated SEO-optimized landing page:

- `/download-pinterest-photos` - Pinterest photos
- `/download-pinterest-videos` - Pinterest videos
- `/download-reddit-videos` - Reddit videos
- `/download-x-videos` - X/Twitter videos

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy

### Other Platforms

The app is serverless-ready and can be deployed to:
- Netlify
- AWS Lambda
- Cloudflare Workers

## Environment Variables

No environment variables required for basic functionality.

Optional:
```env
# Custom domain for sitemap/metadata
NEXT_PUBLIC_SITE_URL=https://pixgrab.com
```

## Rate Limiting

Built-in rate limiting: 30 requests per minute per IP.

## Legal

- Users are responsible for respecting copyright
- No media is stored on servers
- See `/legal` and `/privacy` for full terms

## Contributing

Contributions welcome! Please read the contribution guidelines first.

## License

MIT License - see LICENSE file for details.

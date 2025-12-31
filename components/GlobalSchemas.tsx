'use client';

export default function GlobalSchemas() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pixgrab",
    "url": "https://pixgrab.com",
    "logo": "https://pixgrab.com/logo.jpeg",
    "description": "Download photos and videos from Pinterest, Reddit, and X/Twitter in original HD quality. Free, no watermark, no registration required.",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/pixgrab",
      "https://www.facebook.com/pixgrab"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["English", "French", "Spanish", "Portuguese", "Italian", "German", "Dutch"]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pixgrab",
    "url": "https://pixgrab.com",
    "description": "Free online tool to download photos and videos from Pinterest, Reddit, and X/Twitter in original HD quality",
    "inLanguage": ["en", "fr", "es", "pt", "it", "de", "nl"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://pixgrab.com/?url={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Pixgrab",
    "url": "https://pixgrab.com",
    "description": "Download Pinterest, Reddit, and X videos and photos for free in HD quality",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "availableLanguage": ["en", "fr", "es", "pt", "it", "de", "nl"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "15234",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Pinterest Video Download HD",
      "Pinterest Image Download",
      "Reddit Video Download with Sound",
      "Twitter/X Video Download",
      "No Watermark",
      "HD Quality",
      "Free to Use",
      "No Registration Required",
      "7 Languages Supported"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pixgrab.com"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Pixgrab free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Pixgrab is 100% free to use. No account required, no subscription needed."
        }
      },
      {
        "@type": "Question",
        "name": "Which platforms are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pixgrab supports Pinterest (photos and videos), Reddit (videos with sound), and X/Twitter (videos)."
        }
      },
      {
        "@type": "Question",
        "name": "Is the original quality preserved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we download and deliver the original file in HD quality without any compression or modification."
        }
      },
      {
        "@type": "Question",
        "name": "Is Pixgrab safe to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Pixgrab is completely safe. We do not store your data or downloaded files. Everything is processed instantly and delivered to you."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

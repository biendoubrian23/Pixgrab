'use client';

export default function GlobalSchemas() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pixgrab",
    "url": "https://pixgrab.com",
    "logo": "https://pixgrab.com/logo.jpeg",
    "description": "Download photos and videos from Pinterest, Reddit, and X/Twitter in original quality. Free, no watermark, no registration.",
    "sameAs": [
      "https://twitter.com/pixgrab",
      "https://www.facebook.com/pixgrab"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["English", "French"]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pixgrab",
    "url": "https://pixgrab.com",
    "description": "Free online tool to download photos and videos from Pinterest, Reddit, and X/Twitter",
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
    "description": "Download Pinterest, Reddit, and X videos and photos for free",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
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
      "Pinterest Video Download",
      "Pinterest Image Download",
      "Reddit Video Download with Sound",
      "Twitter/X Video Download",
      "No Watermark",
      "HD Quality",
      "Free to Use"
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
    </>
  );
}

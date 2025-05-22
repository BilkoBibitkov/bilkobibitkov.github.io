import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  type?: 'WebApplication' | 'WebSite' | 'WebPage';
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords,
  path = '',
  type = 'WebPage'
}) => {
  const siteTitle = "Simple Web Tools";
  const fullTitle = `${title} | ${siteTitle}`;
  const canonicalUrl = `https://bilkobibitkov.github.io${path}`;

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    "name": fullTitle,
    "description": description,
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Simple Web Tools",
      "url": "https://bilkobibitkov.github.io"
    },
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO; 
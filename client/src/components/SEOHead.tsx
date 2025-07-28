import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonical?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords = "AI checkout, frictionless commerce, payment protocol, SPEAR, checkout optimization, AI commerce, zero friction payment, enterprise checkout",
  ogType = "website",
  ogImage = "/generated-icon.png",
  canonical 
}: SEOProps) => {
  const [location] = useLocation();
  const fullTitle = `${title} | S.P.E.A.R.™ Protocol`;
  const currentUrl = `${window.location.origin}${location}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Spear Holdings');
    updateMetaTag('robots', 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', `${window.location.origin}${ogImage}`, true);
    updateMetaTag('og:site_name', 'S.P.E.A.R.™ Protocol', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${window.location.origin}${ogImage}`);

    // Additional SEO tags
    updateMetaTag('theme-color', '#ff0033');
    updateMetaTag('msapplication-TileColor', '#ff0033');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Structured data for organization
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Spear Holdings",
      "description": "Revolutionary AI-powered checkout protocol for frictionless commerce experiences",
      "url": window.location.origin,
      "logo": `${window.location.origin}/generated-icon.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-920-238-6591",
        "contactType": "Customer Service",
        "email": "cory@spearhl.com"
      },
      "sameAs": []
    };

    let jsonLd = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.type = 'application/ld+json';
      document.head.appendChild(jsonLd);
    }
    jsonLd.innerHTML = JSON.stringify(structuredData);

  }, [title, description, keywords, ogType, ogImage, canonical, location]);

  return null;
};

export default SEOHead;
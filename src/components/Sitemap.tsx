import { useEffect } from 'react';

const Sitemap = () => {
  useEffect(() => {
    // Generate and inject sitemap in head
    const sitemapData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "About",
          "item": `${window.location.origin}#about`
        },
        {
          "@type": "ListItem",
          "position": 3, 
          "name": "Skills",
          "item": `${window.location.origin}#skills`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Experience", 
          "item": `${window.location.origin}#experience`
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Projects",
          "item": `${window.location.origin}#projects`
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Workflows",
          "item": `${window.location.origin}#workflows`
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Contact",
          "item": `${window.location.origin}#contact`
        }
      ]
    };

    let script = document.querySelector('#sitemap-data') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'sitemap-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(sitemapData);
  }, []);

  return null;
};

export default Sitemap;
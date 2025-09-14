import { useEffect } from 'react';

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  structuredData?: object;
}

export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    const {
      title = "Parth Shah - Product Manager | Full-Stack Developer | n8n Automation Expert",
      description = "Technical Product Manager with 3+ years of development experience and 50+ production automations. Specializing in n8n workflows, full-stack development, and bridging technical and business teams.",
      keywords = [],
      image = "https://lovable.dev/opengraph-image-p98pqg.png",
      url = window.location.href,
      type = 'website',
      structuredData
    } = config;

    // Update title
    document.title = title;

    // Update meta tags helper
    const updateMetaTag = (selector: string, content: string, attribute = 'content') => {
      let meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute(attribute, content);
      }
    };

    // Update existing meta tags
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:image"]', image);
    updateMetaTag('meta[property="og:url"]', url);
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', image);
    updateMetaTag('link[rel="canonical"]', url, 'href');

    // Update keywords if provided
    if (keywords.length > 0) {
      updateMetaTag('meta[name="keywords"]', keywords.join(', '));
    }

    // Update structured data if provided
    if (structuredData) {
      let script = document.querySelector('#dynamic-structured-data') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = 'dynamic-structured-data';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

  }, [config]);
};

export default useSEO;
import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  structuredData?: object;
}

const SEO = ({
  title = "Parth Shah - Product Manager | Full-Stack Developer | n8n Automation Expert",
  description = "Technical Product Manager with 3+ years of development experience and 50+ production automations. Specializing in n8n workflows, full-stack development, and bridging technical and business teams.",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = window.location.href,
  type = "website",
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag(
      "keywords",
      "Product Manager, n8n Automation, Full-Stack Developer, Technical PM, Workflow Automation, React Developer, Node.js, JavaScript, TypeScript, PostgreSQL"
    );
    updateMetaTag("author", "Parth Shah");
    updateMetaTag("robots", "index, follow");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", "Parth Shah Portfolio", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:creator", "@parthshah_dev");

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Structured Data
    if (structuredData) {
      let script = document.querySelector(
        "#structured-data"
      ) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = "structured-data";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Default structured data for the main page
    if (!structuredData && type === "website") {
      const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Parth Shah",
        jobTitle: "Product Manager",
        description: description,
        url: url,
        image: image,
        sameAs: [
          "https://www.linkedin.com/in/parth-shah-8a041514b/",
          "https://github.com/shahparthsp11",
        ],
        knowsAbout: [
          "Product Management",
          "n8n Automation",
          "Full-Stack Development",
          "Workflow Automation",
          "React",
          "Node.js",
          "TypeScript",
          "JavaScript",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Product Manager",
          description:
            "Technical Product Manager specializing in automation and full-stack development",
        },
        alumniOf: {
          "@type": "Organization",
          name: "Technical Education",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Godhra",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
      };

      let script = document.querySelector(
        "#structured-data"
      ) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = "structured-data";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(defaultStructuredData);
    }
  }, [title, description, image, url, type, structuredData]);

  return null;
};

export default SEO;

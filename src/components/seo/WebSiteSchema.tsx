export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://cas.jkkn.ac.in/#website",
    name: "JKKN College of Arts and Science",
    alternateName: "JKKN CAS",
    url: "https://cas.jkkn.ac.in",
    publisher: {
      "@id": "https://cas.jkkn.ac.in/#organization",
    },
    inLanguage: "en-IN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

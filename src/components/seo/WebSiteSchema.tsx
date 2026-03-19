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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://cas.jkkn.ac.in/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
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

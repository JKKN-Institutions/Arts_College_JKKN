interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  lastReviewed?: string;
  speakable?: string[];
}

export function WebPageSchema({
  name,
  description,
  url,
  lastReviewed,
  speakable,
}: WebPageSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@id": "https://cas.jkkn.ac.in/#website",
    },
    about: {
      "@id": "https://cas.jkkn.ac.in/#organization",
    },
    inLanguage: "en-IN",
  };

  if (lastReviewed) {
    schema.lastReviewed = lastReviewed;
  }

  if (speakable && speakable.length > 0) {
    schema.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: speakable,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

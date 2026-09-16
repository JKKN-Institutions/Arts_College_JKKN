import { ORG_ID, ORG_NAME } from "./entity";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  url: string;
  imageUrl?: string;
}

export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  authorName = "JKKN College of Arts and Science",
  url,
  imageUrl,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished,
    ...(dateModified && { dateModified }),
    url,
    ...(imageUrl && { image: imageUrl }),
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: ORG_NAME,
      logo: {
        "@type": "ImageObject",
        url: "https://cas.jkkn.ac.in/opengraph-image",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

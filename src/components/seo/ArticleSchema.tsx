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
  // Measured on the live site 2026-09-18: 66 of 67 BlogPosting nodes carried no
  // image, because cover_image_url is empty for almost every CMS post. `image`
  // is what Google asks for on an Article, so fall back to the site's own
  // OpenGraph image (a real 200 asset) rather than publishing the property
  // missing. A post with its own cover still wins.
  const image = imageUrl || "https://cas.jkkn.ac.in/opengraph-image";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    // Stable identity, so a post listed elsewhere is not a second article.
    "@id": `${url}#article`,
    headline,
    description,
    datePublished,
    ...(dateModified && { dateModified }),
    url,
    image,
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

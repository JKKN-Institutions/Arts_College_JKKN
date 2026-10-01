import { serializeJsonLd } from '@/lib/careers/schema';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/** JSON-LD script for data that may contain API-provided text (escapes `<`). */
export default function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />;
}

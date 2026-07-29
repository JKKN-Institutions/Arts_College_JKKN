/**
 * Shared blog HTML rendering helpers.
 *
 * Extracted verbatim from `src/app/blog/campus/[slug]/page.tsx` so the live
 * campus blog page and the admin draft-preview page render identical output.
 */

/** Strip dangerous HTML patterns to prevent XSS */
export function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript\s*:/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/on\w+\s*=[^\s>]*/gi, '');
}

/** Extract h2/h3 headings from HTML and inject id attributes for TOC */
export function processContent(
  html: string
): { processedHtml: string; tocItems: { id: string; label: string }[] } {
  if (!html) return { processedHtml: '', tocItems: [] };

  const tocItems: { id: string; label: string }[] = [];
  const seen = new Map<string, number>();

  const processedHtml = html.replace(
    /<h([23])([^>]*)>(.*?)<\/h\1>/gi,
    (_, level: string, attrs: string, inner: string) => {
      const label = inner.replace(/<[^>]+>/g, '').trim();
      const base = label
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      const count = seen.get(base) ?? 0;
      const id = count > 0 ? `${base}-${count}` : base;
      seen.set(base, count + 1);

      tocItems.push({ id, label });

      if (!attrs.includes('id=')) {
        return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
      }
      return `<h${level}${attrs}>${inner}</h${level}>`;
    }
  );

  return { processedHtml, tocItems };
}

/** Estimate reading time from HTML content */
export function calcReadMeta(content: string): { words: number; readTime: number } {
  const text = content.replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return { words, readTime: Math.max(1, Math.ceil(words / 200)) };
}

/**
 * Normalise a post's stored content into render-ready HTML.
 * Mirrors the live campus blog page logic exactly.
 */
export function buildPostHtml(content: string | null, isStructured: boolean) {
  const contentHtml = content ?? '';
  const isHtml = contentHtml.includes('<');

  const rawHtml = isStructured
    ? ''
    : isHtml
    ? contentHtml
    : contentHtml
        .split(/\n\n+/)
        .map((p: string) => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
        .join('');

  const { processedHtml, tocItems } = isStructured
    ? { processedHtml: '', tocItems: [] as { id: string; label: string }[] }
    : processContent(sanitizeHtml(rawHtml));

  const { words, readTime } = calcReadMeta(rawHtml);

  return { processedHtml, tocItems, words, readTime };
}

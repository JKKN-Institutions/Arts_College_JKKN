import sanitizeHtml from 'sanitize-html';

const SAFE_LINK = /^(https:|mailto:|tel:)/i;

/**
 * Sanitise HR-authored job description HTML from MyJKKN.
 * Keeps basic formatting; strips classes/styles/scripts and empty paragraphs;
 * keeps only https/mailto/tel links (others — incl. auto-linked junk like
 * "http://M.Sc" — are unwrapped to text).
 */
export function sanitizeJobDescription(html: string | null | undefined): string {
  if (!html) return '';
  const clean = sanitizeHtml(html, {
    // 'span' must be allowed: unsafe links are transformed to <span>, and sanitize-html
    // mis-closes the next link at the same depth if the transformed tag is discarded.
    // Attribute-less spans are then unwrapped below.
    allowedTags: ['p', 'br', 'strong', 'b', 'em', 'i', 'u', 'ul', 'ol', 'li', 'hr', 'h3', 'h4', 'blockquote', 'a', 'span'],
    allowedAttributes: { a: ['href', 'target', 'rel'] },
    allowedSchemes: ['https', 'mailto', 'tel'],
    allowProtocolRelative: false,
    exclusiveFilter: (frame) => frame.tag === 'p' && !frame.text.trim() && !frame.mediaChildren.length,
    transformTags: {
      h1: 'h3',
      h2: 'h3',
      a: (_tagName, attribs): sanitizeHtml.Tag => {
        const href = attribs.href ?? '';
        if (!SAFE_LINK.test(href)) return { tagName: 'span', attribs: {} };
        return href.toLowerCase().startsWith('https:')
          ? { tagName: 'a', attribs: { href, target: '_blank', rel: 'noopener noreferrer nofollow' } }
          : { tagName: 'a', attribs: { href } };
      },
    },
  });
  return clean.replace(/<\/?span>/g, '');
}

const ENTITIES: Record<string, string> = { '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ' };

/** Plain-text version of a description for card excerpts and meta descriptions. */
export function descriptionToPlainText(html: string | null | undefined, maxLength = 155): string {
  if (!html) return '';
  const spaced = html.replace(/<(br|hr)\s*\/?>|<\/(p|li|h[1-6]|div|blockquote)>/gi, ' ');
  const text = sanitizeHtml(spaced, { allowedTags: [], allowedAttributes: {} })
    .replace(/&(lt|gt|quot|#39|nbsp);/g, (entity) => ENTITIES[entity])
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= maxLength) return text;
  const slice = text.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > maxLength * 0.6 ? slice.slice(0, lastSpace) : slice;
  return `${cut.trimEnd()}…`;
}

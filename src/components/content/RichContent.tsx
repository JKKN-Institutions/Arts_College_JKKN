'use client';

/**
 * RichContent — renders rich-text HTML from the admin editor, replacing any
 * image-slider marker blocks (<div data-image-slider ...></div>) with an
 * interactive <ImageSlider /> carousel. Plain HTML chunks keep the supplied
 * prose className so the existing typography styles still apply.
 *
 * Isomorphic (no DOMParser) — splits the stored HTML string with a regex so it
 * renders identically on the server and client.
 */

import ImageSlider from './ImageSlider';

const SLIDER_RE = /<div\b[^>]*\bdata-image-slider\b[^>]*>\s*<\/div>/gi;

function decodeEntities(s: string): string {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&#34;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

type Segment =
  | { type: 'html'; html: string }
  | { type: 'slider'; images: string[]; autoplay: boolean };

function parseSegments(html: string): Segment[] {
  const segments: Segment[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  SLIDER_RE.lastIndex = 0;

  while ((m = SLIDER_RE.exec(html)) !== null) {
    if (m.index > last) segments.push({ type: 'html', html: html.slice(last, m.index) });

    const tag = m[0];
    const imagesAttr = /data-images="([^"]*)"/i.exec(tag)?.[1] ?? '[]';
    const autoplay = /data-autoplay="true"/i.test(tag);
    let images: string[] = [];
    try {
      const parsed = JSON.parse(decodeEntities(imagesAttr));
      if (Array.isArray(parsed)) images = parsed.filter((u) => typeof u === 'string');
    } catch {
      /* ignore malformed slider */
    }
    segments.push({ type: 'slider', images, autoplay });
    last = SLIDER_RE.lastIndex;
  }

  if (last < html.length) segments.push({ type: 'html', html: html.slice(last) });
  return segments;
}

export default function RichContent({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  const segments = parseSegments(html);

  return (
    <>
      {segments.map((seg, i) =>
        seg.type === 'html' ? (
          seg.html.trim() ? (
            <div key={i} className={className} dangerouslySetInnerHTML={{ __html: seg.html }} />
          ) : null
        ) : (
          <ImageSlider key={i} images={seg.images} autoplay={seg.autoplay} interval={4000} />
        )
      )}
    </>
  );
}

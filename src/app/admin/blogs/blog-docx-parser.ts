// ── DOCX Parsing Helpers for BlogForm ──────────────────────────────────────

import { BlogSections, FaqItem } from './blog-form-types';

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function extractKV(text: string, key: string): string {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escaped + ':\\s*(.+?)(?=\\s+[A-Z][\\w\\s]*:|$)', 'i');
  return text.match(regex)?.[1]?.trim() || '';
}

export function parseFaqs(text: string): FaqItem[] {
  const faqs: FaqItem[] = [];
  const cleaned = text.replace(/\s+/g, ' ').trim();
  const regex = /Q:\s*(.+?)\s+A:\s*(.+?)(?=\s+Q:|$)/g;
  let m;
  while ((m = regex.exec(cleaned)) !== null) {
    if (m[1] && m[2]) faqs.push({ q: m[1].trim(), a: m[2].trim() });
  }
  return faqs;
}

export function parseSectionsFromHtml(
  html: string
): { sections: Partial<BlogSections>; faqs: FaqItem[] } {
  const parsed: Partial<BlogSections> = {};
  let faqs: FaqItem[] = [];

  // Collect all h2 positions
  const h2Re = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  const headings: { index: number; heading: string }[] = [];
  let m;
  while ((m = h2Re.exec(html)) !== null) {
    headings.push({
      index: m.index,
      heading: m[1].replace(/<[^>]+>/g, '').trim().toLowerCase(),
    });
  }

  for (let i = 0; i < headings.length; i++) {
    const startOfContent = html.indexOf('</h2>', headings[i].index) + 5;
    const endOfContent =
      i + 1 < headings.length ? headings[i + 1].index : html.length;
    const content = html.slice(startOfContent, endOfContent).trim();
    const text = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const h = headings[i].heading;

    if (h.includes('what is b') || h.includes('course overview')) {
      parsed.what_is_bed = content;
    } else if (h.includes('eligibility')) {
      parsed.eligibility = content;
    } else if (h.includes('curriculum')) {
      parsed.curriculum = content;
    } else if (h.includes('tnteu') || h.includes('counseling')) {
      parsed.tnteu_counseling = content;
    } else if (h.includes('fee structure')) {
      parsed.fee_structure = content;
    } else if (h.includes('career scope')) {
      parsed.career_scope = content;
    } else if (h.includes('cta banner') || h.includes('mid-content')) {
      parsed.mid_cta_heading =
        extractKV(text, 'Heading') || 'Ready to Start Your Teaching Career?';
      parsed.mid_cta_description = extractKV(text, 'Description') || '';
      parsed.mid_cta_button1 =
        extractKV(text, 'Button 1 Text') || 'Apply Now →';
      parsed.mid_cta_button2 =
        extractKV(text, 'Button 2 Text') || 'Contact Admissions';
    } else if (h.includes('why choose') || h.includes('why jkkn')) {
      parsed.why_jkkn = content;
    } else if (h.includes('admission process')) {
      parsed.admission_process = content;
    } else if (h.includes('frequently asked') || h === 'faq') {
      faqs = parseFaqs(text);
    } else if (h.includes('author')) {
      parsed.author_bio =
        extractKV(text, 'Author Bio') ||
        extractKV(text, 'Bio') ||
        text;
    } else if (h.includes('sidebar')) {
      parsed.sidebar_status = extractKV(text, 'Status') || 'OPEN';
      parsed.sidebar_heading = extractKV(text, 'Heading') || '';
      parsed.sidebar_description = extractKV(text, 'Description') || '';
      parsed.sidebar_phone = extractKV(text, 'Phone') || '';
    }
  }

  return { sections: parsed, faqs };
}

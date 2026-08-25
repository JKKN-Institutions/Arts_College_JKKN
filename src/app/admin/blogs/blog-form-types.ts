// ── Types & Constants for BlogForm ─────────────────────────────────────────

export interface BlogSections {
  what_is_bed: string;
  what_is_bed_title: string;
  eligibility: string;
  eligibility_title: string;
  curriculum: string;
  curriculum_title: string;
  tnteu_counseling: string;
  tnteu_counseling_title: string;
  fee_structure: string;
  fee_structure_title: string;
  career_scope: string;
  career_scope_title: string;
  mid_cta_heading: string;
  mid_cta_description: string;
  mid_cta_button1: string;
  mid_cta_button2: string;
  why_jkkn: string;
  why_jkkn_title: string;
  admission_process: string;
  admission_process_title: string;
  faq_title: string;
  author_bio: string;
  sidebar_status: string;
  sidebar_heading: string;
  sidebar_description: string;
  sidebar_phone: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface BlogFormProps {
  blog?: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author_name: string;
    category: string;
    cover_image_url: string;
    is_published: boolean;
    tags?: string | null;
    read_time?: string | null;
    sections?: (BlogSections & { faqs?: FaqItem[] }) | null;
  };
}

export const DEFAULT_SECTIONS: BlogSections = {
  what_is_bed: '',
  what_is_bed_title: 'What is B.Ed? Course Overview',
  eligibility: '',
  eligibility_title: 'B.Ed Eligibility Criteria',
  curriculum: '',
  curriculum_title: 'B.Ed Course Curriculum',
  tnteu_counseling: '',
  tnteu_counseling_title: 'TNTEU Counseling 2026',
  fee_structure: '',
  fee_structure_title: 'B.Ed Fee Structure',
  career_scope: '',
  career_scope_title: 'Career Scope After B.Ed',
  mid_cta_heading: 'Ready to Start Your Teaching Career?',
  mid_cta_description:
    'Apply for B.Ed 2026 at JKKN College of Education — 100 seats, NCTE approved, TNTEU affiliated, and 90% placement rate.',
  mid_cta_button1: 'Apply Now →',
  mid_cta_button2: 'Contact Admissions',
  why_jkkn: '',
  why_jkkn_title: 'Why Choose JKKN College of Education?',
  admission_process: '',
  admission_process_title: 'Admission Process 2026',
  faq_title: 'Frequently Asked Questions',
  author_bio:
    'The content team at JKKN College of Education creates evidence-based educational content about teacher education, career guidance, and academic pathways. Our faculty includes experienced teacher-educators and researchers affiliated to Tamil Nadu Teachers Education University (TNTEU).',
  sidebar_status: 'OPEN',
  sidebar_heading: 'B.Ed Admission 2026',
  sidebar_description: '100 Seats Available at JKKN College of Education, Komarapalayam',
  sidebar_phone: '+91 9345855001',
};

export const CATEGORIES = [
  'Academic',
  'Achievement',
  'News',
  'Campus Life',
  'Events',
  'B.Ed Admissions',
  'Teaching Careers',
  'General',
  'Other',
];

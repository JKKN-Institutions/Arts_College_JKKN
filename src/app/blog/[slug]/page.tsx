import type { Metadata } from 'next';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import BlogPostContent from './BlogPostContent';

const SITE_URL = 'https://cas.jkkn.ac.in';

// Static blog post metadata map — add entries as new static blog pages are created
const blogMeta: Record<string, { title: string; description: string; date: string }> = {
  'bed-admission-2026-tamil-nadu': {
    title: 'B.Ed Admission 2026 in Tamil Nadu: Eligibility, Process & Key Dates | JKKN College of Education',
    description: 'B.Ed admission guide 2026 — eligibility, TNTEU counseling, fee structure & admission process at JKKN College of Education, near Erode, TN.',
    date: '2026-02-20',
  },
  'top-10-career-options-after-bed-2026': {
    title: 'Top 10 Career Options After B.Ed 2026',
    description: 'Explore top 10 career paths after B.Ed — teaching, education administration, EdTech, counselling and more. Career guidance from JKKN College.',
    date: '2026-02-25',
  },
};

const fallbackMeta = {
  title: 'Blog',
  description: 'Read the latest articles, guides and insights from JKKN College of Arts and Science — admissions, placements, campus life and career guidance.',
  date: '2026-03-01',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = blogMeta[slug] ?? fallbackMeta;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/blog/${slug}`,
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = blogMeta[slug] ?? fallbackMeta;

  return (
    <>
      <ArticleSchema
        headline={meta.title.split(' | ')[0]}
        description={meta.description}
        datePublished={meta.date}
        dateModified={meta.date}
        authorName="JKKN College of Arts and Science"
        url={`${SITE_URL}/blog/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: meta.title.split(' | ')[0], url: `${SITE_URL}/blog/${slug}` },
        ]}
      />
      <BlogPostContent />
    </>
  );
}

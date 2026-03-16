import type { Metadata } from 'next';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import BlogPostContent from './BlogPostContent';

const BLOG_TITLE =
  'B.Ed Admission 2026 in Tamil Nadu: Eligibility, Process & Key Dates | JKKN College of Education';
const BLOG_DESCRIPTION =
  'B.Ed admission guide 2026 — eligibility, TNTEU counseling, fee structure & admission process at JKKN College of Education, near Erode, TN.';
const BLOG_URL = 'https://cas.jkkn.ac.in/blog/bed-admission-2026-tamil-nadu';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    openGraph: {
      title: BLOG_TITLE,
      description: BLOG_DESCRIPTION,
      url: BLOG_URL,
    },
    alternates: {
      canonical: BLOG_URL,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params per Next.js 16 convention
  await params;

  return (
    <>
      <ArticleSchema
        headline="B.Ed Admission 2026 in Tamil Nadu: Eligibility, Process & Key Dates"
        description={BLOG_DESCRIPTION}
        datePublished="2026-02-20"
        dateModified="2026-02-20"
        authorName="JKKN Education Team"
        url={BLOG_URL}
      />
      <BlogPostContent />
    </>
  );
}

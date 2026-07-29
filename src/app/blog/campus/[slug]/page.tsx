import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import { ScrollToTop } from '@/components/ScrollToTop';
import CampusBlogContent from './CampusBlogContent';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { buildPostHtml } from '@/lib/blog-render';

const SITE_URL = 'https://cas.jkkn.ac.in';

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: post } = await supabase
    .from('blogs')
    .select('title, excerpt, meta_description, cover_image_url')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!post) {
    return { title: 'Blog Post Not Found' };
  }

  const description =
    post.meta_description ?? post.excerpt?.slice(0, 155) ?? `${post.title} — JKKN College of Arts and Science Blog`;

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `${SITE_URL}/blog/campus/${slug}`,
      type: 'article',
      ...(post.cover_image_url && { images: [{ url: post.cover_image_url }] }),
    },
    alternates: {
      canonical: `${SITE_URL}/blog/campus/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const { createClient: createSupabaseClient } = await import('@supabase/supabase-js');
  const supabase = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'arts-science';
  const { data } = await supabase
    .from('blogs')
    .select('slug')
    .eq('college_id', collegeId)
    .eq('is_published', true);
  return (data ?? []).map((post) => ({ slug: post.slug }));
}

export default async function CampusBlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const { data: post } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!post) notFound();

  const [{ data: popularPosts }, { data: relatedPosts }, { data: initialComments }] = await Promise.all([
    // Popular: other recent published blogs
    supabase
      .from('blogs')
      .select('id, title, slug, category, published_at, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
    // Related: same category, exclude current
    supabase
      .from('blogs')
      .select(
        'id, title, slug, category, excerpt, cover_image_url, published_at, created_at'
      )
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .eq('category', post.category ?? 'General')
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
    // Approved comments for this post
    supabase
      .from('blog_comments')
      .select('id, author_name, content, created_at')
      .eq('blog_id', post.id)
      .eq('status', 'approved')
      .order('created_at', { ascending: true }),
  ]);

  // Structured posts (new format with sections JSONB) skip HTML processing
  const { processedHtml, tocItems, words, readTime } = buildPostHtml(post.content, !!post.sections);

  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema
        headline={post.title}
        description={post.meta_description ?? post.excerpt ?? post.title}
        datePublished={post.published_at ?? post.created_at}
        dateModified={post.updated_at ?? post.published_at ?? post.created_at}
        url={`${SITE_URL}/blog/campus/${slug}`}
        imageUrl={post.cover_image_url}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: post.title, url: `${SITE_URL}/blog/campus/${slug}` },
        ]}
      />
      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts ?? []}
        relatedPosts={relatedPosts ?? []}
        initialComments={initialComments ?? []}
      />
      <ScrollToTop />
    </div>
  );
}

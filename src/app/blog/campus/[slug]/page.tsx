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
    .select('title, excerpt, cover_image_url')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!post) {
    return { title: 'Blog Post Not Found' };
  }

  const description =
    post.excerpt?.slice(0, 155) ?? `${post.title} — JKKN College of Arts and Science Blog`;

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

/**
 * DEP-38, 2026-08-08. generateStaticParams was REMOVED from this route. That, together with the
 * root src/app/loading.tsx deleted in e8c1dfa, is what makes an invented slug return a real 404
 * instead of HTTP 200.
 *
 * Two faults were stacked here, and only the second was obvious:
 *
 * 1. PRERENDERING A ROUTE THAT READS COOKIES. generateMetadata and the page body below both call
 *    createClient() from @/lib/supabase/server, which reads cookies - a dynamic API. Asking Next
 *    to prerender that route is a contradiction, and it resolves it by throwing DYNAMIC_SERVER_USAGE.
 *    Proven on the sister site: Vercel's runtime error log for education showed that exact digest
 *    on /blog/campus/[slug], 168 occurrences, first seen 2026-06-16 - the route had been broken
 *    for nearly two months and had never once served a campus post.
 * 2. THE ROOT loading.tsx wrapped this route in a Suspense boundary, so notFound() streamed inside
 *    it and the response status stayed 200 while the body said not-found. That is why this site
 *    answered 200 rather than 500 - a softer symptom of the same defect.
 *
 * WHAT NOT TO DO, recorded because it was tried and was wrong: dynamicParams = false. It does not
 * fix the status, and it only accepts slugs known at BUILD time - so a post published in the CMS
 * would 404 until someone redeployed, defeating the entire point of a CMS-driven blog.
 *
 * Removing generateStaticParams makes this route honestly dynamic, which is exactly the shape
 * dental, pharmacy and nursing already have - and is why those three always answered 404
 * correctly. revalidate = 300 stays, so a newly published post is reachable without a deploy.
 */

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

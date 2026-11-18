import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import { ScrollToTop } from '@/components/ScrollToTop';
import CampusBlogContent from './CampusBlogContent';
import { inlineCtaFor } from '@/lib/blog-inline-cta';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { buildPostHtml } from '@/lib/blog-render';
import { blogFromMyJkkn, blogSiteKey, getPost, listPosts } from '@/lib/blog/myjkkn';
import { MYJKKN_URL } from '@/lib/careers/config';

const SITE_URL = 'https://cas.jkkn.ac.in';

export const revalidate = 300;

type PageProps = {
  params: Promise<{ slug: string }>;
  /** ?preview=<token>: the Preview link in MyJKKN opens a draft (BLOG_SOURCE=myjkkn only). */
  searchParams: Promise<{ preview?: string }>;
};

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (blogFromMyJkkn()) {
    const { preview } = await searchParams;
    const detail = await getPost(slug, preview);
    if (!detail) return { title: 'Blog Post Not Found' };
    const { post } = detail;
    // The SEO fields are filled in MyJKKN; where the writer left one empty, MyJKKN has
    // already fallen back to the title, excerpt, featured image and the post's own address.
    const description =
      post.seo.description ?? `${post.title} — JKKN College of Arts and Science Blog`;
    return {
      // absolute: a written SEO title is the whole title, so the layout's suffix is not added to it.
      title: post.seo.title === post.title ? post.title : { absolute: post.seo.title },
      description,
      ...(post.seo.keywords.length > 0 && { keywords: post.seo.keywords }),
      openGraph: {
        title: post.seo.title,
        description,
        url: `${SITE_URL}/blog/campus/${slug}`,
        type: 'article',
        ...(post.seo.og_image && { images: [{ url: post.seo.og_image }] }),
      },
      alternates: { canonical: post.seo.canonical_url },
      ...((detail.preview || post.seo.noindex) && {
        robots: { index: false, follow: !detail.preview },
      }),
    };
  }

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

/** The post page when posts come from MyJKKN (BLOG_SOURCE=myjkkn). Same markup as below. */
async function MyJkknBlogPost({ slug, previewToken }: { slug: string; previewToken?: string }) {
  const detail = await getPost(slug, previewToken);
  if (!detail) notFound();
  const { post, related, comments, preview } = detail;

  const popularPosts = (await listPosts(4)).posts.filter((p) => p.slug !== slug).slice(0, 3);
  const { processedHtml, tocItems, words, readTime } = buildPostHtml(post.content, false);

  return (
    <div className="min-h-screen bg-white">
      {preview ? (
        <div className="bg-[#ffde59] border-b border-amber-300">
          <p className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 text-sm font-semibold text-[#002309]">
            Draft Preview — this post is not published yet and is hidden from search engines.
          </p>
        </div>
      ) : (
        <>
          <ArticleSchema
            headline={post.title}
            description={post.seo.description ?? post.excerpt ?? post.title}
            datePublished={post.published_at ?? post.created_at}
            dateModified={post.updated_at}
            url={`${SITE_URL}/blog/campus/${slug}`}
            imageUrl={post.cover_image_url ?? undefined}
          />
          <BreadcrumbSchema
            items={[
              { name: 'Home', url: SITE_URL },
              { name: 'Blog', url: `${SITE_URL}/blog` },
              { name: post.title, url: `${SITE_URL}/blog/campus/${slug}` },
            ]}
          />
        </>
      )}
      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts}
        relatedPosts={related}
        initialComments={comments}
        commentsVia={{ api: `${MYJKKN_URL}/api/public/blog/comments`, site: blogSiteKey() }}
        commentFormOpen={post.allow_comments && !preview}
        inlineCta={preview ? null : inlineCtaFor(slug, processedHtml)}
      />
      <ScrollToTop />
    </div>
  );
}

export default async function CampusBlogPost({ params, searchParams }: PageProps) {
  const { slug } = await params;

  if (blogFromMyJkkn()) {
    const { preview } = await searchParams;
    return <MyJkknBlogPost slug={slug} previewToken={preview} />;
  }

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
        /* Enquiry box inside every post (lead option 2, 2026-11-05) - place from lib/blog-inline-cta.ts. */
        inlineCta={inlineCtaFor(slug, processedHtml)}
      />
      <ScrollToTop />
    </div>
  );
}

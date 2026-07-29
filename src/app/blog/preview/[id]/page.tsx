import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { ScrollToTop } from '@/components/ScrollToTop';
import CampusBlogContent from '../../campus/[slug]/CampusBlogContent';
import { buildPostHtml } from '@/lib/blog-render';

// Never cached, never prerendered — always reflects the latest draft.
export const dynamic = 'force-dynamic';

/** The blog row as this page consumes it (both read paths return the full row). */
type PreviewPost = {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  author_name: string | null;
  cover_image_url: string | null;
  excerpt: string | null;
  published_at: string | null;
  created_at: string;
  tags?: string | null;
  read_time?: string | null;
  content: string | null;
  sections: unknown;
  college_id: string;
  preview_token?: string;
};

// Keep drafts out of Google entirely.
export const metadata: Metadata = {
  title: 'Draft Preview',
  robots: { index: false, follow: false, nocache: true },
};

export default async function BlogDraftPreviewPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const { id } = await params;
  const { token } = await searchParams;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: { user } } = await supabase.auth.getUser();
  const isAdmin = !!user;

  // Two ways in — this route lives outside /admin, so middleware does not cover it:
  //   1. the post's own share token in the URL (works for anyone, no login).
  //      RLS hides unpublished rows from anon, so the token is checked inside a
  //      SECURITY DEFINER function which returns the row only on an exact match.
  //   2. a logged-in admin session, read normally through RLS.
  let post: PreviewPost | null = null;

  if (token) {
    const { data } = await supabase.rpc('get_blog_preview', { p_id: id, p_token: token });
    post = ((Array.isArray(data) ? data[0] : data) ?? null) as PreviewPost | null;
  }

  if (!post && isAdmin) {
    // No is_published filter — that is the whole point of preview.
    const { data } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .eq('college_id', collegeId)
      .maybeSingle();
    post = data ?? null;
  }

  if (!post || post.college_id !== collegeId) notFound();

  // Never ship the share secret into the page's client payload.
  delete post.preview_token;

  const [{ data: popularPosts }, { data: relatedPosts }] = await Promise.all([
    supabase
      .from('blogs')
      .select('id, title, slug, category, published_at, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
    supabase
      .from('blogs')
      .select('id, title, slug, category, excerpt, cover_image_url, published_at, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .eq('category', post.category ?? 'General')
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
  ]);

  const { processedHtml, tocItems, words, readTime } = buildPostHtml(post.content, !!post.sections);

  return (
    <div className="min-h-screen bg-white">
      {/* Draft Preview banner */}
      <div className="bg-[#ffde59] border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 flex-wrap">
          <p className="text-sm font-semibold text-[#002309] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#002309] flex-shrink-0" />
            Draft Preview — this post is not published yet and is hidden from search engines.
          </p>
          {isAdmin && (
            <Link
              href={`/admin/blogs/${post.id}`}
              className="text-xs font-semibold text-[#002309] underline underline-offset-2 hover:no-underline"
            >
              Edit this post
            </Link>
          )}
        </div>
      </div>

      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts ?? []}
        relatedPosts={relatedPosts ?? []}
        initialComments={[]}
      />
      <ScrollToTop />
    </div>
  );
}

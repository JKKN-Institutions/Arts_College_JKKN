import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { ScrollToTop } from '@/components/ScrollToTop';
import CampusBlogContent from '../../campus/[slug]/CampusBlogContent';
import { buildPostHtml } from '@/lib/blog-render';
import { verifyPreviewToken } from '@/lib/preview-token';

// Never cached, never prerendered — always reflects the latest draft.
export const dynamic = 'force-dynamic';

/**
 * Service-role Supabase client, or null when SUPABASE_SERVICE_ROLE_KEY is unset.
 * Only ever used after a share token has been verified.
 */
function serviceRoleClient() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) return null;
  return createSupabaseClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

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
  searchParams: Promise<{ t?: string }>;
}) {
  const { id } = await params;
  const { t } = await searchParams;
  const supabase = await createClient();

  // Two ways in — this route lives outside /admin, so middleware does not cover it:
  //   1. a valid share token in the URL (works for anyone, no login), or
  //   2. a logged-in admin session.
  const hasValidToken = verifyPreviewToken(id, t);
  const { data: { user } } = await supabase.auth.getUser();
  const isAdmin = !!user;
  if (!hasValidToken && !isAdmin) notFound();

  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  // A share-token visitor is anonymous, so RLS may hide unpublished rows from
  // them. Read through the service role for that case when the key is set —
  // the token has already been verified above. Falls back to the normal client
  // (which is enough if the SELECT policy is not restricted by is_published).
  const db = (!isAdmin && hasValidToken && serviceRoleClient()) || supabase;

  // No is_published filter — that is the whole point of preview.
  const { data: post } = await db
    .from('blogs')
    .select('*')
    .eq('id', id)
    .eq('college_id', collegeId)
    .single();

  if (!post) notFound();

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

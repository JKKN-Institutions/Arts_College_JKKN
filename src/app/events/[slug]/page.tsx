import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { CalendarDays, ArrowLeft, User } from "lucide-react";
import { EventSchema } from "@/components/seo/EventSchema";

const SITE_URL = "https://cas.jkkn.ac.in";

export const revalidate = 60;

/** Strip dangerous HTML patterns to prevent XSS */
function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript\s*:/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/on\w+\s*=[^\s>]*/gi, '');
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? "arts";

  const { data: post } = await supabase
    .from("blogs")
    .select("title, excerpt, meta_description, cover_image_url")
    .eq("slug", slug)
    .eq("college_id", collegeId)
    .eq("is_published", true)
    .eq("category", "Events")
    .single();

  if (!post) {
    return { title: "Event Not Found" };
  }

  const description =
    post.meta_description ?? post.excerpt?.slice(0, 155) ?? `${post.title} at JKKN College of Arts and Science`;

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `${SITE_URL}/events/${slug}`,
      type: "article",
      ...(post.cover_image_url && { images: [{ url: post.cover_image_url }] }),
    },
    alternates: {
      canonical: `${SITE_URL}/events/${slug}`,
    },
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? "arts";

  const { data: post } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("college_id", collegeId)
    .eq("is_published", true)
    .eq("category", "Events")
    .single();

  if (!post) notFound();

  const displayDate = post.published_at ?? post.created_at;

  const formattedDate = new Date(displayDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Process content — support HTML or plain text
  const contentHtml = post.content ?? "";
  const isHtml = contentHtml.includes("<");
  const processedContent = isHtml
    ? sanitizeHtml(contentHtml)
    : contentHtml
        .split(/\n\n+/)
        .map((p: string) => `<p>${p.replace(/\n/g, "<br/>")}</p>`)
        .join("");

  return (
    <>
      <EventSchema
        name={post.title}
        description={post.excerpt ?? post.title}
        startDate={displayDate}
        imageUrl={post.cover_image_url}
        url={`${SITE_URL}/events/${slug}`}
      />
      <main className="min-h-screen bg-[#FBFBEE]">
        {/* Hero Image — Full Width */}
        {post.cover_image_url && (
          <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] max-h-[500px]">
            <Image
              src={post.cover_image_url}
              alt={post.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              unoptimized
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Title overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
              <div className="max-w-5xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
                  {post.title}
                </h1>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
                    <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>{formattedDate}</span>
                  </div>
                  {post.author_name && (
                    <div className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>{post.author_name}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* If no image — text-only hero */}
        {!post.cover_image_url && (
          <section className="bg-gradient-to-br from-[#0b6d41] to-[#004d28] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-green-100 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 flex-shrink-0" />
                  <span>{formattedDate}</span>
                </div>
                {post.author_name && (
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 flex-shrink-0" />
                    <span>{post.author_name}</span>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Event Content — Rich HTML */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 lg:p-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#002309] mb-6">
              About This Event
            </h2>
            <div
              className="prose prose-lg max-w-4xl prose-headings:text-[#002309] prose-a:text-[#0b6d41] prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </div>
        </section>

        {/* Share This Event */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-[#002309]">Share This Event</h3>
                <p className="text-sm text-gray-500 mt-0.5">Spread the word about this event</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${SITE_URL}/events/${slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1877F2]/10 text-[#1877F2] text-sm font-semibold hover:bg-[#1877F2]/20 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${SITE_URL}/events/${slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] text-sm font-semibold hover:bg-[#0A66C2]/20 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + SITE_URL + "/events/" + slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/10 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/20 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Events */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b6d41] hover:text-[#004d28] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Events
          </Link>
        </div>
      </main>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { CalendarDays, ArrowLeft, MapPin } from "lucide-react";
import { EventSchema } from "@/components/seo/EventSchema";
import EventImageLightbox from "./EventImageLightbox";
import RichContent from "@/components/content/RichContent";

const SITE_URL = "https://cas.jkkn.ac.in";

export const revalidate = 60;

// Strip HTML tags for plain-text contexts (meta description, schema)
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? "arts-science";

  const { data: event } = await supabase
    .from("events")
    .select("title, description, image_url")
    .eq("slug", slug)
    .eq("college_id", collegeId)
    .eq("is_published", true)
    .single();

  if (!event) {
    return { title: "Event Not Found" };
  }

  const plainDescription = event.description ? stripHtml(event.description) : "";
  const description = plainDescription
    ? plainDescription.slice(0, 155)
    : `${event.title} at JKKN College of Arts and Science`;

  return {
    title: event.title,
    description,
    openGraph: {
      title: event.title,
      description,
      url: `${SITE_URL}/events/${slug}`,
      type: "article",
      ...(event.image_url && { images: [{ url: event.image_url }] }),
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
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? "arts-science";

  const { data: event } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .eq("college_id", collegeId)
    .eq("is_published", true)
    .single();

  if (!event) notFound();

  const displayDate = event.event_date ?? event.created_at;

  const formattedDate = new Date(displayDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <EventSchema
        name={event.title}
        description={event.description ? stripHtml(event.description) : event.title}
        startDate={displayDate}
        imageUrl={event.image_url}
        url={`${SITE_URL}/events/${slug}`}
      />
      <main className="min-h-screen bg-[#FBFBEE]">

        {/* Green Banner — Title + Date */}
        <section className="bg-[#0b6d41] py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-200 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Events
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-5">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-green-100 text-sm sm:text-base">
                <CalendarDays className="w-5 h-5 flex-shrink-0" />
                <span>{formattedDate}</span>
              </div>
              {event.venue && (
                <div className="flex items-center gap-2 text-green-100 text-sm sm:text-base">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>{event.venue}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Event Image — Below Banner */}
        {event.image_url && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <EventImageLightbox src={event.image_url} alt={event.title} />
          </div>
        )}

        {/* About This Event */}
        {event.description && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 lg:p-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0b6d41] mb-6">
                About This Event
              </h2>
              <RichContent
                html={event.description}
                className="event-content text-gray-700"
              />
            </div>
          </section>
        )}

        {/* Rich-text description styling — mirrors the admin editor output */}
        <style>{`
          .event-content h1 { font-size: 1.75rem; font-weight: 700; margin: 1.5rem 0 0.75rem; color: #111827; line-height: 1.3; }
          .event-content h2 { font-size: 1.4rem; font-weight: 700; margin: 1.75rem 0 0.6rem; color: #1f2937; line-height: 1.35; }
          .event-content h3 { font-size: 1.15rem; font-weight: 600; margin: 1.25rem 0 0.5rem; color: #374151; }
          .event-content p { margin: 0.75rem 0; line-height: 1.8; color: #374151; font-size: 1rem; }
          .event-content ul { list-style-type: disc; padding-left: 1.6rem; margin: 0.75rem 0; }
          .event-content ol { list-style-type: decimal; padding-left: 1.6rem; margin: 0.75rem 0; }
          .event-content li { margin: 0.35rem 0; line-height: 1.75; color: #374151; }
          .event-content blockquote { border-left: 3px solid #0b6d41; padding: 0.5rem 0 0.5rem 1rem; color: #6b7280; margin: 1.25rem 0; font-style: italic; background: #f9fafb; border-radius: 0 8px 8px 0; }
          .event-content code { background: #f3f4f6; border-radius: 4px; padding: 0.1em 0.4em; font-size: 0.875em; font-family: monospace; color: #1f2937; }
          .event-content pre { background: #1f2937; color: #f9fafb; border-radius: 10px; padding: 1.25rem; overflow-x: auto; margin: 1.25rem 0; }
          .event-content pre code { background: none; color: inherit; padding: 0; }
          .event-content hr { border: none; border-top: 1px solid #e5e7eb; margin: 2rem 0; }
          .event-content mark { background: #fef08a; border-radius: 2px; padding: 0 2px; }
          .event-content a { color: #2563eb; text-decoration: underline; }
          .event-content a:hover { color: #1d4ed8; }
          .event-content img { max-width: 100%; height: auto; border-radius: 0.75rem; margin: 1.25rem 0; }
          .event-content img[data-align="center"] { display: block; margin-left: auto; margin-right: auto; }
          .event-content img[data-align="right"] { display: block; margin-left: auto; margin-right: 0; }
          .event-content strong { font-weight: 700; color: #111827; }
          .event-content em { font-style: italic; }
          .event-content table { width: 100%; border-collapse: collapse; margin: 1.25rem 0; font-size: 0.9rem; }
          .event-content th { background: #f3f4f6; text-align: left; padding: 0.6rem 0.9rem; font-weight: 600; border: 1px solid #e5e7eb; color: #374151; }
          .event-content td { padding: 0.6rem 0.9rem; border: 1px solid #e5e7eb; color: #374151; }
          .event-content tr:nth-child(even) td { background: #f9fafb; }
          .event-content :first-child { margin-top: 0; }
          .event-content :last-child { margin-bottom: 0; }
        `}</style>



      </main>
    </>
  );
}

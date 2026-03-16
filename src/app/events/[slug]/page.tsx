import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { EventSchema } from "@/components/seo/EventSchema";

const SITE_URL = "https://cas.jkkn.ac.in";

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

  const description =
    event.description?.slice(0, 155) ?? `${event.title} at JKKN College of Arts and Science`;

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

  const formattedDate = event.event_date
    ? new Date(event.event_date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <>
      <EventSchema
        name={event.title}
        description={event.description ?? ""}
        startDate={event.event_date ?? event.created_at}
        location={event.venue}
        imageUrl={event.image_url}
        url={`${SITE_URL}/events/${slug}`}
      />
      <main className="min-h-screen bg-[#FBFBEE]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#006837] to-[#004d29] py-16 px-8 md:px-16 lg:px-24">
          <div className="container mx-auto max-w-4xl">
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-green-100 text-sm">
              {formattedDate && (
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  <span>{formattedDate}</span>
                </div>
              )}
              {event.event_time && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{event.event_time}</span>
                </div>
              )}
              {event.venue && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{event.venue}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-8 md:px-16 lg:px-24">
          <div className="container mx-auto max-w-4xl">
            {event.image_url && (
              <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src={event.image_url}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-[#006837] mb-6">
                About This Event
              </h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line break-words">
                {event.description}
              </div>
            </div>

          </div>
        </section>
      </main>
     
    </>
  );
}

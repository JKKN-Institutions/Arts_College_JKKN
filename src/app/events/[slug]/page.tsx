import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { CalendarDays, Clock, MapPin, ArrowLeft, Images } from "lucide-react";
import { EventSchema } from "@/components/seo/EventSchema";
import EventGallery from "./EventGallery";

const SITE_URL = "https://cas.jkkn.ac.in";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? "arts";

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
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? "arts";

  const { data: event } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .eq("college_id", collegeId)
    .eq("is_published", true)
    .single();

  if (!event) notFound();

  // Fetch gallery images from linked album
  let galleryImages: { id: string; image_url: string; caption: string | null }[] = [];

  if (event.gallery_album_id) {
    const { data: images } = await supabase
      .from("gallery_images")
      .select("id, image_url, caption")
      .eq("album_id", event.gallery_album_id)
      .order("display_order", { ascending: true });

    galleryImages = images ?? [];
  }

  const formattedDate = event.event_date
    ? new Date(event.event_date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const formattedDay = event.event_date
    ? new Date(event.event_date).toLocaleDateString("en-IN", { weekday: "long" })
    : null;

  // Split description into paragraphs
  const descParagraphs = (event.description ?? "")
    .split(/\n\n|\n/)
    .filter((p: string) => p.trim());

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
        {/* Hero Image — Full Width */}
        {event.image_url && (
          <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] max-h-[500px]">
            <Image
              src={event.image_url}
              alt={event.title}
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
                  {event.title}
                </h1>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  {formattedDate && (
                    <div className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
                      <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>{formattedDate}</span>
                    </div>
                  )}
                  {event.event_time && (
                    <div className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>{event.event_time}</span>
                    </div>
                  )}
                  {event.venue && (
                    <div className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>{event.venue}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* If no image — text-only hero */}
        {!event.image_url && (
          <section className="bg-gradient-to-br from-[#0b6d41] to-[#004d28] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-green-100 text-sm sm:text-base">
                {formattedDate && (
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 flex-shrink-0" />
                    <span>{formattedDate}</span>
                  </div>
                )}
                {event.venue && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <span>{event.venue}</span>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* About This Event — Full Width */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 lg:p-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#002309] mb-6">
              About This Event
            </h2>
            <div className="space-y-4 max-w-4xl">
              {descParagraphs.map((para: string, i: number) => (
                <p key={i} className="text-gray-600 leading-relaxed text-[15px] sm:text-base lg:text-[17px] lg:leading-[1.8]">
                  {para.trim()}
                </p>
              ))}
            </div>
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
                  href={`https://wa.me/?text=${encodeURIComponent(event.title + " " + SITE_URL + "/events/" + slug)}`}
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

        {/* Event Gallery — Full Width */}
        {galleryImages.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#0b6d41]/10 rounded-xl flex items-center justify-center">
                  <Images className="w-5 h-5 text-[#0b6d41]" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#002309]">Event Gallery</h2>
                  <p className="text-sm text-gray-500">{galleryImages.length} photos from the event</p>
                </div>
              </div>
              <EventGallery images={galleryImages} eventTitle={event.title} />
            </div>
          </section>
        )}

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

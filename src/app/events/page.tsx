import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Events",
  description:
    "Stay updated with the latest events, cultural fests, seminars, and workshops at JKKN College of Arts and Science.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/events",
  },
  openGraph: {
    title: "Events | JKKN College of Arts and Science",
    description:
      "Stay updated with the latest events, cultural fests, seminars, and workshops at JKKN College of Arts and Science.",
    url: "https://cas.jkkn.ac.in/events",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

interface Event {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  event_date: string;
  venue: string | null;
  image_url: string | null;
}

export default async function EventsPage() {
  const supabase = await createClient();

  const { data: events } = await supabase
    .from("events")
    .select("id, title, slug, description, event_date, venue, image_url")
    .eq("college_id", siteConfig.id)
    .eq("is_published", true)
    .order("event_date", { ascending: false })
    .returns<Event[]>();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Events", url: "https://cas.jkkn.ac.in/events" },
        ]}
      />

      <div className="bg-[#fbfbee] min-h-screen">
        {/* Page Header */}
        <section className="bg-[#0b6d41] py-14 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[#ffde59] text-sm font-semibold uppercase tracking-widest mb-3">
              Campus Life
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Events &amp; Activities
            </h1>
            <p className="text-green-100 max-w-2xl mx-auto text-base sm:text-lg">
              Seminars, cultural fests, workshops, and guest lectures — explore
              what&apos;s happening on campus at JKKN College of Arts and Science.
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          {events && events.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden group flex flex-col"
                >
                  {/* Event Image */}
                  <div className="relative w-full h-48 bg-gray-100">
                    {event.image_url ? (
                      <Image
                        src={event.image_url}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-green-50">
                        <CalendarDays className="w-12 h-12 text-[#0b6d41] opacity-30" />
                      </div>
                    )}
                  </div>

                  {/* Event Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-[#0b6d41] font-medium mb-2">
                      <CalendarDays className="w-4 h-4 flex-shrink-0" />
                      <span>
                        {new Date(event.event_date).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-base font-bold text-gray-800 group-hover:text-[#0b6d41] transition-colors mb-2 line-clamp-2">
                      {event.title}
                    </h2>

                    {/* Venue */}
                    {event.venue && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="line-clamp-1">{event.venue}</span>
                      </div>
                    )}

                    {/* Description */}
                    {event.description && (
                      <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-1">
                        {event.description}
                      </p>
                    )}

                    {/* Read More */}
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-[#0b6d41] group-hover:gap-2.5 transition-all mt-auto">
                      View Event
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-5">
                <CalendarDays className="w-10 h-10 text-[#0b6d41] opacity-50" />
              </div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                No Events at This Time
              </h2>
              <p className="text-gray-500 max-w-sm">
                We&apos;re planning upcoming events. Check back soon for seminars,
                cultural programmes, and campus activities.
              </p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

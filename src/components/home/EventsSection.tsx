import { createClient } from '@/lib/supabase/server';
import { siteConfig } from '@/lib/site-config';
import Link from 'next/link';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

export default async function EventsSection() {
  const supabase = await createClient();
  const { data: events } = await supabase
    .from('events')
    .select('id, title, slug, description, event_date, event_time, venue, image_url')
    .eq('college_id', siteConfig.id)
    .eq('is_published', true)
    .order('event_date', { ascending: false })
    .limit(6);

  if (!events || events.length === 0) return null;

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-[#0b6d41] text-[14px] font-semibold leading-[20px] tracking-wide uppercase mb-4">
            EVENTS
          </div>
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold tracking-[-0.75px] lg:tracking-[-0.9px] text-[#0b6d41] mb-6">
            Campus Events &amp; Activities
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[29.25px] font-normal text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest events, programs, and activities happening at our campus
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev) => (
            <Link
              key={ev.id}
              href={`/events/${ev.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              {ev.image_url ? (
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={ev.image_url}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="aspect-[16/9] bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <CalendarDays className="w-12 h-12 text-[#0b6d41]/40" />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3 group-hover:text-[#0b6d41] transition line-clamp-2">
                  {ev.title}
                </h3>
                <div className="flex flex-col gap-1.5 mb-3">
                  <div className="flex items-center gap-2 text-[13px] text-gray-500">
                    <CalendarDays className="w-4 h-4 text-[#0b6d41] flex-shrink-0" />
                    <span>{formatDate(ev.event_date)}</span>
                    {ev.event_time && (
                      <>
                        <Clock className="w-4 h-4 text-[#0b6d41] flex-shrink-0 ml-1" />
                        <span>{ev.event_time}</span>
                      </>
                    )}
                  </div>
                  {ev.venue && (
                    <div className="flex items-center gap-2 text-[13px] text-gray-500">
                      <MapPin className="w-4 h-4 text-[#0b6d41] flex-shrink-0" />
                      <span className="line-clamp-1">{ev.venue}</span>
                    </div>
                  )}
                </div>
                {ev.description && (
                  <p className="text-[14px] leading-[20px] text-gray-600 line-clamp-2">
                    {ev.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { createClient } from '@/lib/supabase/server';
import { siteConfig } from '@/lib/site-config';
import EventsCarousel from './EventsCarousel';

export default async function EventsSection() {
  const supabase = await createClient();
  const { data: events } = await supabase
    .from('events')
    .select('id, title, slug, description, image_url, event_date, created_at')
    .eq('college_id', siteConfig.id)
    .eq('is_published', true)
    .order('event_date', { ascending: false, nullsFirst: false })
    .limit(100);

  if (!events || events.length === 0) return null;

  return (
    <section id="events-section" className="py-16 md:py-24 bg-white">
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

        <EventsCarousel events={events} />
      </div>
    </section>
  );
}

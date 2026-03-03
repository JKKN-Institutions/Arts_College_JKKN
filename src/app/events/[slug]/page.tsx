import { createClient } from '@/lib/supabase/server';
import { siteConfig } from '@/lib/site-config';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock, MapPin } from 'lucide-react';

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: event } = await supabase
    .from('events')
    .select('id, title, description, event_date, event_time, venue, image_url')
    .eq('college_id', siteConfig.id)
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (!event) notFound();

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <main className="min-h-screen bg-[#fbfbee]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#0b6d41] mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {event.image_url && (
          <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/7]">
            <img
              src={event.image_url}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h1 className="text-[28px] sm:text-[36px] leading-[36px] sm:leading-[44px] font-bold tracking-[-0.75px] text-[#0b6d41] mb-6">
            {event.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-gray-100">
            <div className="flex items-center gap-2 text-[14px] text-gray-600">
              <CalendarDays className="w-5 h-5 text-[#0b6d41]" />
              <span>{formatDate(event.event_date)}</span>
            </div>
            {event.event_time && (
              <div className="flex items-center gap-2 text-[14px] text-gray-600">
                <Clock className="w-5 h-5 text-[#0b6d41]" />
                <span>{event.event_time}</span>
              </div>
            )}
            {event.venue && (
              <div className="flex items-center gap-2 text-[14px] text-gray-600">
                <MapPin className="w-5 h-5 text-[#0b6d41]" />
                <span>{event.venue}</span>
              </div>
            )}
          </div>

          {event.description && (
            <div className="text-[16px] leading-[28px] text-gray-700 whitespace-pre-wrap">
              {event.description}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

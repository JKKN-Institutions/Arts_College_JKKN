'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  event_date: string | null;
  created_at: string;
}

interface EventsCarouselProps {
  events: EventItem[];
}

const ITEMS_PER_PAGE = 3;

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function EventsCarousel({ events }: EventsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);

  function prev() {
    setCurrent((c) => (c === 0 ? totalPages - 1 : c - 1));
  }

  function next() {
    setCurrent((c) => (c === totalPages - 1 ? 0 : c + 1));
  }

  const visibleEvents = events.slice(
    current * ITEMS_PER_PAGE,
    current * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <div>
      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleEvents.map((ev) => {
          const displayDate = ev.event_date ?? ev.created_at;
          return (
            <Link
              key={ev.id}
              href={`/events/${ev.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              {ev.image_url ? (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={ev.image_url}
                    alt={ev.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="aspect-[16/9] bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <CalendarDays className="w-12 h-12 text-[#0b6d41]/40" />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-[18px] leading-[28px] font-bold tracking-[-0.45px] text-gray-900 mb-3 group-hover:text-[#0b6d41] transition line-clamp-2">
                  {ev.title}
                </h3>
                <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-3">
                  <CalendarDays className="w-4 h-4 text-[#0b6d41] flex-shrink-0" />
                  <span>{formatDate(displayDate)}</span>
                </div>
                {ev.description && (
                  <p className="text-[14px] leading-[20px] text-gray-600 line-clamp-2">
                    {ev.description}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Arrows + Dots */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-[#0b6d41] hover:text-white hover:border-[#0b6d41] transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${
                  i === current
                    ? 'w-6 h-3 bg-[#0b6d41]'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-[#0b6d41] hover:text-white hover:border-[#0b6d41] transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

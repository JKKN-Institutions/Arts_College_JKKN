import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import Link from 'next/link';
import { Plus, CalendarDays } from 'lucide-react';
import EventsTableClient from './EventsTableClient';

export default async function AdminEvents() {
  const supabase = await createClient();
  const collegeId = await getAdminCollegeId();
  const { data: events } = await supabase
    .from('events')
    .select('id, title, slug, event_date, event_time, venue, image_url, is_published, created_at')
    .eq('college_id', collegeId)
    .order('event_date', { ascending: false });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-500 text-sm mt-0.5">{events?.length ?? 0} total events</p>
        </div>
        <Link
          href="/admin/events/new"
          className="flex items-center gap-2 bg-[#0b6d41] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#004d28] transition"
        >
          <Plus className="w-4 h-4" />
          New Event
        </Link>
      </div>

      {/* Table */}
      {events && events.length > 0 ? (
        <EventsTableClient events={events} />
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-[#0b6d41]/10 rounded-2xl flex items-center justify-center mb-4">
            <CalendarDays className="w-7 h-7 text-[#0b6d41]" />
          </div>
          <p className="font-semibold text-gray-700 mb-1">No events yet</p>
          <p className="text-sm text-gray-400 mb-5">Create your first event to display on the site.</p>
          <Link
            href="/admin/events/new"
            className="flex items-center gap-2 bg-[#0b6d41] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#004d28] transition"
          >
            <Plus className="w-4 h-4" />
            New Event
          </Link>
        </div>
      )}
    </div>
  );
}

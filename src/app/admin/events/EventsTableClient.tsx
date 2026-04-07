'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Pencil, CalendarDays, ArrowUpDown, ExternalLink } from 'lucide-react';
import DeleteEventButton from './DeleteEventButton';

interface EventItem {
  id: string;
  title: string;
  slug: string;
  event_date: string;
  event_time: string | null;
  venue: string | null;
  image_url: string | null;
  is_published: boolean;
  created_at: string;
}

type SortKey = 'title' | 'event_date' | 'venue' | 'is_published' | 'created_at';
type SortDir = 'asc' | 'desc';

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function formatDay(d: string) {
  return new Date(d).toLocaleDateString('en-IN', { weekday: 'long' });
}

export default function EventsTableClient({ events }: { events: EventItem[] }) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [sortKey, setSortKey] = useState<SortKey>('event_date');
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  }

  const filtered = useMemo(() => {
    let list = [...events];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        e =>
          e.title.toLowerCase().includes(q) ||
          (e.venue?.toLowerCase().includes(q)) ||
          (e.slug?.toLowerCase().includes(q))
      );
    }

    if (statusFilter === 'published') list = list.filter(e => e.is_published);
    if (statusFilter === 'draft') list = list.filter(e => !e.is_published);

    list.sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case 'title':
          cmp = a.title.localeCompare(b.title);
          break;
        case 'event_date':
          cmp = new Date(a.event_date || 0).getTime() - new Date(b.event_date || 0).getTime();
          break;
        case 'venue':
          cmp = (a.venue ?? '').localeCompare(b.venue ?? '');
          break;
        case 'is_published':
          cmp = Number(b.is_published) - Number(a.is_published);
          break;
        case 'created_at':
          cmp = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
          break;
      }
      return sortDir === 'asc' ? cmp : -cmp;
    });

    return list;
  }, [events, search, statusFilter, sortKey, sortDir]);

  function SortHeader({ label, field }: { label: string; field: SortKey }) {
    const active = sortKey === field;
    return (
      <button
        onClick={() => toggleSort(field)}
        className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider ${
          active ? 'text-[#0b6d41]' : 'text-gray-400'
        } hover:text-[#0b6d41] transition-colors`}
      >
        {label}
        <ArrowUpDown className="w-3 h-3" />
      </button>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Search + Filters */}
      <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search title, venue, slug..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b6d41]/20 focus:border-[#0b6d41] transition"
          />
        </div>
        <div className="flex items-center gap-2">
          {(['all', 'published', 'draft'] as const).map(status => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`text-xs font-medium px-3 py-2 rounded-lg transition-colors capitalize ${
                statusFilter === status
                  ? 'bg-[#0b6d41] text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {status === 'all' ? `All (${events.length})` : status}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="text-left px-4 py-3 w-12">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">#</span>
              </th>
              <th className="text-left px-4 py-3">
                <SortHeader label="Title" field="title" />
              </th>
              <th className="text-left px-4 py-3 hidden sm:table-cell">
                <SortHeader label="Date" field="event_date" />
              </th>
              <th className="text-left px-4 py-3 hidden lg:table-cell">
                <SortHeader label="Venue" field="venue" />
              </th>
              <th className="text-center px-4 py-3">
                <SortHeader label="Status" field="is_published" />
              </th>
              <th className="text-left px-4 py-3 hidden xl:table-cell">
                <SortHeader label="Created" field="created_at" />
              </th>
              <th className="text-right px-4 py-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((ev, i) => (
              <tr key={ev.id} className="hover:bg-gray-50/50 transition-colors">
                {/* # */}
                <td className="px-4 py-3">
                  <span className="text-xs text-gray-400">{i + 1}</span>
                </td>

                {/* Title */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {ev.image_url ? (
                      <img
                        src={ev.image_url}
                        alt={ev.title}
                        className="w-10 h-10 rounded-lg object-cover border border-gray-100 flex-shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-[#0b6d41]/10 flex items-center justify-center flex-shrink-0">
                        <CalendarDays className="w-5 h-5 text-[#0b6d41]" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{ev.title}</p>
                      {ev.event_time && (
                        <p className="text-xs text-gray-400 mt-0.5">{ev.event_time}</p>
                      )}
                      {/* Mobile: show date inline */}
                      {ev.event_date && (
                        <p className="text-xs text-gray-400 sm:hidden mt-0.5">{formatDate(ev.event_date)}</p>
                      )}
                    </div>
                  </div>
                </td>

                {/* Date */}
                <td className="px-4 py-3 hidden sm:table-cell">
                  {ev.event_date ? (
                    <div>
                      <p className="text-sm text-gray-700">{formatDate(ev.event_date)}</p>
                      <p className="text-xs text-gray-400">{formatDay(ev.event_date)}</p>
                    </div>
                  ) : (
                    <span className="text-sm text-gray-400">—</span>
                  )}
                </td>

                {/* Venue */}
                <td className="px-4 py-3 hidden lg:table-cell">
                  <p className="text-sm text-gray-600 truncate max-w-[200px]">{ev.venue || '—'}</p>
                </td>

                {/* Status */}
                <td className="px-4 py-3 text-center">
                  <span className={`inline-flex text-xs font-medium px-2.5 py-1 rounded-full ${
                    ev.is_published
                      ? 'bg-[#0b6d41]/10 text-[#0b6d41]'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {ev.is_published ? 'Published' : 'Draft'}
                  </span>
                </td>

                {/* Created */}
                <td className="px-4 py-3 hidden xl:table-cell">
                  <p className="text-sm text-gray-500">{formatDate(ev.created_at)}</p>
                </td>

                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-1">
                    {ev.is_published && ev.slug && (
                      <Link
                        href={`/events/${ev.slug}`}
                        target="_blank"
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        title="View Live"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                    <Link
                      href={`/admin/events/${ev.id}`}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#0b6d41] hover:bg-[#0b6d41]/5 transition-colors"
                      title="Edit"
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    <DeleteEventButton id={ev.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty filtered state */}
      {filtered.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-sm text-gray-400">No events match your search.</p>
        </div>
      )}

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
        <p className="text-xs text-gray-400">
          Showing {filtered.length} of {events.length} events
        </p>
      </div>
    </div>
  );
}

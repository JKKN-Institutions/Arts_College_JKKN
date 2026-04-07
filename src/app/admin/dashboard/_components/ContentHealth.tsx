import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import { AlertTriangle, CheckCircle2, FileText, CalendarDays, Bell, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

interface HealthItem {
  type: 'warning' | 'success';
  icon: React.ElementType;
  message: string;
  detail?: string;
  href?: string;
  linkLabel?: string;
}

export default async function ContentHealth() {
  const supabase = await createClient();
  const collegeId = await getAdminCollegeId();

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  const today = new Date().toISOString();

  const results = await Promise.allSettled([
    // Draft blogs (unpublished)
    supabase
      .from('blogs')
      .select('id, title, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', false)
      .order('created_at', { ascending: false })
      .limit(5),
    // Draft events (unpublished)
    supabase
      .from('events')
      .select('id, title, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', false)
      .order('created_at', { ascending: false })
      .limit(5),
    // Upcoming events this week
    supabase
      .from('events')
      .select('id, title, event_date')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .gte('event_date', today)
      .lte('event_date', nextWeek)
      .order('event_date', { ascending: true })
      .limit(5),
    // Stale active notices (older than 30 days and still active)
    supabase
      .from('notices')
      .select('id, title, created_at')
      .eq('college_id', collegeId)
      .eq('is_active', true)
      .lt('created_at', sevenDaysAgo)
      .order('created_at', { ascending: true })
      .limit(5),
    // Empty gallery albums (albums with 0 images - get all albums then check)
    supabase
      .from('gallery_albums')
      .select('id, name')
      .eq('college_id', collegeId),
    // All gallery images for counting
    supabase
      .from('gallery_images')
      .select('album_id')
      .eq('college_id', collegeId),
  ]);

  function getData<T>(r: (typeof results)[number]): T[] {
    return r.status === 'fulfilled' ? ((r.value as { data: T[] }).data ?? []) : [];
  }

  const draftBlogs = getData<{ id: string; title: string; created_at: string }>(results[0]);
  const draftEvents = getData<{ id: string; title: string; created_at: string }>(results[1]);
  const upcomingEvents = getData<{ id: string; title: string; event_date: string }>(results[2]);
  const staleNotices = getData<{ id: string; title: string; created_at: string }>(results[3]);
  const allAlbums = getData<{ id: string; name: string }>(results[4]);
  const allImages = getData<{ album_id: string }>(results[5]);

  // Find albums with no images
  const albumImageCounts = new Set(allImages.map(img => img.album_id));
  const emptyAlbums = allAlbums.filter(album => !albumImageCounts.has(album.id));

  const items: HealthItem[] = [];

  // Draft blog posts
  if (draftBlogs.length > 0) {
    items.push({
      type: 'warning',
      icon: FileText,
      message: `${draftBlogs.length} blog post${draftBlogs.length > 1 ? 's' : ''} in draft`,
      detail: draftBlogs.slice(0, 2).map(b => `"${b.title}"`).join(', '),
      href: '/admin/blogs',
      linkLabel: 'Review drafts',
    });
  }

  // Draft events
  if (draftEvents.length > 0) {
    items.push({
      type: 'warning',
      icon: CalendarDays,
      message: `${draftEvents.length} event${draftEvents.length > 1 ? 's' : ''} unpublished`,
      detail: draftEvents.slice(0, 2).map(e => `"${e.title}"`).join(', '),
      href: '/admin/events',
      linkLabel: 'Review events',
    });
  }

  // Upcoming events this week
  if (upcomingEvents.length > 0) {
    items.push({
      type: 'success',
      icon: CalendarDays,
      message: `${upcomingEvents.length} event${upcomingEvents.length > 1 ? 's' : ''} this week`,
      detail: upcomingEvents.slice(0, 2).map(e => `"${e.title}"`).join(', '),
      href: '/admin/events',
      linkLabel: 'View events',
    });
  }

  // Stale notices
  if (staleNotices.length > 0) {
    items.push({
      type: 'warning',
      icon: Bell,
      message: `${staleNotices.length} notice${staleNotices.length > 1 ? 's' : ''} active for 7+ days`,
      detail: staleNotices.slice(0, 2).map(n => `"${n.title}"`).join(', '),
      href: '/admin/notices',
      linkLabel: 'Review notices',
    });
  }

  // Empty albums
  if (emptyAlbums.length > 0) {
    items.push({
      type: 'warning',
      icon: ImageIcon,
      message: `${emptyAlbums.length} album${emptyAlbums.length > 1 ? 's' : ''} with no photos`,
      detail: emptyAlbums.slice(0, 2).map(a => `"${a.name}"`).join(', '),
      href: '/admin/gallery',
      linkLabel: 'Add photos',
    });
  }

  // All good indicators
  if (draftBlogs.length === 0) {
    items.push({ type: 'success', icon: FileText, message: 'All blog posts are published' });
  }
  if (draftEvents.length === 0) {
    items.push({ type: 'success', icon: CalendarDays, message: 'All events are published' });
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      <h2 className="font-semibold text-[#002309] mb-4">Content Health</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 p-3 rounded-xl border-l-[3px] ${
              item.type === 'warning'
                ? 'border-l-[#ffde59] bg-[#ffde59]/5'
                : 'border-l-[#0b6d41] bg-[#0b6d41]/5'
            }`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
              item.type === 'warning' ? 'bg-[#ffde59]/20' : 'bg-[#0b6d41]/10'
            }`}>
              {item.type === 'warning' ? (
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              ) : (
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0b6d41]" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#002309]">{item.message}</p>
              {item.detail && (
                <p className="text-xs text-gray-500 mt-0.5 truncate">{item.detail}</p>
              )}
              {item.href && (
                <Link
                  href={item.href}
                  className="inline-flex items-center text-xs font-medium text-[#0b6d41] hover:underline mt-1"
                >
                  {item.linkLabel} &rarr;
                </Link>
              )}
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-4">No health issues detected.</p>
        )}
      </div>
    </div>
  );
}

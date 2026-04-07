import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import { FileText, CalendarDays, Bell } from 'lucide-react';
import Link from 'next/link';

interface RecentItem {
  id: string;
  title: string;
  type: 'blog' | 'event' | 'notice';
  status: string;
  created_at: string;
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (mins > 0) return `${mins}m ago`;
  return 'Just now';
}

const typeConfig = {
  blog: {
    icon: FileText,
    color: 'bg-[#0b6d41]/10 text-[#0b6d41]',
    basePath: '/admin/blogs',
  },
  event: {
    icon: CalendarDays,
    color: 'bg-[#004d28]/10 text-[#004d28]',
    basePath: '/admin/events',
  },
  notice: {
    icon: Bell,
    color: 'bg-[#ffde59]/20 text-amber-700',
    basePath: '/admin/notices',
  },
};

export default async function RecentlyEdited() {
  const supabase = await createClient();
  const collegeId = await getAdminCollegeId();

  const [blogsRes, eventsRes, noticesRes] = await Promise.allSettled([
    supabase
      .from('blogs')
      .select('id, title, is_published, created_at')
      .eq('college_id', collegeId)
      .order('created_at', { ascending: false })
      .limit(4),
    supabase
      .from('events')
      .select('id, title, is_published, created_at')
      .eq('college_id', collegeId)
      .order('created_at', { ascending: false })
      .limit(4),
    supabase
      .from('notices')
      .select('id, title, is_active, created_at')
      .eq('college_id', collegeId)
      .order('created_at', { ascending: false })
      .limit(4),
  ]);

  const items: RecentItem[] = [];

  if (blogsRes.status === 'fulfilled' && blogsRes.value.data) {
    blogsRes.value.data.forEach((b: { id: string; title: string; is_published: boolean; created_at: string }) => {
      items.push({
        id: b.id,
        title: b.title,
        type: 'blog',
        status: b.is_published ? 'Published' : 'Draft',
        created_at: b.created_at,
      });
    });
  }

  if (eventsRes.status === 'fulfilled' && eventsRes.value.data) {
    eventsRes.value.data.forEach((e: { id: string; title: string; is_published: boolean; created_at: string }) => {
      items.push({
        id: e.id,
        title: e.title,
        type: 'event',
        status: e.is_published ? 'Published' : 'Draft',
        created_at: e.created_at,
      });
    });
  }

  if (noticesRes.status === 'fulfilled' && noticesRes.value.data) {
    noticesRes.value.data.forEach((n: { id: string; title: string; is_active: boolean; created_at: string }) => {
      items.push({
        id: n.id,
        title: n.title,
        type: 'notice',
        status: n.is_active ? 'Active' : 'Inactive',
        created_at: n.created_at,
      });
    });
  }

  // Sort by most recent and take top 8
  items.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  const recentItems = items.slice(0, 8);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-[#002309]">Recently Added</h2>
      </div>
      {recentItems.length > 0 ? (
        <div className="space-y-2">
          {recentItems.map((item) => {
            const config = typeConfig[item.type];
            const Icon = config.icon;
            const href = `${config.basePath}/${item.id}`;
            const isPublished = item.status === 'Published' || item.status === 'Active';

            return (
              <Link
                key={`${item.type}-${item.id}`}
                href={href}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${config.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate group-hover:text-[#0b6d41] transition-colors">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-gray-400 capitalize">{item.type}</span>
                    <span className="text-gray-300">&middot;</span>
                    <span className="text-xs text-gray-400">{timeAgo(item.created_at)}</span>
                  </div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
                  isPublished
                    ? 'bg-[#0b6d41]/10 text-[#0b6d41]'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {item.status}
                </span>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-gray-400 text-center py-6">No content yet. Create your first item above.</p>
      )}
    </div>
  );
}

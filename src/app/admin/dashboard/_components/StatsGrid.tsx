import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import { CalendarDays, FileText, Image as ImageIcon, Bell, Users } from 'lucide-react';
import Link from 'next/link';

interface StatCardProps {
  label: string;
  total: number;
  sub: string;
  icon: React.ElementType;
  href: string;
  iconBg: string;
  iconColor: string;
}

function StatCard({ label, total, sub, icon: Icon, href, iconBg, iconColor }: StatCardProps) {
  return (
    <Link
      href={href}
      className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-all duration-200 group flex items-center gap-4"
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${iconBg}`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold tracking-[0.06em] uppercase text-gray-400 mb-0.5">{label}</p>
        <p className="text-2xl font-bold text-[#002309] leading-tight">{total}</p>
        <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
      </div>
    </Link>
  );
}

export default async function StatsGrid() {
  const supabase = await createClient();
  const collegeId = await getAdminCollegeId();

  const results = await Promise.allSettled([
    supabase.from('events').select('*', { count: 'exact', head: true }).eq('college_id', collegeId),
    supabase.from('events').select('*', { count: 'exact', head: true }).eq('college_id', collegeId).eq('is_published', true),
    supabase.from('blogs').select('*', { count: 'exact', head: true }).eq('college_id', collegeId),
    supabase.from('blogs').select('*', { count: 'exact', head: true }).eq('college_id', collegeId).eq('is_published', true),
    supabase.from('gallery_albums').select('*', { count: 'exact', head: true }).eq('college_id', collegeId),
    supabase.from('gallery_images').select('*', { count: 'exact', head: true }).eq('college_id', collegeId),
    supabase.from('notices').select('*', { count: 'exact', head: true }).eq('college_id', collegeId),
    supabase.from('notices').select('*', { count: 'exact', head: true }).eq('college_id', collegeId).eq('is_active', true),
    supabase.from('faculty').select('*', { count: 'exact', head: true }).eq('college_id', collegeId).eq('is_active', true),
  ]);

  function getCount(r: (typeof results)[number]) {
    return r.status === 'fulfilled' ? (r.value.count ?? 0) : 0;
  }

  const eventsTotal = getCount(results[0]);
  const eventsPublished = getCount(results[1]);
  const blogsTotal = getCount(results[2]);
  const blogsPublished = getCount(results[3]);
  const albumsTotal = getCount(results[4]);
  const photosTotal = getCount(results[5]);
  const noticesTotal = getCount(results[6]);
  const noticesActive = getCount(results[7]);
  const facultyActive = getCount(results[8]);

  const stats: StatCardProps[] = [
    {
      label: 'Total Events',
      total: eventsTotal,
      sub: `${eventsPublished} published`,
      icon: CalendarDays,
      href: '/admin/events',
      iconBg: 'bg-[#0b6d41]/10',
      iconColor: 'text-[#0b6d41]',
    },
    {
      label: 'Blog Posts',
      total: blogsTotal,
      sub: `${blogsPublished} published`,
      icon: FileText,
      href: '/admin/blogs',
      iconBg: 'bg-[#004d28]/10',
      iconColor: 'text-[#004d28]',
    },
    {
      label: 'Gallery',
      total: albumsTotal,
      sub: `${photosTotal} photos`,
      icon: ImageIcon,
      href: '/admin/gallery',
      iconBg: 'bg-[#ffde59]/20',
      iconColor: 'text-amber-600',
    },
    {
      label: 'Active Notices',
      total: noticesActive,
      sub: `${noticesTotal} total`,
      icon: Bell,
      href: '/admin/notices',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-500',
    },
    {
      label: 'Faculty',
      total: facultyActive,
      sub: 'active members',
      icon: Users,
      href: '/admin/faculty',
      iconBg: 'bg-[#002309]/10',
      iconColor: 'text-[#002309]',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}

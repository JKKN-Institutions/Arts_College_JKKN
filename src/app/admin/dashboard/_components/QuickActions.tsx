import Link from 'next/link';
import { Plus, CalendarDays, FileText, Image as ImageIcon, Bell, Users } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';

const allActions = [
  { href: '/admin/events/new', label: 'New Event', icon: CalendarDays, staffVisible: false },
  { href: '/admin/blogs/new', label: 'New Blog Post', icon: FileText, staffVisible: true },
  { href: '/admin/gallery/new', label: 'New Album', icon: ImageIcon, staffVisible: true },
  { href: '/admin/notices/new', label: 'New Notice', icon: Bell, staffVisible: false },
  { href: '/admin/faculty/new', label: 'Add Faculty', icon: Users, staffVisible: true },
];

export default async function QuickActions() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  let isStaff = false;
  if (session?.user?.id) {
    const { data: profile } = await supabase
      .from('staff_profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();
    isStaff = profile?.role === 'staff';
  }

  const actions = isStaff
    ? allActions.filter((a) => a.staffVisible)
    : allActions;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6">
      <h2 className="font-semibold text-[#002309] mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-2.5">
        {actions.map(({ href, label, icon: Icon }, i) => (
          <Link
            key={href}
            href={href}
            className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200 ${
              i === 0
                ? 'bg-[#0b6d41] text-white hover:bg-[#004d28]'
                : 'bg-[#0b6d41]/5 text-[#0b6d41] hover:bg-[#0b6d41]/10 border border-[#0b6d41]/10'
            }`}
          >
            <Plus className="w-4 h-4" />
            <Icon className="w-4 h-4" />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

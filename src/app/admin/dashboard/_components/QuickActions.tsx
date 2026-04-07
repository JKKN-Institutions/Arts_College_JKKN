import Link from 'next/link';
import { Plus, CalendarDays, FileText, Image as ImageIcon, Bell, Users } from 'lucide-react';

const actions = [
  { href: '/admin/events/new', label: 'New Event', icon: CalendarDays },
  { href: '/admin/blogs/new', label: 'New Blog Post', icon: FileText },
  { href: '/admin/gallery/new', label: 'New Album', icon: ImageIcon },
  { href: '/admin/notices/new', label: 'New Notice', icon: Bell },
  { href: '/admin/faculty/new', label: 'Add Faculty', icon: Users },
];

export default function QuickActions() {
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

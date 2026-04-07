import { createClient } from '@/lib/supabase/server';
import { siteConfig } from '@/lib/site-config';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import { Shield } from 'lucide-react';

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function formatDate(): string {
  return new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date());
}

export default async function WelcomeSection() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  const email = session?.user?.email ?? 'Admin';
  const displayName = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const collegeId = await getAdminCollegeId();
  const isOverride = collegeId !== process.env.NEXT_PUBLIC_COLLEGE_ID;

  // Fetch role
  let role = 'Admin';
  if (session?.user?.id) {
    const { data: profile } = await supabase
      .from('staff_profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();
    if (profile?.role === 'super_admin') role = 'Super Admin';
    else if (profile?.role === 'seo') role = 'SEO Admin';
    else if (profile?.role === 'staff') role = 'Staff';
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#002309]">
            {getGreeting()}, {displayName}
          </h1>
          <p className="text-sm text-gray-500 mt-1">{formatDate()}</p>
        </div>
        <div className="flex items-center gap-2">
          {role === 'Super Admin' && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0b6d41] bg-[#0b6d41]/10 px-3 py-1.5 rounded-full">
              <Shield className="w-3.5 h-3.5" />
              {role}
            </span>
          )}
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${
            isOverride
              ? 'text-amber-700 bg-amber-50 border border-amber-200'
              : 'text-[#0b6d41] bg-[#0b6d41]/5 border border-[#0b6d41]/10'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isOverride ? 'bg-amber-500' : 'bg-[#0b6d41]'}`} />
            {siteConfig.shortName}
          </span>
        </div>
      </div>
    </div>
  );
}

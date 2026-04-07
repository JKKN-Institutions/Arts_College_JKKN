import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

/**
 * Returns the college_id for admin operations.
 * Only super_admin / seo users can switch colleges via cookie.
 * Staff and regular admins always use the env-configured college.
 */
export async function getAdminCollegeId(): Promise<string> {
  const defaultId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const cookieStore = await cookies();
  const overrideId = cookieStore.get('admin_college_id')?.value;

  // No cookie override — use default
  if (!overrideId) return defaultId;

  // Cookie exists — verify user has permission to switch colleges
  try {
    const supabase = await createClient();
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user?.id) return defaultId;

    const { data: profile } = await supabase
      .from('staff_profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();

    const canSwitch = profile?.role === 'super_admin' || profile?.role === 'seo';
    return canSwitch ? overrideId : defaultId;
  } catch {
    return defaultId;
  }
}

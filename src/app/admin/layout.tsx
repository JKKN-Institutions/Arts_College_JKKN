import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import AdminSidebar from './AdminSidebar';
import AdminBottomNavbar from './AdminBottomNavbar';
import TopHeader from './TopHeader';
import ToastProvider from './ToastProvider';
import { AdminCollegeProvider } from './AdminCollegeContext';
import { AdminPanelProvider } from './AdminPanelContext';
import { AdminMainContent } from './AdminShell';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  let user = null;
  let isSuperAdmin = false;
  let isStaff = false;
  let colleges: { id: string; name: string }[] = [];
  let currentCollegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  try {
    const { data: { session } } = await supabase.auth.getSession();
    user = session?.user ?? null;

    if (user) {
      const [profileResult, collegesResult] = await Promise.all([
        supabase
          .from('staff_profiles')
          .select('role')
          .eq('id', user.id)
          .single(),
        supabase
          .from('colleges')
          .select('id, name')
          .eq('is_active', true)
          .order('name'),
      ]);

      const profile = profileResult.data;
      isSuperAdmin = profile?.role === 'super_admin';
      isStaff = profile?.role === 'staff';
      const canSwitchCollege = isSuperAdmin || profile?.role === 'seo';

      if (canSwitchCollege) {
        colleges = collegesResult.data ?? [];
        currentCollegeId = await getAdminCollegeId();
      }
    }
  } catch {
    // Cookie parse error — render layout without sidebar
  }

  return (
    <AdminCollegeProvider collegeId={currentCollegeId}>
      <AdminPanelProvider>
        <div className="min-h-screen flex">
          <ToastProvider />
          {user && (
            <AdminSidebar
              userEmail={user.email ?? ''}
              isSuperAdmin={isSuperAdmin}
              isStaff={isStaff}
              colleges={colleges}
              currentCollegeId={currentCollegeId}
              canSwitchCollege={isSuperAdmin || colleges.length > 0}
            />
          )}
          <AdminMainContent hasUser={!!user}>
            {user && (
              <TopHeader
                userEmail={user.email ?? ''}
                isSuperAdmin={isSuperAdmin}
              />
            )}
            <main className="flex-1 pb-20 lg:pb-0">{children}</main>
          </AdminMainContent>
          {user && (
            <AdminBottomNavbar isStaff={isStaff} isSuperAdmin={isSuperAdmin} />
          )}
        </div>
      </AdminPanelProvider>
    </AdminCollegeProvider>
  );
}

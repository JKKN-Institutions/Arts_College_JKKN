import { Suspense } from 'react';
import WelcomeSection from './_components/WelcomeSection';
import StatsGrid from './_components/StatsGrid';
import QuickActions from './_components/QuickActions';
import ContentHealth from './_components/ContentHealth';
import RecentlyEdited from './_components/RecentlyEdited';
import StatsSkeleton from './_components/skeletons/StatsSkeleton';
import ContentHealthSkeleton from './_components/skeletons/ContentHealthSkeleton';
import RecentSkeleton from './_components/skeletons/RecentSkeleton';

export default function AdminDashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Welcome Section */}
      <Suspense fallback={
        <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 mb-6 animate-pulse">
          <div className="h-7 w-56 bg-gray-200 rounded-lg mb-2" />
          <div className="h-4 w-40 bg-gray-100 rounded-lg" />
        </div>
      }>
        <WelcomeSection />
      </Suspense>

      {/* Stats Grid — matching reference horizontal cards */}
      <Suspense fallback={<StatsSkeleton />}>
        <StatsGrid />
      </Suspense>

      {/* Quick Actions */}
      <QuickActions />

      {/* Two-column: Content Health + Recently Edited */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Suspense fallback={<ContentHealthSkeleton />}>
          <ContentHealth />
        </Suspense>
        <Suspense fallback={<RecentSkeleton />}>
          <RecentlyEdited />
        </Suspense>
      </div>
    </div>
  );
}

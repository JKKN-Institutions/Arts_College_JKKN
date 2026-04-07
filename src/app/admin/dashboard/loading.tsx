import StatsSkeleton from './_components/skeletons/StatsSkeleton';
import ContentHealthSkeleton from './_components/skeletons/ContentHealthSkeleton';
import RecentSkeleton from './_components/skeletons/RecentSkeleton';

export default function DashboardLoading() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1400px]">
      {/* Welcome skeleton */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 mb-6 animate-pulse">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="h-7 w-56 bg-gray-200 rounded-lg mb-2" />
            <div className="h-4 w-40 bg-gray-100 rounded-lg" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-7 w-24 bg-gray-100 rounded-full" />
            <div className="h-7 w-28 bg-gray-100 rounded-full" />
          </div>
        </div>
      </div>

      {/* Stats skeleton */}
      <StatsSkeleton />

      {/* Quick Actions skeleton */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6 animate-pulse">
        <div className="h-5 w-28 bg-gray-200 rounded mb-4" />
        <div className="flex flex-wrap gap-2.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-10 w-32 bg-gray-200 rounded-xl" />
          ))}
        </div>
      </div>

      {/* Two-column skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ContentHealthSkeleton />
        <RecentSkeleton />
      </div>
    </div>
  );
}

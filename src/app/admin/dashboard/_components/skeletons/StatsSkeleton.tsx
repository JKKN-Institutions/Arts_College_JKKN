export default function StatsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6 animate-pulse">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gray-100 flex-shrink-0" />
          <div className="flex-1">
            <div className="h-3 w-20 bg-gray-100 rounded mb-2" />
            <div className="h-7 w-10 bg-gray-200 rounded mb-1.5" />
            <div className="h-3 w-16 bg-gray-100 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

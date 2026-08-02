export default function StatsCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="space-y-6">
          <div className="h-4 w-24 rounded bg-gray-200"></div>
          <div className="h-8 w-16 rounded bg-gray-200"></div>
        </div>
        <div className="h-12 w-12 rounded-lg bg-gray-200"></div>
      </div>
    </div>
  );
}


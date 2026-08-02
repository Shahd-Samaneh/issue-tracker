export default function StatusChartSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-8 h-6 w-40 rounded bg-gray-200"></div>


      <div className="flex justify-center py-6">
        <div className="h-48 w-48 rounded-full bg-gray-200"></div>
      </div>


      <div className="mt-6 flex justify-center gap-2">
        <div className="flex gap-1 justify-center">
          <div className="h-4 w-4 rounded bg-gray-200"></div>
          <div className="h-4 w-16 rounded bg-gray-200"></div>
        </div>

        <div className="flex  gap-1 justify-center">
          <div className="h-4 w-4 rounded bg-gray-200"></div>
          <div className="h-4 w-20 rounded bg-gray-200"></div>
        </div>

        <div className="flex  gap-1 justify-center">
          <div className="h-4 w-4 rounded bg-gray-200"></div>
          <div className="h-4 w-16 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
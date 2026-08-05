export default function IssueDetailsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mb-6 h-5 w-32 rounded bg-gray-200"></div>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 p-6">
          <div className="mb-3 h-8 w-64 rounded bg-gray-200"></div>
          <div className="h-4 w-80 rounded bg-gray-200"></div>
        </div>

        <div className="space-y-8 p-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div key={index}>
                <div className="mb-3 h-4 w-20 rounded bg-gray-200"></div>
                <div className="h-7 w-24 rounded-full bg-gray-200"></div>
              </div>
            ))}
          </div>

          <div>
            <div className="mb-4 h-6 w-32 rounded bg-gray-200"></div>

            <div className="space-y-2">
              <div className="h-4 rounded bg-gray-200"></div>
              <div className="h-4 rounded bg-gray-200"></div>
              <div className="h-4 w-3/4 rounded bg-gray-200"></div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[...Array(2)].map((_, index) => (
              <div key={index}>
                <div className="mb-3 h-4 w-20 rounded bg-gray-200"></div>
                <div className="h-5 w-28 rounded bg-gray-200"></div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <div className="h-10 w-32 rounded-lg bg-gray-200"></div>
            <div className="h-10 w-32 rounded-lg bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
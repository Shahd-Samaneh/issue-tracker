export default function IssueFormSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Back */}
      <div className="mb-6 h-5 w-32 rounded bg-gray-200"></div>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-5">
          <div className="mb-3 h-8 w-48 rounded bg-gray-200"></div>
          <div className="h-5 w-72 rounded bg-gray-200"></div>
        </div>

        {/* Form */}
        <div className="space-y-6 p-6">
          {/* Title */}
          <div>
            <div className="mb-2 h-4 w-20 rounded bg-gray-200"></div>
            <div className="h-11 rounded-lg bg-gray-200"></div>
          </div>

          {/* Description */}
          <div>
            <div className="mb-2 h-4 w-24 rounded bg-gray-200"></div>
            <div className="h-36 rounded-lg bg-gray-200"></div>
          </div>

          {/* Selects */}
          <div className="grid gap-6 md:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div key={index}>
                <div className="mb-2 h-4 w-20 rounded bg-gray-200"></div>
                <div className="h-11 rounded-lg bg-gray-200"></div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="h-11 w-36 rounded-lg bg-gray-200"></div>
            <div className="h-11 w-28 rounded-lg bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
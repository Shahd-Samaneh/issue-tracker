import RecentIssuesSkeleton from "./RecentIssuesSkeleton";
import StatsCardSkeleton from "./StatsCardSkeleton";
import StatusChartSkeleton from "./StatusChartSkeleton";
import WeeklyChartSkeleton from "./WeeklyChartSkeleton";

export default function DashboardSkeleton() {
  return (
    <>

      <div className="mb-8">
        <div className="h-8 w-48 animate-pulse rounded bg-gray-200"></div>
        <div className="mt-4 h-4 w-32 animate-pulse rounded bg-gray-200"></div>
      </div>

      <div className="mt-2 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCardSkeleton />
        <StatsCardSkeleton />
        <StatsCardSkeleton />
        <StatsCardSkeleton />
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <StatusChartSkeleton />
        <WeeklyChartSkeleton />
      </div>

      <div className="mt-8">
        <RecentIssuesSkeleton />
      </div>

    </>
    
  );}

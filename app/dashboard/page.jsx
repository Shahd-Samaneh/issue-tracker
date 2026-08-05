import StatsCard from "@/components/dashboard/StatsCard";
import StatusChart from "@/components/dashboard/StatusChart";
import WeeklyChart from "@/components/dashboard/WeeklyChart";
import IssueTable from "@/components/common/IssueTable";

import { getDashboardStats, getIssueStatusData, getRecentIssues, getWeeklyIssues, } from "@/lib/data";

export default async function DashboardPage() {
  const dashboardStats = await getDashboardStats();
  const issueStatusData = await getIssueStatusData();
  const weeklyIssues = await getWeeklyIssues();
  const recentIssues = await getRecentIssues();

  return (
    <>
      <div className="space-y-8">
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-500">Welcome back</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) =>
            (<StatsCard key={stat.title} title={stat.title} value={stat.value} icon={stat.icon} />))}
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <StatusChart data={issueStatusData} />
          <WeeklyChart data={weeklyIssues} />
        </div>

        <div>
          <IssueTable title="Recent Issues" subtitle="Latest project activity" issues={recentIssues} showActions={false} />
        </div>

      </div>

    </>
  );
}
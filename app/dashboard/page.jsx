import { dashboardStats } from "@/lib/data";
import StatsCard from "@/components/dashboard/StatsCard";
import StatusChart from "@/components/dashboard/StatusChart";
import WeeklyChart from "@/components/dashboard/WeeklyChart";
import RecentIssues from "@/components/dashboard/RecentIssues";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function DashboardPage() {
  await delay(3000);
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-500">Welcome back</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatsCard key={stat.title} title={stat.title} value={stat.value} icon={stat.icon} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <StatusChart />
        <WeeklyChart />
      </div>

      <RecentIssues />
    </>
  );
}
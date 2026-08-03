import SearchBar from "@/components/issues/SearchBar";
import FilterBar from "@/components/issues/FilterBar";
import IssueTable from "@/components/common/IssueTable";
import { issues } from "@/lib/data";

export default function IssuesPage() {
  return (
    <>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Issues</h1>
          <p className="mt-2 text-gray-500">
            Manage and track all project issues.
          </p>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          + New Issue
        </button>
      </div>

      <div className="mb-6 flex flex-col gap-4 lg:flex-row">
        <SearchBar />
        <FilterBar />
      </div>

      <IssueTable title="All Issues" subtitle="Manage and track all project issues" issues={issues}/>
    </>
  );
}
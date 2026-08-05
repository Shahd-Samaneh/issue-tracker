import SearchBar from "@/components/issues/SearchBar";
import FilterBar from "@/components/issues/FilterBar";
import IssueTable from "@/components/common/IssueTable";
import { getIssues } from "@/lib/data";
import Link from "next/link";
import IssueList from "@/components/issues/IssueList";

export default async function IssuesPage({ searchParams }) {
  
  const params = await searchParams;
  const search = params.search?.toLowerCase() || "";
  const status = params.status || "All";
  const priority = params.priority || "All";
  const issues = await getIssues();
  const filteredIssues = issues.filter((issue) => {

    const matchesSearch = issue.title.toLowerCase().includes(search);
    const matchesStatus = status === "All" || issue.status === status;
    const matchesPriority = priority === "All" || issue.priority === priority;

    return (matchesSearch && matchesStatus && matchesPriority);
  });

  return (
    <>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Issues</h1>
          <p className="mt-2 text-gray-500">Manage and track all project issues.</p>
        </div>

        <Link href="/issues/create" className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          + New Issue
        </Link>
      </div>

      <div className="mb-6 flex flex-col gap-4 lg:flex-row">
        <SearchBar />
        <FilterBar />
      </div>

      <IssueList title="All Issues" subtitle="Manage and track all project issues" issues={filteredIssues}/>
    </>
  );
}
import { notFound } from "next/navigation";
import Link from "next/link";

import Badge from "@/components/common/Badge";
import { deleteIssue } from "@/lib/actions";
import { getIssueById } from "@/lib/data";

export default async function IssueDetailsPage({ params }) {
  const { id } = await params;
  const issue = await getIssueById(id);
  if (!issue) {
    notFound();
  }

  const deleteIssueWithId = deleteIssue.bind(null, issue.id);

  return (
    <>
      <Link href="/issues" className="mb-6 inline-block text-sm text-blue-600 hover:underline">
        Back to Issues
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

        <div className="border-b border-gray-200 px-6 py-5">
          <h1 className="text-2xl font-bold">{issue.title}</h1>
          <p className="mt-2 text-gray-500">View complete information about this issue.</p>
        </div>

        <div className="space-y-8 p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="mb-2 text-sm text-gray-500">Status</p>
              <Badge variant={issue.status.toLowerCase()}>{issue.status}</Badge>
            </div>

            <div>
              <p className="mb-2 text-sm text-gray-500">Priority</p>
              <Badge variant={issue.priority.toLowerCase()}>{issue.priority}</Badge>
            </div>

            <div>
              <p className="mb-2 text-sm text-gray-500">Assignee</p>
              <p className="font-medium">{issue.assignee}</p>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold">Description</h2>

            <p className="leading-7 text-gray-600">{issue.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Created</p>
              <p className="font-medium">{new Date(issue.createdAt).toLocaleDateString()}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Updated</p>
              <p className="font-medium">{new Date(issue.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={`/issues/edit/${issue.id}`} className="rounded-lg bg-blue-600 px-5 py-2 text-center text-white transition hover:bg-blue-700">
              Edit Issue
            </Link>

            <form action={deleteIssueWithId}>
              <button type="submit" className="rounded-lg border border-red-300 px-5 py-2 text-red-600 transition hover:bg-red-50">
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
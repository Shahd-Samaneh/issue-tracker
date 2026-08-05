import Link from "next/link";
import { notFound } from "next/navigation";

import IssueForm from "@/components/issues/IssueForm";
import { updateIssue } from "@/lib/actions";
import { getIssueById } from "@/lib/data";

export default async function EditIssuePage({ params }) {
  const { id } = await params;

  const issue = await getIssueById(id);

  if (!issue) {
    notFound();
  }

  const updateIssueWithId = updateIssue.bind(null, issue.id);

  return (
    <>
      <Link href="/issues" className="mb-6 inline-block text-sm text-blue-600 hover:underline">
        Back to Issues
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-5">
          <h1 className="text-2xl font-bold">Edit Issue</h1>
          <p className="mt-2 text-gray-500">Update the issue information.</p>
        </div>

        <IssueForm submitLabel="Update Issue" defaultValues={issue} action={updateIssueWithId} />
      </div>
    </>
  );
}
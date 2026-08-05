import Link from "next/link";
import IssueForm from "@/components/issues/IssueForm";
import { createIssue } from "@/lib/actions";

export default function CreateIssuePage() {
  return (
    <>
      <Link href="/issues" className="mb-6 inline-block text-sm text-blue-600 hover:underline">
        Back to Issues
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

        <div className="border-b border-gray-200 px-6 py-5">
          <h1 className="text-2xl font-bold">Create Issue</h1>
          <p className="mt-2 text-gray-500">Fill in the details below to create a new issue.</p>
        </div>

        <IssueForm action={createIssue} />
        
      </div>
    </>
  );
}
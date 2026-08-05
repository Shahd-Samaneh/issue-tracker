import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Badge from "./Badge";

export default function IssueTable({ title, subtitle, issues, showHeader = true, showActions = true, onDelete, }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      {showHeader && (
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      )}

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Priority</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Assignee</th>

              {showActions && (
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Actions
                </th>)}
            </tr>
          </thead>

          <tbody>
            {issues.length === 0 ? (
              <tr>
                <td colSpan={showActions ? 5 : 4} className="px-6 py-12 text-center">

                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-700">No issues found</h3>
                    <p className="text-sm text-gray-500">Try changing your search or filters.</p>
                  </div>

                </td>
              </tr>
            ) : (
              issues.map((issue) => (
                <tr key={issue.id} className="border-b border-gray-100 transition hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    <Link href={`/issues/${issue.id}`} className="transition hover:text-blue-600 hover:underline">
                      {issue.title}
                    </Link>
                  </td>

                  <td className="px-6 py-4">
                    <Badge variant={issue.status.toLowerCase()}>
                      {issue.status}
                    </Badge>
                  </td>

                  <td className="px-6 py-4">
                    <Badge variant={issue.priority.toLowerCase()}>
                      {issue.priority}
                    </Badge>
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {issue.assignee}
                  </td>

                  {showActions && (
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Link href={`/issues/${issue.id}`} className="text-gray-500 transition hover:text-blue-600" title="View">
                          <Eye size={18} />
                        </Link>

                        <Link href={`/issues/edit/${issue.id}`} className="text-gray-500 transition hover:text-green-600" title="Edit">
                          <Pencil size={18} />
                        </Link>

                        {onDelete && (
                          <button onClick={() => onDelete(issue.id)} className="text-gray-500 transition hover:text-red-600" title="Delete">
                            <Trash2 size={18} />
                          </button>
                        )}

                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden">
        {issues.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-12 text-center">
            <h3 className="text-lg font-semibold text-gray-700">
              No issues found
            </h3>

            <p className="text-sm text-gray-500">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="divide-y">
            {issues.map((issue) => (
              <div key={issue.id} className="space-y-3 p-4">
                <Link href={`/issues/${issue.id}`} className="block font-semibold text-gray-900 hover:text-blue-600">
                  {issue.title}
                </Link>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Status</span>
                  <Badge variant={issue.status.toLowerCase()}>
                    {issue.status}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Priority</span>

                  <Badge variant={issue.priority.toLowerCase()}>
                    {issue.priority}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Assignee</span>

                  <span className="text-sm font-medium px-1.5">
                    {issue.assignee}
                  </span>
                </div>

                {showActions && (
                  <div className="flex items-center gap-4 pt-2">
                    <Link href={`/issues/${issue.id}`} className="text-gray-500 transition hover:text-blue-600" >
                      <Eye size={20} />
                    </Link>

                    <Link href={`/issues/edit/${issue.id}`} className="text-gray-500 transition hover:text-green-600">
                      <Pencil size={20} />
                    </Link>
                    {onDelete && (
                      <button onClick={() => onDelete(issue.id)} className="text-gray-500 transition hover:text-red-600" title="Delete">
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
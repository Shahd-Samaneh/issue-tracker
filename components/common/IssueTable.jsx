import Badge from "./Badge";

export default function IssueTable({
  title,
  subtitle,
  issues,
  showHeader = true,
}) {
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
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Title
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                Status
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                Priority
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                Assignee
              </th>
            </tr>
          </thead>

          <tbody>
            {issues.map((issue) => (
              <tr
                key={issue.id}
                className="border-b border-gray-100 transition hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium">{issue.title}</td>

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y md:hidden">
        {issues.map((issue) => (
          <div key={issue.id} className="space-y-3 p-4">
            <h3 className="font-semibold text-gray-900">
              {issue.title}
            </h3>

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

              <span className="text-sm font-medium">
                {issue.assignee}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
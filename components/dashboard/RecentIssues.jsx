import { recentIssues } from "@/lib/data";
import Badge from "../common/Badge";
export default function RecentIssues() {
    return (
        <div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-semibold">
                    Recent Issues
                </h2>

                <p className="text-sm text-gray-500">
                    Latest project activity
                </p>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full">
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
                        {recentIssues.map((issue) => (
                            <tr key={issue.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">

                                <td className="px-6 py-4 font-medium text-gray-900"> {issue.title}</td>

                                <td className="px-6 py-4">
                                    <Badge variant={ issue.status.toLowerCase()}>
                                        {issue.status}
                                    </Badge>
                                </td>

                                <td className="px-6 py-4">
                                    <Badge variant={issue.priority.toLowerCase()}>
                                        {issue.priority}
                                    </Badge>
                                </td>

                                <td className="px-6 py-4 text-gray-600">{issue.assignee}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}
export default function IssueTableSkeleton() {
    return (
        <div className="animate-pulse rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-6 py-4">
                <div className="mb-3 h-6 w-40 rounded bg-gray-200"></div>
                <div className="h-4 w-56 rounded bg-gray-200"></div>
            </div>

            <div className="hidden overflow-x-auto md:block">
                <table className="w-full">
                    <thead className="border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4">
                                <div className="h-4 w-20 rounded bg-gray-200"></div>
                            </th>

                            <th className="px-6 py-4">
                                <div className="h-4 w-16 rounded bg-gray-200"></div>
                            </th>

                            <th className="px-6 py-4">
                                <div className="h-4 w-16 rounded bg-gray-200"></div>
                            </th>

                            <th className="px-6 py-4">
                                <div className="h-4 w-20 rounded bg-gray-200"></div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {[...Array(4)].map((_, index) => (
                            <tr key={index} className="border-b border-gray-100">
                                <td className="px-6 py-4">
                                    <div className="h-5 w-52 rounded bg-gray-200"></div>
                                </td>

                                <td className="px-6 py-4">
                                    <div className="h-6 w-20 rounded-full bg-gray-200"></div>
                                </td>

                                <td className="px-6 py-4">
                                    <div className="h-6 w-20 rounded-full bg-gray-200"></div>
                                </td>

                                <td className="px-6 py-4">
                                    <div className="h-5 w-24 rounded bg-gray-200"></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="divide-y md:hidden">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="space-y-3 p-4">
                        <div className="h-5 w-48 rounded bg-gray-200"></div>

                        <div className="flex items-center justify-between">
                            <div className="h-4 w-14 rounded bg-gray-200"></div>
                            <div className="h-6 w-20 rounded-full bg-gray-200"></div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="h-4 w-16 rounded bg-gray-200"></div>
                            <div className="h-6 w-20 rounded-full bg-gray-200"></div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="h-4 w-16 rounded bg-gray-200"></div>
                            <div className="h-4 w-24 rounded bg-gray-200"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
import IssueTableSkeleton from "../common/IssueTableSkeleton";

export default function IssuesSkeleton() {
    return (
        <>
            <div className="animate-pulse">
                <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <div className="mb-3 h-9 w-24 rounded bg-gray-200"></div>
                        <div className="h-5 w-72 rounded bg-gray-200"></div>
                    </div>

                    <div className="h-10 w-32 rounded-lg bg-gray-200"></div>
                </div>

                <div className="mb-6 flex flex-col gap-4 lg:flex-row">
                    <div className="h-11 flex-1 rounded-lg bg-gray-200"></div>
                    <div className="h-11 w-full rounded-lg bg-gray-200 lg:w-36"></div>
                    <div className="h-11 w-full rounded-lg bg-gray-200 lg:w-36"></div>
                </div>

            </div>

            <IssueTableSkeleton/>
        </>
    );
}
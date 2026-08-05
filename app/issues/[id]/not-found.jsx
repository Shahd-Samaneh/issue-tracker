import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">

      <h1 className="mb-3 text-4xl font-bold text-gray-900">Issue Not Found</h1>

      <p className="mb-6 text-gray-500">he issue you're looking for doesn't exist or has been removed.</p>

      <Link href="/issues" className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
        Back to Issues
      </Link>
    </div>
  );
}
"use client";

export default function Error({
    error,
    reset,
}) {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
            <h2 className="mb-3 text-3xl font-bold text-red-600"> Something went wrong</h2>

            <p className="mb-6 text-gray-500">We couldn't load the dashboard. Please try again.</p>

            <button onClick={() => reset()} className="rounded-lg bg-blue-600 px-5 py-2 text-white transition-colors hover:bg-blue-700">Try Again</button>
        </div>
    );
}
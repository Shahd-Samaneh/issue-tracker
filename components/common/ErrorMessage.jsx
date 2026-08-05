"use client";

export default function ErrorMessage({ title = "Something went wrong", message, action, buttonText = "Try Again", }) {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">

            <h2 className="mb-3 text-3xl font-bold text-red-600">{title}</h2>

            <p className="mb-6 text-gray-500">{message}</p>

            {action && (
                <button onClick={action} className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
                    {buttonText}
                </button>
            )}

        </div>
    );
}
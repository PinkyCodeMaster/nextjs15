// Error boundary for the blog route in Next.js 15
// This component catches runtime errors in the /blog segment and displays a user-friendly message.
// The `reset` function allows retrying the rendering, and errors are logged for debugging/monitoring.
// Place this file as error.tsx in any route segment to enable segment-level error handling.

"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
                <p className="text-gray-600 mb-4">{error.message}</p>
                <button
                    onClick={() => reset()}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Try again
                </button>
            </div>
        </div>
    );
} 
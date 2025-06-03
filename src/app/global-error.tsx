// Global error boundary for the entire Next.js 15 app
// This catches errors from any route/page/layout under /app
// Place this as app/global-error.tsx to provide a global fallback UI

"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error globally
    console.error("Global App Error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-8">
          <div className="bg-white border border-red-200 rounded-xl shadow-lg p-10 max-w-lg w-full text-center">
            <h1 className="text-3xl font-bold text-red-800 mb-4">Global Application Error</h1>
            <p className="text-red-700 mb-6">
              {error.message || "An unexpected error occurred in the app."}
            </p>
            <button
              onClick={reset}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
} 
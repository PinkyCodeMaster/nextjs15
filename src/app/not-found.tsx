import Link from "next/link";

/**
 * Not Found Page Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. Error Handling - not-found.tsx
 *    - Special file name recognized by Next.js
 *    - Automatically handles 404 errors
 *    - Can be placed in app directory or any route segment
 * 
 * 2. Error Boundaries
 *    - This is a client component (no 'use client' needed for not-found)
 *    - Handles routing errors gracefully
 *    - Provides user-friendly error messages
 * 
 * 3. Error Recovery
 *    - Provides navigation options to recover from errors
 *    - Links back to known working routes
 *    - Helps users get back on track
 */
export default function NotFound() {
    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-lg w-full bg-white rounded-lg shadow p-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    404 - Page Not Found
                </h1>
                
                <p className="text-gray-600 mb-8">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                {/* 
                  Error Recovery Navigation
                  - Provides multiple ways to recover from the error
                  - Links to main sections of the application
                  - Helps users find what they're looking for
                */}
                <div className="space-y-4">
                    <Link
                        href="/"
                        className="block w-full px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Return Home
                    </Link>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <Link
                            href="/products"
                            className="block px-5 py-3 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
                        >
                            Browse Products
                        </Link>
                        <Link
                            href="/docs"
                            className="block px-5 py-3 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
                        >
                            View Documentation
                        </Link>
                    </div>
                </div>

                {/* 
                  Error Details
                  - Helpful for debugging
                  - Shows current URL
                  - Can be removed in production
                */}
                <div className="mt-8 p-4 bg-gray-50 rounded text-left">
                    <p className="text-sm text-gray-500">
                        If you believe this is an error, please check the URL or try one of the links above.
                    </p>
                </div>
            </div>
        </main>
    );
}

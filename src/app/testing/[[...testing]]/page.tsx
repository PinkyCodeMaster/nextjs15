import Link from "next/link";
import React from "react";

/**
 * Testing Page Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. Optional Catch-all Routes - [[...testing]]
 *    - The double brackets make the catch-all parameter optional
 *    - This means the page will match:
 *      * /testing
 *      * /testing/1
 *      * /testing/1/2
 *      * etc.
 *    - Without the double brackets, /testing would not match
 * 
 * 2. Dynamic Route Parameters
 *    - params.testing is an array of path segments
 *    - For /testing/1/2/3, testing = ['1', '2', '3']
 *    - For /testing, testing = undefined
 * 
 * 3. Async Server Component
 *    - The async keyword allows for data fetching
 *    - params is a Promise in Next.js 13+
 *    - await is used to resolve the params
 */
export default async function TestingPage({ params }: { params: Promise<{ testing: string[] }> }) {
    const { testing } = await params;
    
    // Build breadcrumb items for navigation
    // This demonstrates how to work with dynamic route parameters
    const breadcrumbs = testing?.reduce<{ path: string; label: string }[]>((acc, segment, index) => {
        const path = testing.slice(0, index + 1).join("/");
        acc.push({ path, label: segment });
        return acc;
    }, []) || [];

    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Testing Page
                </h1>

                {/* 
                  Dynamic Breadcrumb Navigation
                  - Built from the current route parameters
                  - Each segment is a clickable link
                  - Last segment is not a link (current page)
                */}
                <nav className="mb-6">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li>
                            <Link href="/testing" className="text-blue-600 hover:underline">
                                Testing
                            </Link>
                        </li>
                        {breadcrumbs.map((crumb, index) => (
                            <li key={crumb.path} className="flex items-center">
                                <span className="mx-2 text-gray-500">/</span>
                                {index === breadcrumbs.length - 1 ? (
                                    <span className="text-gray-700">{crumb.label}</span>
                                ) : (
                                    <Link 
                                        href={`/testing/${crumb.path}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {crumb.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* Display current path for debugging/learning purposes */}
                <div className="prose max-w-none mb-8">
                    <p className="text-gray-600">
                        Current path: {testing?.join("/") || "root"}
                    </p>
                </div>

                {/* 
                  Dynamic Test Links
                  - Generates links for different nesting levels
                  - Demonstrates how to programmatically create routes
                  - Each link shows both the title and the full path
                */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <Link
                            key={num}
                            href={`/testing/${Array(num).fill(num).join("/")}`}
                            className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            <span className="text-blue-600 font-medium">
                                Testing {num} Levels
                            </span>
                            <p className="text-sm text-gray-500 mt-1">
                                {Array(num).fill(num).join("/")}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="mt-6">
                    <Link href="/" className="inline-block text-blue-600 hover:underline">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}

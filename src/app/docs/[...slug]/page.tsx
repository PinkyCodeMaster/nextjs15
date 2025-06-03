import React from "react";
import Link from "next/link";

/**
 * Documentation Page Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. Catch-all Routes - [...slug]
 *    - Single brackets mean the route must have at least one segment
 *    - Matches any number of path segments after /docs/
 *    - For example:
 *      * /docs/getting-started ✅
 *      * /docs/api/authentication ✅
 *      * /docs ❌ (would need [[...slug]] for this to work)
 * 
 * 2. Dynamic Route Parameters
 *    - params.slug is an array of path segments
 *    - For /docs/getting-started/installation, slug = ['getting-started', 'installation']
 *    - Used to build breadcrumbs and display current location
 * 
 * 3. Server Component with Async Data
 *    - Async component for potential data fetching
 *    - Could fetch documentation content based on the slug
 *    - Currently uses static content for demonstration
 */
export default async function DocsPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    
    // Build breadcrumb items for navigation
    // Demonstrates working with dynamic route parameters
    const breadcrumbs = slug.reduce<{ path: string; label: string }[]>((acc, segment, index) => {
        const path = slug.slice(0, index + 1).join("/");
        acc.push({ path, label: segment });
        return acc;
    }, []);

    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Documentation
                </h1>

                {/* 
                  Dynamic Breadcrumb Navigation
                  - Built from the current route parameters
                  - Each segment is a clickable link
                  - Last segment is not a link (current page)
                  - Demonstrates how to create dynamic navigation based on route
                */}
                <nav className="mb-6">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li>
                            <Link href="/docs" className="text-blue-600 hover:underline">
                                Docs
                            </Link>
                        </li>
                        {breadcrumbs.map((crumb, index) => (
                            <li key={crumb.path} className="flex items-center">
                                <span className="mx-2 text-gray-500">/</span>
                                {index === breadcrumbs.length - 1 ? (
                                    <span className="text-gray-700">{crumb.label}</span>
                                ) : (
                                    <Link 
                                        href={`/docs/${crumb.path}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {crumb.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* 
                  Dynamic Content Area
                  - Could be populated with actual documentation content
                  - Currently shows the current path for demonstration
                  - In a real app, this would fetch and display content based on the slug
                */}
                <div className="prose max-w-none">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">
                        {slug.join(" / ")}
                    </h2>
                    <p className="text-gray-600">
                        This is the documentation page for: {slug.join("/")}
                    </p>
                </div>

                {/* 
                  Navigation Link
                  - Uses Next.js Link component for client-side navigation
                  - Maintains app state between page transitions
                */}
                <div className="mt-6">
                    <Link href="/docs" className="inline-block text-blue-600 hover:underline">
                        ← Back to Documentation
                    </Link>
                </div>
            </div>
        </main>
    );
}

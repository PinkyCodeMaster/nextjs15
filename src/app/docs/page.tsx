import React from "react";
import Link from "next/link";

/**
 * Documentation Home Page Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. Static Page Generation
 *    - This is a static page component
 *    - Content is defined at build time
 *    - No dynamic data fetching needed
 * 
 * 2. File-based Routing
 *    - Located at src/app/docs/page.tsx
 *    - Automatically becomes the /docs route
 *    - Works alongside the catch-all [...slug] route
 * 
 * 3. Link Component Usage
 *    - Demonstrates how to create links to dynamic routes
 *    - Each link points to a potential documentation page
 *    - Links will be handled by the catch-all route
 */

// Static documentation structure
// This could be moved to a separate file or fetched from an API
const docsSections = [
    {
        title: "Getting Started",
        items: [
            { title: "Introduction", path: "getting-started/introduction" },
            { title: "Installation", path: "getting-started/installation" },
            { title: "Quick Start", path: "getting-started/quick-start" },
        ]
    },
    {
        title: "Core Concepts",
        items: [
            { title: "Routing", path: "concepts/routing" },
            { title: "Data Fetching", path: "concepts/data-fetching" },
            { title: "Rendering", path: "concepts/rendering" },
            { title: "Caching", path: "concepts/caching" },
        ]
    },
    {
        title: "API Reference",
        items: [
            { title: "Authentication", path: "api/authentication" },
            { title: "Endpoints", path: "api/endpoints" },
            { title: "Error Handling", path: "api/error-handling" },
            { title: "Rate Limiting", path: "api/rate-limiting" },
        ]
    },
    {
        title: "Advanced Topics",
        items: [
            { title: "Performance", path: "advanced/performance" },
            { title: "Security", path: "advanced/security" },
            { title: "Deployment", path: "advanced/deployment" },
            { title: "Monitoring", path: "advanced/monitoring" },
        ]
    },
    {
        title: "Deep Dives",
        items: [
            { title: "Authentication Flow", path: "deep-dives/auth/flow/implementation" },
            { title: "Database Migrations", path: "deep-dives/database/migrations/versioning" },
            { title: "API Versioning", path: "deep-dives/api/versioning/strategy/implementation" },
            { title: "Testing Strategy", path: "deep-dives/testing/strategy/implementation/coverage" },
        ]
    },
    {
        title: "Tutorials",
        items: [
            { title: "Building a Blog", path: "tutorials/blog/setup/content/management" },
            { title: "E-commerce Integration", path: "tutorials/ecommerce/payment/shipping/integration" },
            { title: "Real-time Features", path: "tutorials/realtime/websockets/implementation/optimization" },
            { title: "Analytics Dashboard", path: "tutorials/analytics/data/visualization/dashboard" },
        ]
    }
];

export default function DocsHomePage() {
    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
                    Documentation
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Everything you need to know about our platform
                </p>

                {/* 
                  Responsive Grid Layout
                  - Uses CSS Grid for layout
                  - Responsive columns based on screen size
                  - Demonstrates Next.js's built-in CSS support
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {docsSections.map((section) => (
                        <div key={section.title} className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                {section.title}
                            </h2>
                            <ul className="space-y-2">
                                {section.items.map((item) => (
                                    <li key={item.path}>
                                        <Link
                                            href={`/docs/${item.path}`}
                                            className="block p-3 rounded-md hover:bg-blue-50 transition-colors"
                                        >
                                            <span className="text-blue-600 font-medium">
                                                {item.title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* 
                  Navigation Link
                  - Uses Next.js Link component
                  - Demonstrates client-side navigation
                */}
                <div className="mt-8 text-center">
                    <Link
                        href="/"
                        className="inline-block text-blue-600 hover:underline"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}

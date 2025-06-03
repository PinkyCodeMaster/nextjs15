/**
 * Articles Listing Page
 * 
 * Next.js Concepts Demonstrated:
 * 
 * 1. Static Route
 *    - /articles route without dynamic segments
 *    - Server-rendered by default
 * 
 * 2. Link Component
 *    - Client-side navigation
 *    - Search params for language selection
 *    - Prefetching enabled by default
 * 
 * 3. Internationalization
 *    - Language selection via search params
 *    - Multiple language options per article
 *    - Consistent UI across languages
 * 
 * 4. Layout & Styling
 *    - Responsive design
 *    - Consistent with app theme
 *    - Clear navigation structure
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing
 */

import Link from "next/link";

const articles = [
    { id: "1", title: "Next.js Routing Deep Dive" },
    { id: "2", title: "Understanding Server Components" },
    { id: "3", title: "Optimizing Performance in React" },
];

export default function ArticlesPage() {
    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Articles</h1>

                <ul className="space-y-6">
                    {articles.map((article) => (
                        <li key={article.id} className="border p-4 rounded-md bg-gray-50">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                {article.title}
                            </h2>
                            <div className="flex gap-4">
                                <Link
                                    href={`/articles/${article.id}?lang=en`}
                                    className="text-blue-600 hover:underline"
                                >
                                    Read in English
                                </Link>
                                <Link
                                    href={`/articles/${article.id}?lang=es`}
                                    className="text-green-600 hover:underline"
                                >
                                    Leer en Español
                                </Link>
                                <Link
                                    href={`/articles/${article.id}?lang=fr`}
                                    className="text-purple-600 hover:underline"
                                >
                                    Lire en Français
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-10 text-center">
                    <Link
                        href="/"
                        className="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}


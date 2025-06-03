import Link from "next/link";

/**
 * Home Page Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. App Router - This is a page component in the app directory, automatically routed to '/'
 * 2. Server Component - By default, all components in the app directory are React Server Components
 * 3. Link Component - Next.js's built-in client-side navigation component
 *    - Pre-fetches pages in the background
 *    - Handles client-side routing without full page reloads
 *    - Maintains app state between navigations
 * 
 * File-based Routing:
 * - This file is located at src/app/page.tsx
 * - Automatically becomes the root route (/)
 * - No need for explicit route configuration
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Home Page</h1>
        <p className="text-gray-600 mb-6">
          This is the starting point of your app. Use the links below to explore.
        </p>

        {/* 
          Responsive Navigation Links
          - flex-col on mobile, flex-row on larger screens (sm: breakpoint)
          - flex-wrap ensures buttons wrap on smaller screens
          - Each Link component enables client-side navigation
        */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Link
            href="/products"
            className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View Products
          </Link>
          <Link href="/profile" className="px-5 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"          >
            Your Profile
          </Link>
          <Link href="/blog" className="px-5 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"          >
            Blog
          </Link>
          <Link
            href="/about"
            className="px-5 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            About
          </Link>
          <Link
            href="/docs"
            className="px-5 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Documentation
          </Link>
          <Link href="/testing" className="px-5 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 transition">
            Testing Routes
          </Link>
          <Link href="/will-not-be-found" className="px-5 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Will Not Be Found
          </Link>
          <Link href="/articles" className="px-5 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Articles
          </Link>
        </div>

        <div className="mt-8">
          <div className="mt-4">
            <p className="text-gray-600 mb-2">this is a private route that is not accessible via direct URL</p>
            <Link
              href="/_admin"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Admin Dashboard →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

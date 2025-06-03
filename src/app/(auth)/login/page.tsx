/**
 * Login Page Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. Route Groups - (auth)
 *    - Folders wrapped in parentheses (auth) are route groups
 *    - Route groups don't affect URL structure
 *    - Used to organize routes without impacting the URL path
 *    - Common use cases:
 *      - Grouping related routes (auth, admin, etc.)
 *      - Sharing layouts between specific routes
 *      - Splitting routes into logical groups
 *    - URL will still be /login, not /(auth)/login
 * 
 * 2. Route Organization
 *    - (auth) group contains login, register, forgot-password
 *    - All auth-related pages can share:
 *      - Common layouts
 *      - Shared components
 *      - Authentication logic
 *      - Error handling
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/route-groups
 */

import Link from "next/link";
import type { Metadata } from "next";

/**
 * Login Page
 * 
 * Next.js Concepts Demonstrated:
 * 1. Metadata Inheritance
 *    - Uses auth layout's metadata template
 *    - Page-specific title and description
 *    - Combines with layout metadata
 */

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your Next.js account',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Login</h1>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:text-blue-800">
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

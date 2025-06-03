/**
 * Register Page Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. Route Groups - (auth)
 *    - Part of the (auth) route group
 *    - URL remains /register despite being in (auth) folder
 *    - Shares common auth-related features with login and forgot-password
 *    - Can use shared layouts and components from the group
 * 
 * 2. Route Organization Benefits
 *    - Logical grouping of related pages
 *    - Shared authentication context
 *    - Consistent styling and behavior
 *    - Centralized error handling
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/route-groups
 */

import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Register</h1>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-800">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

/**
 * Forgot Password Page Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. Route Groups - (auth)
 *    - Part of the (auth) route group
 *    - URL remains /forgot-password despite being in (auth) folder
 *    - Shares authentication context with other auth pages
 *    - Can use shared layouts and components
 * 
 * 2. Route Organization Benefits
 *    - Consistent auth flow across pages
 *    - Shared error handling
 *    - Common styling and behavior
 *    - Centralized auth state management
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/route-groups
 */

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reset Password</h1>
        
        <p className="text-gray-600 mb-6">
          Enter your email address and we&apos;ll send you a link to reset your password.
        </p>

        <form className="space-y-6">
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-800">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
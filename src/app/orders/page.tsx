/**
 * Orders Page
 *
 * Next.js Concepts Demonstrated:
 *
 * 1. Static Route
 *    - /orders is a static route (no dynamic segments)
 *    - Server Component by default
 *
 * 2. Navigation
 *    - Uses Link for client-side navigation
 *    - Could use useRouter for programmatic navigation if needed
 *
 * 3. Learning Purpose
 *    - Shows confirmation after payment
 *    - Entry point for order history or details
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing
 */

import Link from "next/link";

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Order Complete!</h1>
        <p className="mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
        <Link
          href="/products/1"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Shop More Products
        </Link>
      </div>
    </main>
  );
} 
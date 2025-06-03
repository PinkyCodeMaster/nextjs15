/**
 * Checkout Page
 *
 * Next.js Concepts Demonstrated:
 *
 * 1. Programmatic Navigation
 *    - useRouter for client-side navigation
 *    - Navigate to payment page after checkout
 *    - Preserve state through navigation
 *
 * 2. Search Params
 *    - Read productId from searchParams
 *    - Display selected product info
 *    - Type-safe parameter handling
 *
 * 3. Form Handling
 *    - Controlled form inputs
 *    - Form validation
 *    - Error handling
 *    - State management
 *
 * 4. Client Component
 *    - 'use client' directive for interactivity
 *    - Event handling
 *    - Form submission
 *
 * 5. UI/UX Patterns
 *    - Order summary
 *    - Shipping form
 *    - Loading states
 *    - Error states
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/use-router
 */

import CheckoutClient from "@/components/CheckoutClient";
import { products } from "@/lib/mockdata";
import { Suspense } from "react";

export default async function CheckoutPage({ params }: { params: Promise<{ productId: string }> }): Promise<React.ReactNode> {
  const { productId } = await params;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        <Suspense fallback={<p className="text-center text-gray-500">Loading checkout...</p>}>
          <CheckoutClient product={product} />
        </Suspense>
      </div>
    </main>
  );
}


/**
 * Payment Page
 *
 * Next.js Concepts Demonstrated:
 *
 * 1. Programmatic Navigation
 *    - useRouter for client-side navigation
 *    - Navigate to orders page after payment
 *
 * 2. Search Params
 *    - Read productId from searchParams
 *    - Display selected product info
 *
 * 3. Client Component
 *    - 'use client' directive for interactivity
 *    - Handles button click events
 *
 * 4. Simulated Payment Flow
 *    - Demonstrates a real-world checkout process
 *    - Could be extended with API calls
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/use-router
 */

import PaymentClient from "@/components/PaymentClient";
import { Suspense } from "react";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <Suspense fallback={<p className="text-center text-gray-500">Loading payment details...</p>}>
        <PaymentClient />
      </Suspense>
    </main>
  );
}

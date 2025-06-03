/**
 * ProductClient Component
 *
 * Next.js Concepts Demonstrated:
 *
 * 1. Client Component
 *    - Marked with 'use client'
 *    - Handles interactivity and navigation
 *    - Can use hooks like useRouter
 *
 * 2. Programmatic Navigation
 *    - useRouter for client-side navigation
 *    - Navigates to checkout page on button click
 *
 * 3. Props
 *    - Receives product data from server component
 *    - Type-safe with TypeScript
 *
 * 4. UI Composition
 *    - Product image, price, reviews, and description
 *    - Responsive and visually appealing layout
 *
 * @see https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-client-components
 */

"use client";

import { useRouter } from "next/navigation";
import type { Product } from "@/lib/mockdata";

interface ProductClientProps {
  product: Product;
}

export default function ProductClient({ product }: ProductClientProps) {
  const router = useRouter();

  const handleBuyNow = () => {
    // Navigate to checkout with productId
    router.push(`/checkout?productId=${product.id}`);
  };

  return (
    <div className="p-6 container mx-auto">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product Image */}
        <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Product Image</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {product.name}
          </h1>
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">${product.price}</p>
          </div>

          {/* Reviews */}
          <div className="mt-3">
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg
                    key={rating}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-500">4.5 (120 reviews)</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="text-base text-gray-700 space-y-6">
              <p>
                {product.description}
              </p>
              <p>
                The product details page demonstrates how to create dynamic routes in Next.js
                and how to use nested layouts for consistent UI across related pages.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleBuyNow}
              className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
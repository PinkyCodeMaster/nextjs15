"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

/**
 * Review Not Found Page Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. Client-side Error Handling
 *    - Uses 'use client' directive for client-side rendering
 *    - Can access client-side APIs like usePathname
 *    - Allows dynamic error messages based on URL
 * 
 * 2. Dynamic Route Parameters
 *    - Extracts productId and reviewId from URL
 *    - Uses usePathname hook to get current path
 *    - Demonstrates client-side route parameter handling
 * 
 * 3. Nested Error Boundaries
 *    - Most specific not-found page in the hierarchy
 *    - Takes precedence over product and global not-found pages
 *    - Provides review-specific error context
 */
export default function ReviewNotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/").pop();

    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-lg w-full bg-white rounded-lg shadow p-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Review Not Found
                </h1>
                
                <p className="text-gray-600 mb-2">
                    Review #{reviewId} for Product #{productId}
                </p>
                <p className="text-gray-600 mb-8">
                    Sorry, this review doesn't exist or has been removed.
                </p>

                {/* 
                  Review-specific Recovery Options
                  - Links to product reviews
                  - Links to product details
                  - Provides a way to return home
                */}
                <div className="space-y-4">
                    <Link
                        href={`/products/${productId}`}
                        className="block w-full px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        View Product Details
                    </Link>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <Link
                            href="/products"
                            className="block px-5 py-3 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
                        >
                            Browse Products
                        </Link>
                        <Link
                            href="/"
                            className="block px-5 py-3 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
                        >
                            Return Home
                        </Link>
                    </div>
                </div>

                {/* 
                  Review-specific Error Details
                  - Shows which review was not found
                  - Provides context about the error
                  - Helps users understand what went wrong
                */}
                <div className="mt-8 p-4 bg-gray-50 rounded text-left">
                    <p className="text-sm text-gray-500">
                        The review might have been deleted or the ID might be incorrect. 
                        Try viewing other reviews for this product or check the review ID.
                    </p>
                </div>
            </div>
        </main>
    );
}

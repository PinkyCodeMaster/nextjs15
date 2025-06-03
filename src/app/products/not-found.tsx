import Link from "next/link";

/**
 * Products Not Found Page Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. Route-specific Error Handling
 *    - This not-found page only handles 404s in the /products/* routes
 *    - More specific than the root not-found.tsx
 *    - Can provide more contextual error messages
 * 
 * 2. Nested Error Boundaries
 *    - Error handling can be nested in the route hierarchy
 *    - More specific error pages take precedence
 *    - Allows for customized error handling per section
 * 
 * 3. Contextual Error Recovery
 *    - Provides product-specific recovery options
 *    - Links to product listing and search
 *    - More relevant to the products section
 */
export default function ProductsNotFound() {
    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-lg w-full bg-white rounded-lg shadow p-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Product Not Found
                </h1>
                
                <p className="text-gray-600 mb-6">
                    We couldn&apos;t find what you&apos;re looking for.
                </p>

                {/* 
                  Product-specific Recovery Options
                  - Links to product listing
                  - Suggests browsing all products
                  - Provides a way to return home
                */}
                <div className="space-y-4">
                    <Link
                        href="/products"
                        className="block w-full px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        View All Products
                    </Link>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <Link
                            href="/"
                            className="block px-5 py-3 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
                        >
                            Return Home
                        </Link>
                        <Link
                            href="/docs"
                            className="block px-5 py-3 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
                        >
                            View Documentation
                        </Link>
                    </div>
                </div>

                {/* 
                  Product-specific Error Details
                  - More specific to product-related errors
                  - Suggests checking product ID
                  - Can be customized for product context
                */}
                <div className="mt-8 p-4 bg-gray-50 rounded text-left">
                    <p className="text-sm text-gray-500">
                        The product might have been removed or the ID might be incorrect. 
                        Try browsing our product catalog or check the product ID.
                    </p>
                </div>
            </div>
        </main>
    );
} 
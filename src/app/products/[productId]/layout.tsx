/**
 * Product Details Layout
 * 
 * Next.js Concepts Demonstrated:
 * 1. Nested Layouts
 *    - This layout only applies to /products/[productId]/* routes
 *    - Inherits from root layout
 *    - Can have its own metadata and styling
 * 
 * 2. Dynamic Route Parameters
 *    - Access to [productId] parameter
 *    - Can be used for data fetching
 *    - Shared across all product pages
 * 
 * 3. Layout Composition
 *    - Combines with root layout
 *    - Adds product-specific UI elements
 *    - Maintains consistent product context
 */

import Link from "next/link";

export default async function ProductLayout({ children, params, }: { children: React.ReactNode, params: Promise<{ productId: string }>; }) {
    const { productId } = await params;
    return (

        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-100 min-h-screen">
            {/* Breadcrumbs */}
            <div className="container mx-auto">
                <nav className="flex mb-8" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2">
                        <li>
                            <Link href="/products" className="text-gray-500 hover:text-gray-700">
                                Products
                            </Link>
                        </li>
                        <li>
                            <span className="text-gray-400 mx-2">/</span>
                        </li>
                        <li className="text-gray-900">Product {productId}</li>
                    </ol>
                </nav>

                {/* Product Navigation */}
                <div className="border-b border-gray-200 mb-8  ">
                    <nav className="-mb-px flex space-x-8">
                        <Link
                            href={`/products/${productId}`}
                            className="border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                        >
                            Overview
                        </Link>
                        <Link
                            href={`/products/${productId}/reviews`}
                            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                        >
                            Reviews
                        </Link>
                        <Link
                            href={`/products/${productId}/specifications`}
                            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                        >
                            Specifications
                        </Link>
                        <Link
                            href={`/products/${productId}/related`}
                            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                        >
                            Related Products
                        </Link>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="bg-white shadow-sm rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
} 
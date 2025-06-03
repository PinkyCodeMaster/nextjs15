import Link from "next/link";

/**
 * Products Listing Page Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. Static Page Generation
 *    - This is a static page component
 *    - Content is generated at build time
 *    - No dynamic data fetching needed
 * 
 * 2. Dynamic Route Generation
 *    - Creates links to dynamic product pages
 *    - Each product ID becomes a route parameter
 *    - Links to /products/[productId] routes
 * 
 * 3. Link Component with Dynamic Paths
 *    - Uses template literals to create dynamic paths
 *    - Each product link is pre-fetched by Next.js
 *    - Enables client-side navigation between products
 */
export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Product List (1-100)
        </h1>

        {/* 
          Responsive Product Grid
          - Uses CSS Grid for layout
          - Responsive columns based on screen size
          - Demonstrates Next.js's built-in CSS support
        */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 100 }, (_, i) => i + 1).map((productId) => (
            <li key={productId}>
              <Link
                href={`/products/${productId}`}
                className="block p-4 bg-white rounded-lg shadow hover:shadow-md hover:bg-blue-50 transition duration-200"
              >
                <p className="text-lg font-medium text-blue-600">Product {productId}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-block bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-800 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

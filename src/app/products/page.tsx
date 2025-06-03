import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Product List (1–100)
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 100 }, (_, i) => i + 1).map((productId) => (
            <li key={productId}>
              <Link
                href={`/products/${productId}`}
                className="block w-full h-full bg-blue-50 hover:bg-blue-100 transition border border-blue-200 rounded-md shadow-sm p-5 text-center"
              >
                <p className="text-xl font-semibold text-blue-700">
                  Product {productId}
                </p>
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

import Link from "next/link";

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Product List (1-100)
                </h1>
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
            </div>
        </main>
    );
}

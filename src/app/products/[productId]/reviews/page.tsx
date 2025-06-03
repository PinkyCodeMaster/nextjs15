import Link from "next/link";
import React from "react";

const reviews = [
    {
        id: 1,
        title: "Review 1",
        productId: 1,
        content: "This is the first review",
    },
    {
        id: 2,
        title: "Review 2",
        productId: 1,
        content: "This is the second review",
    },
    {
        id: 3,
        productId: 1,
        title: "Review 3",
        content: "This is the third review",
    },
];

export default function ReviewsPage() {
    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    All Reviews
                </h1>

                <ul className="space-y-4">
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <Link
                                href={`/products/${review.productId}/reviews/${review.id}`}
                                className="block p-4 rounded-md border bg-gray-50 hover:bg-blue-50 transition"
                            >
                                <h2 className="text-lg font-semibold text-blue-600 mb-1">
                                    {review.title}
                                </h2>
                                <p className="text-gray-700">{review.content}</p>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-6 text-center">
                    <Link
                        href="/products"
                        className="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                    >
                        ← Back to Products
                    </Link>
                </div>
            </div>
        </main>
    );
}

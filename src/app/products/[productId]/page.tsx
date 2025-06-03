import Link from "next/link";
import React from "react";

// Simple function to mock reviews
function getFakeReviews(productId: string) {
    return Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        author: `User${i + 1}`,
        rating: Math.floor(Math.random() * 5) + 1,
        comment: `This is a review #${i + 1} for product ${productId}.`,
    }));
}

type Props = {
    params: Promise<{
        productId: string;
    }>;
};

export default async function ProductPage({ params }: Props) {
    const { productId } = await params;
    const reviews = getFakeReviews(productId);

    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Product Page: {productId}
                </h1>

                <h2 className="text-xl font-semibold text-gray-700 mb-3">Reviews</h2>
                <ul className="space-y-4">
                    {reviews.map((review) => (
                        <li key={review.id} className="border rounded p-4 bg-gray-50">
                            <Link href={`/products/${productId}/reviews/${review.id}`}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium text-gray-900">{review.author}</span>
                                    <span className="text-yellow-500">
                                        {"★".repeat(review.rating)}{" "}
                                        <span className="text-gray-400">
                                            {"☆".repeat(5 - review.rating)}
                                        </span>
                                    </span>
                                </div>
                                <p className="text-gray-700">{review.comment}</p>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-6">
                    <Link href="/products" className="inline-block text-blue-600 hover:underline">
                        ← Back to Products
                    </Link>
                </div>
            </div>
        </main>
    );
}

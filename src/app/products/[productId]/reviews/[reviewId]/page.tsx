import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

type Props = {
    params: Promise<{
        productId: string;
        reviewId: string;
    }>;
};

export default async function ProductReviewPage({ params }: Props) {
    const { productId, reviewId } = await params;

    if (reviewId > "100") {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Review #{reviewId}
                </h1>
                <h2 className="text-lg text-gray-600 mb-6">
                    for Product ID: <span className="font-medium">{productId}</span>
                </h2>

                <p className="text-gray-700 mb-4">
                    This is a placeholder for the detailed content of review <strong>{reviewId}</strong>.
                </p>

                <p className="text-gray-500 text-sm italic mb-6">
                    You can populate this with real review content from your database or API.
                </p>

                <div className="flex gap-4">
                    <Link
                        href={`/products/${productId}`}
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        ← Back to Product
                    </Link>

                    <Link
                        href={`/products/${productId}/reviews`}
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        ← Back to Reviews
                    </Link>

                    <Link
                        href="/products"
                        className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                    >
                        ← Back to Products
                    </Link>
                </div>
            </div>
        </main>
    );
}

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/lib/mockdata";

export default function PaymentClient() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productId = searchParams.get("productId");
    const product = products.find((p) => p.id === productId);

    if (!product) {
        return <div className="text-red-600">Product not found for payment.</div>;
    }

    const handleCompletePayment = () => {
        router.push("/orders");
    };

    return (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Payment</h1>
            <p className="mb-2">Product: <strong>{product.name}</strong></p>
            <p className="mb-6">Price: <span className="font-mono">${product.price}</span></p>
            <button
                onClick={handleCompletePayment}
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
            >
                Complete Payment
            </button>
        </div>
    );
}

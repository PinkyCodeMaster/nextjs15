/**
 * Product Details Page (Server Component)
 *
 * Next.js Concepts Demonstrated:
 *
 * 1. Server Component
 *    - No 'use client' directive
 *    - Can export generateMetadata
 *    - Fetches data and passes to client component
 *
 * 2. Dynamic Metadata
 *    - generateMetadata for SEO
 *    - Uses params from URL
 *
 * 3. Composition Pattern
 *    - Renders <ProductClient /> for interactivity
 *    - Keeps server/client boundaries clear
 *
 * @see https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-client-components
 */

import type { Metadata } from "next";
import { products } from "@/lib/mockdata";
import ProductClient from "@/components/ProductClient";

// Dynamic metadata generation (server only)
export async function generateMetadata({ params }: { params: Promise<{ productId: string }> }): Promise<Metadata> {
  const { productId } = await params;
  const product = products.find((p) => p.id === productId);
  return {
    title: product ? `${product.name} | Next.js Store` : "Product Not Found",
    description: product ? product.description : "Product not found.",
  };
}

export default async function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return <div>Product not found.</div>;
  }
  return <ProductClient product={product} />;
}

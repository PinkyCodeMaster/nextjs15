/**
 * Streaming Example
 *
 * This page demonstrates React and Next.js streaming with Suspense.
 * - Uses <Suspense> to stream parts of the UI as they become ready
 * - Improves performance for slow data or components
 * - Static content is sent immediately, dynamic content streams in
 * - Great for partial hydration and progressive loading
 */
import { Suspense } from "react";

// Simulate a slow server component
async function SlowSection() {
  await new Promise((res) => setTimeout(res, 2000)); // 2s delay
  return <div className="text-green-600">Streamed after 2 seconds (server streaming)</div>;
}

export default function StreamingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Streaming</h1>
      <p className="mb-4">Static content is sent first. The section below streams in after 2 seconds.</p>
      <Suspense fallback={<div className="text-gray-400">Loading slow section...</div>}>
        {/* SlowSection is streamed in after the fallback */}
        <SlowSection />
      </Suspense>
    </main>
  );
} 
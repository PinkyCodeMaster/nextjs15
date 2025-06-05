/**
 * Suspense SSR (Streaming) Example
 *
 * This page demonstrates React's Suspense for streaming server rendering.
 * - Uses <Suspense> to split static and dynamic parts
 * - Static content is sent immediately
 * - Dynamic content is streamed in as it resolves
 * - Improves perceived performance for slow data
 *
 * In Next.js 15, Suspense enables partial hydration and streaming.
 */
import { Suspense } from "react";

// Simulate a slow server component
async function SlowComponent() {
  await new Promise((res) => setTimeout(res, 2000)); // 2s delay
  return <div className="text-green-600">Loaded after 2 seconds (server streamed)</div>;
}

export default function SuspenseSSRPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Suspense SSR (Streaming)</h1>
      <p className="mb-4">Static content is sent first. Dynamic content below streams in after 2 seconds.</p>
      <Suspense fallback={<div className="text-gray-400">Loading slow server content...</div>}>
        {/* SlowComponent is streamed in after the fallback */}
        <SlowComponent />
      </Suspense>
    </main>
  );
} 
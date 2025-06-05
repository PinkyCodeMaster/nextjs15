/**
 * Server-side Rendering (SSR) Example
 *
 * This page is a Server Component, rendered on the server for every request.
 * - No 'use client' directive
 * - Data is always fresh (no caching)
 * - Good for dynamic, personalized, or frequently changing content
 *
 * In Next.js 15, SSR is the default for Server Components with dynamic data.
 */
export default async function SSRPage() {
  // This code runs on the server for every request
  const now = new Date().toLocaleString();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Server-side Rendering (SSR)</h1>
      <p className="mb-4">This page is rendered on the server for every request. The time below updates on each refresh.</p>
      <div className="bg-gray-100 p-4 rounded">Server time: <b>{now}</b></div>
    </main>
  );
} 
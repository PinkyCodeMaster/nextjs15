/**
 * React Server Components (RSC) Example
 *
 * This page is a pure Server Component.
 * - No 'use client' directive
 * - Runs only on the server, never sent to the browser as JS
 * - Can fetch data, access secrets, and use server-only APIs
 * - Cannot use React hooks like useState/useEffect
 * - Great for static or dynamic data that doesn't need interactivity
 *
 * In Next.js 15, RSCs are the default in the app directory.
 */
export default function RSCPage() {
  // This code runs only on the server
  const now = new Date().toLocaleString();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">React Server Component (RSC)</h1>
      <p className="mb-4">This page is a pure server component. No client-side JS is sent for this page.</p>
      <div className="bg-gray-100 p-4 rounded">Server time: <b>{now}</b></div>
      <p className="text-gray-500 text-sm mt-4">Try viewing page source: you&apos;ll see the content is in the HTML, not loaded by JS.</p>
    </main>
  );
} 
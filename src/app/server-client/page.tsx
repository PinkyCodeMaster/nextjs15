/**
 * Server and Client Components Composition Example
 *
 * This page shows how to combine Server and Client Components.
 * - The parent is a Server Component (default)
 * - The child is a Client Component (marked with 'use client')
 * - Server Components can pass props/data to Client Components
 * - Client Components can use hooks and browser APIs
 *
 * In Next.js 15, this pattern is common for mixing static/dynamic and interactive UI.
 */
import Counter from "./Counter";

export default function ServerClientPage() {
  // This code runs on the server
  const now = new Date().toLocaleString();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Server + Client Components</h1>
      <p className="mb-4">The parent is a server component. The counter below is a client component.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">Server time: <b>{now}</b></div>
      {/* Counter is a client component, can use hooks and browser APIs */}
      <Counter />
    </main>
  );
} 
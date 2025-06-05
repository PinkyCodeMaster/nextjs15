/**
 * Client-side Rendering (CSR) Example
 *
 * This page is a Client Component, rendered entirely in the browser.
 * - Marked with 'use client' at the top
 * - Uses React hooks (useState)
 * - No server-side rendering: HTML is minimal, JS takes over
 * - Good for highly interactive, user-specific, or browser-only features
 *
 * In Next.js 15, CSR is opt-in by using 'use client'.
 */
"use client"
import { useState } from "react"

export default function CSRPage() {
  // useState is only available in client components
  const [count, setCount] = useState(0)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Client-side Rendering (CSR)</h1>
      <p className="mb-4">This page is rendered entirely in the browser. The server only sends a shell, and React takes over.</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
        onClick={() => setCount(count + 1)}
      >
        Increment: {count}
      </button>
      <p className="text-gray-500 text-sm">Try disabling JavaScript and reloading: the page will not work!</p>
    </main>
  )
} 
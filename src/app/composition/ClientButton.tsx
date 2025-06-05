/**
 * Client Button Component
 *
 * This is a Client Component, marked with 'use client'.
 * - Can use React hooks (useState)
 * - Runs only in the browser
 * - Used as a child of a Server Component
 */
"use client"
import { useState } from "react"

export default function ClientButton({ label }: { label: string }) {
  const [count, setCount] = useState(0)
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={() => setCount(count + 1)}
    >
      {label} ({count})
    </button>
  )
} 
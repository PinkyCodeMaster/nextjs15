// Next.js 15 Concepts:
// - Route Segments: Default landing page for /dashboard
// - Layout Inheritance: Rendered inside dashboard/layout.tsx
// - Component Composition: Uses cards and grid for dashboard stats

import React from "react"

export default function DashboardPage() {
  return (
    <div className="p-4 bg-gray-100 text-black">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your dashboard. Here&apos;s what&apos;s happening with your business today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold">Total Revenue</h2>
          <p className="text-muted-foreground">
            $12,000.00
          </p>
        </div>
      </div>
    </div>
  )
}

// Next.js 15 Concepts Demonstrated in this Layout:
// - App Router Layouts: Persistent shell for all dashboard routes
// - Parallel Routes: Renders @analytics, @revenue, @notifications in fixed grid slots
// - Sub-navigation: Navigation bar for dashboard subpages (Overview, Analytics, Users, Settings)
// - Grid Layout: Combines persistent panels (parallel routes) with dynamic main content (children)
// - Layout Inheritance: All dashboard subpages render inside this layout

import type React from "react"
import Link from "next/link"
import { DashboardContent } from "@/components/dashboard-content"

export default function DashboardLayout({ children, revenue, notifications, analytics, }: { children: React.ReactNode, revenue: React.ReactNode, notifications: React.ReactNode, analytics: React.ReactNode, }) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-black">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <nav className="px-4 space-y-2 flex flex-col gap-2 text-black">
          <Link href="/dashboard">
            Dashboard
          </Link>
          <Link href="/dashboard/overview">
            Overview
          </Link>
          <Link href="/dashboard/users">
            Users
          </Link>
          <Link href="/dashboard/settings">
            Settings
          </Link>
          <Link href="/dashboard/analytics">
            Analytics
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Main page content */}
        <DashboardContent revenue={revenue} notifications={notifications} analytics={analytics}>
          {children}
        </DashboardContent>
      </div>
    </div>
  )
}

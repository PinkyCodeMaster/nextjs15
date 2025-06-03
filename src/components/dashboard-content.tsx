"use client"

import type React from "react"
import { usePathname } from "next/navigation"           

interface DashboardContentProps {
    children: React.ReactNode
    revenue: React.ReactNode
    notifications: React.ReactNode
    analytics: React.ReactNode
}

export function DashboardContent({ children, revenue, notifications, analytics }: DashboardContentProps) {
    const pathname = usePathname()

    // Only show parallel routes on the main dashboard page
    const showParallelRoutes = pathname === "/dashboard"

    return (
        <div className="flex-1 p-6">
            {/* Main page content */}
            <div className={showParallelRoutes ? "mb-6" : ""}>{children}</div>

            {/* Parallel Routes Grid - Only show on main dashboard */}
            {showParallelRoutes && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Revenue Slot */}
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <h3 className="font-semibold">Revenue</h3>
                        </div>
                        {revenue}
                    </div>

                    {/* Notifications Slot */}
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <h3 className="font-semibold">Notifications</h3>
                        </div>
                        {notifications}
                    </div>

                    {/* Analytics Slot */}
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <h3 className="font-semibold">Analytics</h3>
                        </div>
                        {analytics}
                    </div>
                </div>
            )}
        </div>
    )
}

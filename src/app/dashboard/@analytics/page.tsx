// Next.js 15 Concepts:
// - Parallel Route: Always rendered in the dashboard grid
// - Internal Navigation: Links to an archived analytics section

import Link from "next/link"

export default function ArchivedAnalyticsPage() {
  return (
    <div className="space-y-4 text-black">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Archived Analytics</h3>
        <Link href="/dashboard/archived">
          Link to archived
        </Link>
      </div>

      <div className="space-y-3">
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="font-medium text-sm">Q3 2023 Report</div>
          <div className="text-xs text-muted-foreground">Archived 3 months ago</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="font-medium text-sm">Q2 2023 Report</div>
          <div className="text-xs text-muted-foreground">Archived 6 months ago</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="font-medium text-sm">Q1 2023 Report</div>
          <div className="text-xs text-muted-foreground">Archived 9 months ago</div>
        </div>
      </div>
    </div>
  )
}

// Archived analytics page (parallel route)
// - Displays archived analytics info
// - Provides a link back to the main dashboard

// Next.js 15 Concepts:
// - Parallel Route Subpage: Nested route inside @analytics
// - Navigation: Link back to /dashboard

import Link from "next/link";

export default function ArchivedAnalytics() {
  return (
    <div className="p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Archived Analytics</h2>
      <nav className="mb-4">
        <Link href="/dashboard" className="text-blue-400 hover:underline">Back to Dashboard</Link>
      </nav>
      <p>This is the archived analytics section of the dashboard.</p>
    </div>
  );
} 
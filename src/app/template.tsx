/**
 * Template Component
 * 
 * Next.js Concepts Demonstrated:
 * 
 * 1. Templates vs Layouts
 *    - Templates create a new instance on each navigation
 *    - State is reset between page navigations
 *    - Perfect for UI that needs to be fresh on each visit
 * 
 * 2. Client Components in Templates
 *    - 'use client' directive for interactivity
 *    - State management with useState
 *    - useEffect for side effects
 * 
 * 3. Navigation Events
 *    - usePathname to detect route changes
 *    - State reset on navigation
 *    - Cleanup on unmount
 * 
 * Key Differences from Layouts:
 * - Templates create new instances on navigation
 * - State is not preserved between pages
 * - Perfect for modals, toasts, or any UI that needs fresh state
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates
 */

"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();

  // Reset count when pathname changes
  useEffect(() => {
    console.log("Template mounted/updated for path:", pathname);
    setCount(0);
  }, [pathname]);

  return (
    <div className="relative">
      {/* Template-specific UI that resets on navigation */}
      <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 z-50">
        <div className="text-sm text-gray-600 mb-2">Template Counter (resets on navigation)</div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCount(c => c + 1)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Increment
          </button>
          <span className="text-lg font-bold text-gray-900">{count}</span>
        </div>
      </div>

      {/* Page content */}
      <div className="min-h-screen">
        {children}
      </div>
    </div>
  );
} 
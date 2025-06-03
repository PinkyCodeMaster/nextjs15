/**
 * (auth) Route Group Layout
 *
 * This layout is intentionally minimal to demonstrate that
 * each route group or segment can have its own independent layout.
 *
 * - No header, no footer, no navigation
 * - Only wraps auth pages with a centered container
 * - Shows contrast with the more complex product layout
 *
 * Next.js Concepts:
 * - Multiple independent nested layouts
 * - Route group-specific UI/UX
 * - Layout inheritance and isolation
 */

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
} 
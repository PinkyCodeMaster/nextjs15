import type { Metadata } from "next";

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
 * - Static metadata for auth pages
 */

// Static metadata for all auth pages
export const metadata: Metadata = {
  title: {
    template: '%s | Next.js Auth',
    default: 'Authentication | Next.js Auth',
  },
  description: 'Secure authentication for Next.js applications',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: 'Next.js Authentication',
    description: 'Secure authentication for Next.js applications',
    images: [
      {
        url: 'https://example.com/auth-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Next.js Authentication',
      },
    ],
  },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
} 
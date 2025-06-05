"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Home Page Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. App Router - This is a page component in the app directory, automatically routed to '/'
 * 2. Server Component - By default, all components in the app directory are React Server Components
 * 3. Link Component - Next.js's built-in client-side navigation component
 *    - Pre-fetches pages in the background
 *    - Handles client-side routing without full page reloads
 *    - Maintains app state between navigations
 * 
 * File-based Routing:
 * - This file is located at src/app/page.tsx
 * - Automatically becomes the root route (/)
 * - No need for explicit route configuration
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Next.js Rendering Examples</h1>
      <p className="text-xl">Learn about different rendering strategies in Next.js</p>
    </main>
  );
}

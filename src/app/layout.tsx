/**
 * Root Layout Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. Root Layout
 *    - Required in app directory
 *    - Wraps all pages in the application
 *    - Must contain html and body tags
 *    - Can include global styles and metadata
 * 
 * 2. Layout Inheritance
 *    - This layout is the parent of all other layouts
 *    - Child layouts can be nested inside this one
 *    - Layouts can be shared across multiple pages
 *    - Each segment can have its own layout
 * 
 * 3. Persistent UI
 *    - Header and footer remain across page navigations
 *    - Only the page content changes
 *    - Maintains state and user context
 *    - Improves performance by not re-rendering shared elements
 * 
 * 4. Metadata
 *    - Can define metadata for all pages
 *    - Can be overridden by child layouts/pages
 *    - Supports dynamic metadata generation
 *    - SEO-friendly by default
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts
 */

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "@/styles/globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Learning App",
  description: "A comprehensive Next.js learning application",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 
          Header
          - Persistent across all pages
          - Contains navigation and branding
          - Can include user context
        */}
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-xl font-bold text-gray-900">Next.js App</span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-blue-500">
                    Home
                  </a>
                  <a href="/products" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                    Products
                  </a>
                  <a href="/docs" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                    Docs
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <a href="/login" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Sign in
                </a>
              </div>
            </div>
          </nav>
        </header>

        {/* 
          Main Content
          - Changes based on the current route
          - Wrapped by the layout
          - Can be nested with other layouts
        */}
        <main>{children}</main>

        {/* 
          Footer
          - Persistent across all pages
          - Contains additional navigation
          - Can include social links and copyright
        */}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/features" className="text-base text-gray-500 hover:text-gray-900">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" className="text-base text-gray-500 hover:text-gray-900">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/docs" className="text-base text-gray-500 hover:text-gray-900">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="/help" className="text-base text-gray-500 hover:text-gray-900">
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/about" className="text-base text-gray-500 hover:text-gray-900">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-base text-gray-500 hover:text-gray-900">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8">
              <p className="text-base text-gray-400 text-center">
                &copy; 2024 Next.js Learning App. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

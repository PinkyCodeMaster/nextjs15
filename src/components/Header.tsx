"use client";

import MobileMenu from "@/components/MobileMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * Header Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. Client Components
 *    - Marked with 'use client'
 *    - Uses client-side hooks (usePathname)
 *    - Interactive navigation
 * 
 * 2. Active Link Pattern
 *    - Uses usePathname for current route
 *    - Dynamic styling based on active state
 *    - Visual feedback for current page
 * 
 * 3. Responsive Design
 *    - Mobile-first approach
 *    - Conditional rendering
 *    - Breakpoint-based layouts
 */

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/docs", label: "Docs" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              >
                Next.js App
              </Link>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${isActive(link.href)
                    ? "text-gray-900 border-blue-500"
                    : "text-gray-500 hover:text-gray-900 hover:border-gray-300 border-transparent"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/login"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
} 
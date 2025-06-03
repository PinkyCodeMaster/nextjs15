"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Next.js App
              </span>
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8">
              <Link
                href="/"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/docs"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Docs
              </Link>
              <Link
                href="/blog"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>
        <div className="py-6 px-5 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/login"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="text-base font-medium text-white bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 
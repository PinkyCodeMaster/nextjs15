/**
 * Root Layout Component
 * 
 * Next.js Concepts Demonstrated:
 * 1. App Router & File-based Routing
 *    - Root layout.tsx defines the base layout for all pages
 *    - File-based routing with app directory structure
 *    - Automatic route handling based on file system
 * 
 * 2. Layouts & Templates
 *    - Root layout wraps all pages
 *    - Persistent UI elements (header/footer)
 *    - Shared components across routes
 *    - Nested layouts support
 * 
 * 3. Client & Server Components
 *    - Root layout is a Server Component by default
 *    - MobileMenu is a Client Component (marked with 'use client')
 *    - Optimal component rendering strategy
 * 
 * 4. Metadata API
 *    - Root metadata configuration
 *    - SEO optimization
 *    - Dynamic metadata support
 *    - Metadata inheritance
 *    - OpenGraph and Twitter cards
 *    - Icons and manifest
 *    - Viewport and theme color
 * 
 * 5. Font Optimization
 *    - Using next/font for optimized font loading
 *    - Font subsetting
 *    - Variable fonts support
 *    - Zero layout shift
 * 
 * 6. Route Groups
 *    - (auth) group for authentication pages
 *    - Logical organization without affecting URLs
 *    - Shared layouts within groups
 * 
 * 7. Link Component
 *    - Client-side navigation
 *    - Automatic code-splitting
 *    - Prefetching
 *    - Scroll restoration
 * 
 * 8. Responsive Design
 *    - Mobile-first approach
 *    - Responsive navigation
 *    - Breakpoint-based layouts
 *    - Touch-friendly interfaces
 * 
 * 9. Performance Optimization
 *    - Vercel Speed Insights
 *    - Vercel Analytics
 *    - Optimized font loading
 *    - Efficient component rendering
 * 
 * 10. Styling
 *     - Tailwind CSS utility classes
 *     - Responsive design patterns
 *     - Dark mode support
 *     - Custom animations
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 */

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "@/styles/globals.css";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Root metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    template: '%s | Next.js Learning App',
    default: 'Next.js Learning App - Master Modern Web Development',
  },
  description: 'A comprehensive Next.js learning application demonstrating modern web development concepts and best practices.',
  keywords: ['Next.js', 'React', 'Web Development', 'Learning', 'Tutorial'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Next.js Learning App',
    title: 'Next.js Learning App - Master Modern Web Development',
    description: 'A comprehensive Next.js learning application demonstrating modern web development concepts and best practices.',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Next.js Learning App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Learning App - Master Modern Web Development',
    description: 'A comprehensive Next.js learning application demonstrating modern web development concepts and best practices.',
    creator: '@yourusername',
    images: ['https://your-domain.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
  alternates: {
    canonical: 'https://your-domain.com',
    languages: {
      'en-US': 'https://your-domain.com/en-US',
      'de-DE': 'https://your-domain.com/de-DE',
    },
  },
  category: 'technology',
};

// Separate viewport configuration
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
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
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Next.js App
                  </Link>
                </div>
                <div className="hidden md:ml-10 md:flex md:space-x-8">
                  <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-blue-500">
                    Home
                  </Link>
                  <Link href="/products" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent">
                    Products
                  </Link>
                  <Link href="/docs" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent">
                    Docs
                  </Link>
                  <Link href="/blog" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent">
                    Blog
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-4">
                <Link href="/login" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sign in
                </Link>
                <Link href="/register" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Get Started
                </Link>
              </div>
              <div className="flex items-center md:hidden">
                <MobileMenu />
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
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>

        {/* 
          Footer
          - Persistent across all pages
          - Contains additional navigation
          - Can include social links and copyright
        */}
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/features" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/releases" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                      Releases
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/docs" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/help" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/community" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                      Community
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/security" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-base text-gray-400">
                  &copy; 2024 Next.js Learning App. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <Link href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

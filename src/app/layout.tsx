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
  metadataBase: new URL("https://your-domain.com"),
  title: {
    template: "%s | Next.js Learning App",
    default: "Next.js Learning App - Master Modern Web Development",
  },
  description: "A comprehensive Next.js learning application demonstrating modern web development concepts and best practices.",
  keywords: ["Next.js", "React", "Web Development", "Learning", "Tutorial"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Next.js Learning App",
    title: "Next.js Learning App - Master Modern Web Development",
    description: "A comprehensive Next.js learning application demonstrating modern web development concepts and best practices.",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Next.js Learning App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Learning App - Master Modern Web Development",
    description: "A comprehensive Next.js learning application demonstrating modern web development concepts and best practices.",
    creator: "@yourusername",
    images: ["https://your-domain.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
  alternates: {
    canonical: "https://your-domain.com",
    languages: {
      "en-US": "https://your-domain.com/en-US",
      "de-DE": "https://your-domain.com/de-DE",
    },
  },
  category: "technology",
};

// Separate viewport configuration
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="min-h-[calc(100vh-4rem)] container mx-auto py-4 ">{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

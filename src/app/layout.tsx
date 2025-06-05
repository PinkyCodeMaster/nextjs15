import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "./Header";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Rendering Examples",
  description: "Learn about different rendering strategies in Next.js",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header is shown on every page for navigation */}
        <Header />
        <nav className='flex justify-between items-center p-4'>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/profile">Profile</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}

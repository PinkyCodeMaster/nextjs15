/**
 * About Page - Server Component Example
 * 
 * This is a Server Component by default in Next.js 13+
 * Key characteristics:
 * - No 'use client' directive
 * - Runs on the server only
 * - Can use server-only features
 * - Better performance (no JS sent to client)
 * - Can't use hooks or browser APIs
 * - Console.log appears in server logs
 * 
 * Server Components are ideal for:
 * - Data fetching
 * - Accessing backend resources
 * - Keeping sensitive data on server
 * - Reducing client-side JavaScript
 */
import React from "react"

export default function AboutPage() {
    // this will log out on the server side and on the client side
    console.log("AboutPage from server");
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-2xl font-bold'>AboutPage {new Date().toLocaleTimeString()}</h1>
        </div>
    )
}

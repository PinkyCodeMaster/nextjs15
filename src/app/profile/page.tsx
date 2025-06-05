/**
 * Profile Page - Client Component Example
 * 
 * This is a Client Component marked with 'use client'
 * Key characteristics:
 * - Has 'use client' directive at the top
 * - Runs on the client (browser)
 * - Can use React hooks (useState, useEffect, etc.)
 * - Can use browser APIs
 * - Console.log appears in browser console
 * - Can handle user interactions
 * 
 * Client Components are ideal for:
 * - Interactive UI elements
 * - Event handlers
 * - Browser APIs
 * - State management
 * - Client-side effects
 */
'use client'
import React, { useState } from 'react'

export default function ProfilePage() {
    const [count, setCount] = useState(0);
    // this will log out on the client side only 
    console.log("ProfilePage from the client");
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-2xl font-bold'>ProfilePage</h1>
            <p className='text-lg'>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} className='bg-blue-500 text-white p-2 rounded-md'>Increment</button>
        </div>
    )
}

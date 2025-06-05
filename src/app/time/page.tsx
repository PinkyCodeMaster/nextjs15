/**
 * Time Page - Dynamic Server-Side Rendering Example
 * 
 * This page demonstrates dynamic server-side rendering where:
 * - Content is generated on each request
 * - No caching is applied
 * - Each visit gets fresh data
 * - Time updates on every page load
 * 
 * Key characteristics:
 * - Server Component (no 'use client')
 * - Dynamic content generation
 * - No client-side JavaScript needed
 * - SEO-friendly (content in initial HTML)
 * - Fresh data on every request
 */
export default function TimePage() {
    // This will be executed on the server for each request
    const currentTime = new Date().toLocaleTimeString();
    const serverTime = new Date().toISOString();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-4">Dynamic Server Rendering</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Current Time</h2>
                    <p className="text-2xl text-blue-600">{currentTime}</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Server Time (ISO)</h2>
                    <p className="text-sm text-gray-600">{serverTime}</p>
                </div>

                <div className="text-sm text-gray-500 mt-4">
                    <p>This page is rendered on the server for each request.</p>
                    <p>Try refreshing to see the time update!</p>
                </div>
            </div>
        </div>
    );
} 
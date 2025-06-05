/**
 * API Route Placement Example
 * 
 * This shows the correct way to place API routes alongside pages
 * 
 * URL: /profile/api
 * 
 * IMPORTANT: Route Conflict Prevention
 * - This works because it's in a subdirectory (/api)
 * - CANNOT have both:
 *   /profile/
 *   ├── page.tsx    // Handles /profile
 *   └── route.ts    // ❌ CONFLICT! Can't handle same path
 * 
 * CORRECT Structure:
 * /profile/
 *   ├── page.tsx    // Handles /profile
 *   └── api/        // ✅ Safe! Different path
 *       └── route.ts // Handles /profile/api
 * 
 * HEADERS HANDLING:
 * Two ways to access headers:
 * 1. request.headers (Web API Headers object)
 *    - Use when you need to modify headers
 *    - More flexible but requires manual handling
 * 
 * 2. headers() from next/headers
 *    - Read-only access to headers
 *    - More convenient for just reading
 *    - Can't be used in Client Components
 * 
 * RESPONSE TYPES:
 * - Use new Response() for custom responses
 * - Set Content-Type header to specify format:
 *   - text/html for HTML
 *   - application/json for JSON
 * - Can also use NextResponse.json() for JSON responses
 */
import { headers } from "next/headers";

export async function GET() {
    // Method 1: Using request.headers (Web API)
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));

    // Method 2: Using next/headers (Read-only)
    const headerList = await headers();
    console.log(headerList.get("Authorization"));

    // Example of returning HTML response
    return new Response("<h1>Hello, world! from profile</h1>", {
        headers: {
            "Content-Type": "text/html",
        },
    });

    // Example of returning JSON response:
    // return new Response(JSON.stringify({ message: "Hello" }), {
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });

    // Or using NextResponse.json():
    // return NextResponse.json({ message: "Hello" });
}


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
 * COOKIES:
 * Three ways to handle cookies:
 * 1. request.cookies (NextRequest)
 *    - Read-only access to cookies
 *    - Convenient for reading specific cookies
 *    - Example: request.cookies.get("theme")
 * 
 * 2. cookies() from next/headers
 *    - Server-side cookie store
 *    - Can read and set cookies
 *    - Example: cookies().set("name", "value")
 * 
 * 3. Set-Cookie header (Manual)
 *    - Direct header manipulation
 *    - Use for complex cookie settings
 *    - Example: "Set-Cookie: name=value; Path=/; HttpOnly"
 * 
 * RESPONSE TYPES:
 * - Use new Response() for custom responses
 * - Set Content-Type header to specify format:
 *   - text/html for HTML
 *   - application/json for JSON
 * - Can also use NextResponse.json() for JSON responses
 */
import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // Method 1: Using request.headers (Web API)
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));

    // Method 2: Using next/headers (Read-only)
    const headerList = await headers();
    console.log(headerList.get("Authorization"));

    // Reading cookies using NextRequest
    const theme = request.cookies.get("theme");
    console.log("Theme:", theme);

    // Using cookies() from next/headers
    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", "10");
    console.log("CookieStore:", cookieStore.get("resultsPerPage"));

    return new Response("<h1>Hello, world! from profile</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark; Path=/; HttpOnly"
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


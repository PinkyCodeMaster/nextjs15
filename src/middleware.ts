/**
 * Next.js Middleware
 * 
 * Middleware runs before any request is completed, allowing you to:
 * - Modify request/response headers
 * - Set cookies
 * - Redirect/rewrite requests
 * - Add custom logic before page loads
 * 
 * KEY FEATURES:
 * 1. Request/Response Modification
 *    - Add/modify headers
 *    - Set cookies
 *    - Change response status
 * 
 * 2. Redirects & Rewrites
 *    - Redirect to different URLs
 *    - Rewrite URLs internally
 *    - Handle path-based routing
 * 
 * 3. Matcher Configuration
 *    - Control which paths middleware runs on
 *    - Use regex patterns
 *    - Exclude specific paths
 * 
 * BEST PRACTICES:
 * - Keep middleware lightweight
 * - Use matchers to limit scope
 * - Handle errors gracefully
 * - Consider performance impact
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Create a response object that will be modified
    const response = NextResponse.next();

    // Example 1: Cookie Management
    const themePreference = request.cookies.get("theme");
    if (!themePreference) {
        response.cookies.set("theme", "dark", {
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            httpOnly: true
        });
    }

    // Example 2: Header Modification
    response.headers.set("custom-header", "custom-value");
    response.headers.set("x-middleware-cache", "no-cache");

    // Example 3: Path-based Logic
    if (request.nextUrl.pathname.startsWith("/api/")) {
        response.headers.set("x-api-version", "v1");
    }

    return response;

    // Example 4: Redirect
    // if (request.nextUrl.pathname === "/old-path") {
    //     return NextResponse.redirect(new URL("/new-path", request.url));
    // }

    // Example 5: Rewrite
    // if (request.nextUrl.pathname === "/profile") {
    //     return NextResponse.rewrite(new URL("/hello", request.url));
    // }

    // Example 6: Custom Response
    // return new NextResponse("Custom Response", {
    //     status: 200,
    //     headers: {
    //         "Content-Type": "text/plain",
    //     },
    // });
}

// Configure which paths the middleware runs on
export const config = {
    matcher: [
        // Match all paths except:
        // - api routes
        // - static files
        // - _next internal routes
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
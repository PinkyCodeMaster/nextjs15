/**
 * API Version Management and Redirects
 * 
 * This file demonstrates how to handle API versioning and redirects in Next.js 15
 * 
 * REDIRECT METHODS:
 * 1. Using NextResponse.redirect()
 *    - Most common method
 *    - Preserves request method and headers
 *    - Example: redirecting GET /api/v1/users to /api/v2/users
 * 
 * 2. Using Response.redirect()
 *    - Web standard API
 *    - More control over status codes
 *    - Example: redirecting with 308 Permanent Redirect
 * 
 * 3. Using rewrite()
 *    - Internal redirect without changing URL
 *    - Useful for gradual migration
 *    - Example: silently routing v1 to v2 implementation
 * 
 * BEST PRACTICES:
 * - Use 308 for permanent redirects (v1 to v2)
 * - Use 307 for temporary redirects
 * - Include deprecation headers
 * - Document sunset dates
 * - Consider gradual rollout
 */
import { NextResponse } from "next/server";

export async function GET() {
    // Method 1: Using NextResponse.redirect
    return NextResponse.redirect(new URL("/api/v2/users", process.env.NEXT_PUBLIC_BASE_URL), {
        status: 308, // Permanent Redirect
        headers: {
            "Deprecation": "true",
            "Sunset": "2025-01-01T00:00:00Z",
            "Link": "</api/v2/users>; rel=successor-version"
        }
    });

    // Method 2: Using Response.redirect
    // return Response.redirect(new URL("/api/v2/users", process.env.NEXT_PUBLIC_BASE_URL), 308);

    // Method 3: Using rewrite (internal redirect)
    // return NextResponse.rewrite(new URL("/api/v2/users", process.env.NEXT_PUBLIC_BASE_URL));
}

// Handle other methods
export async function POST() {
    return NextResponse.redirect(new URL("/api/v2/users", process.env.NEXT_PUBLIC_BASE_URL), 308);
}

export async function PUT() {
    return NextResponse.redirect(new URL("/api/v2/users", process.env.NEXT_PUBLIC_BASE_URL), 308);
}

export async function DELETE() {
    return NextResponse.redirect(new URL("/api/v2/users", process.env.NEXT_PUBLIC_BASE_URL), 308);
} 
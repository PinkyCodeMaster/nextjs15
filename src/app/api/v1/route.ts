/**
 * API Versioning and Redirects
 * 
 * This demonstrates how to handle API versioning and redirects in Next.js 15
 * 
 * REDIRECTS:
 * 1. Using NextResponse.redirect()
 *    - For permanent redirects (301)
 *    - For temporary redirects (302)
 *    - Can specify status code
 * 
 * 2. Using Response.redirect()
 *    - Web standard API
 *    - Defaults to 302
 *    - Less flexible than NextResponse
 * 
 * BEST PRACTICES:
 * - Use 301 for permanent redirects (v1 -> v2)
 * - Use 302 for temporary redirects
 * - Always include version in URL path
 * - Document deprecation in response headers
 * - Consider adding deprecation notice in response body
 */
import { NextResponse } from "next/server";

export async function GET() {
    // Method 1: Using NextResponse (Recommended)
    return NextResponse.redirect(new URL("/api/v2", process.env.NEXT_PUBLIC_BASE_URL), {
        status: 301, // Permanent redirect
        headers: {
            "Deprecation": "true",
            "Sunset": "2024-12-31T00:00:00Z",
            "Link": "</api/v2>; rel=successor-version"
        }
    });

    // Method 2: Using Response (Web API)
    // return Response.redirect(new URL("/api/v2", process.env.NEXT_PUBLIC_BASE_URL), 301);
}

export async function POST() {
    // Example of redirecting with a message
    return NextResponse.json(
        { message: "This API version is deprecated. Please use v2." },
        {
            status: 301,
            headers: {
                "Location": "/api/v2",
                "Deprecation": "true"
            }
        }
    );
} 
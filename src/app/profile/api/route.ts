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
 */


export async function GET() {
    return new Response("Hello, world! from profile");
}
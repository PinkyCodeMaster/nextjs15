/**
 * Nested API Route Example
 * 
 * This shows how to create nested API routes in Next.js 15
 * 
 * URL Structure:
 * /dashboard/users
 * 
 * Note: This works because:
 * - /dashboard can have its own page.tsx
 * - /dashboard/users is a separate route
 * - No conflict between page and API routes at different levels
 * 
 * Example Structure:
 * /dashboard/
 *   ├── page.tsx         // Handles /dashboard
 *   └── users/
 *       └── route.ts     // Handles /dashboard/users
 */

export async function GET() {
    return new Response("Hello, world! from users");
}

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# nextjs15

# Next.js 15 API Routes Guide

## Route Structure & Conflicts

### ❌ Route Conflicts
You cannot have both `page.tsx` and `route.ts` in the same directory:
```
/hello/
  ├── page.tsx    // Handles /hello
  └── route.ts    // Also tries to handle /hello - CONFLICT!
```

### ✅ Correct Route Organization
```
src/app/
├── hello/
│   └── route.ts         // /hello
├── profile/
│   ├── page.tsx         // /profile
│   └── api/
│       └── route.ts     // /profile/api
└── dashboard/
    ├── page.tsx         // /dashboard
    └── users/
        └── route.ts     // /dashboard/users
```

## Basic API Route Examples

### Simple GET Request
```typescript
// src/app/hello/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    return new Response("Hello, world!");
}
```

### Nested API Route
```typescript
// src/app/dashboard/users/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    return new Response("Hello, world! from users");
}
```

### API Route with Page Route
```typescript
// src/app/profile/api/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    return new Response("Hello, world! from profile");
}
```

## Key Points

1. **Route Conflicts**
   - Can't have `page.tsx` and `route.ts` in same directory
   - Each route must handle a unique URL path

2. **Nested Routes**
   - API routes can be nested under page routes
   - Each level in the path can have its own route handler

3. **Basic GET Requests**
   - Return Response objects
   - Can be simple text or JSON
   - Accessible via browser or fetch

4. **Route Organization**
   - Keep API routes in `/api` subdirectories
   - Use clear, hierarchical structure
   - Separate concerns between pages and APIs

## Common Patterns

### API Route with JSON Response
```typescript
export async function GET() {
    return NextResponse.json({ message: "Hello, world!" });
}
```

### API Route with Status Code
```typescript
export async function GET() {
    return new Response("Not Found", { status: 404 });
}
```

### API Route with Headers
```typescript
export async function GET() {
    return new Response("Hello", {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store'
        }
    });
}
```

## Best Practices

1. **Organization**
   - Keep API routes in `/api` directories
   - Use clear naming conventions
   - Separate concerns

2. **Error Handling**
   - Always return appropriate status codes
   - Include error messages in responses
   - Handle edge cases

3. **Performance**
   - Use appropriate caching headers
   - Keep responses minimal
   - Handle large payloads efficiently

4. **Security**
   - Validate input
   - Sanitize output
   - Use proper authentication

## Testing Routes

You can test these routes using:
- Browser: Visit the URL directly
- cURL: `curl http://localhost:3000/api/hello`
- Fetch: 
```javascript
fetch('/api/hello')
  .then(res => res.text())
  .then(data => console.log(data));
```

## Next Steps

1. Add more HTTP methods (POST, PUT, DELETE)
2. Implement error handling
3. Add authentication
4. Set up database integration
5. Add request validation
6. Implement rate limiting

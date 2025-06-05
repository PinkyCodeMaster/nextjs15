/**
 * Rendering Lifecycle in React Server Components (RSCs)
 *
 * This page explains the lifecycle of a Server Component in Next.js 15.
 * - Server Components are rendered on the server, never in the browser
 * - They run on every request (unless statically rendered/cached)
 * - No React lifecycle methods (like useEffect/useLayoutEffect)
 * - No browser APIs (like window/document)
 * - Good for data fetching, templating, and static/dynamic content
 */
export default function LifecyclePage() {
  const now = new Date().toLocaleString();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">RSC Rendering Lifecycle</h1>
      <p className="mb-4">
        Server Components run on the server for each request (unless cached). No browser APIs or lifecycle hooks.
      </p>
      <div className="bg-gray-100 p-4 rounded">Rendered at: <b>{now}</b></div>
      <ul className="mt-4 text-left text-sm text-gray-600">
        <li>• No <code>useEffect</code> or <code>useLayoutEffect</code></li>
        <li>• No <code>window</code> or <code>document</code></li>
        <li>• Can fetch data directly</li>
        <li>• Can return JSX as usual</li>
      </ul>
    </main>
  );
} 
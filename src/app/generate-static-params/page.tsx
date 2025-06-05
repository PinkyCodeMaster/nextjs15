/**
 * generateStaticParams Example
 *
 * This page demonstrates how to statically generate a subset of dynamic routes at build time.
 * - Uses generateStaticParams to pre-render some paths
 * - Other paths are rendered on-demand and cached
 * - Good for blogs, docs, or e-commerce product pages
 */
export default function GenerateStaticParamsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">generateStaticParams</h1>
      <p className="mb-4">
        Use <code>generateStaticParams</code> in dynamic routes to pre-render a subset of pages at build time.
      </p>
      <ul className="text-left text-sm text-gray-600">
        <li>• Pre-rendered pages are fast and cached</li>
        <li>• Other pages are generated on-demand</li>
      </ul>
    </main>
  );
} 
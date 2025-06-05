/**
 * Static Rendering Example
 *
 * This page is statically rendered at build time.
 * - Uses export const dynamic = 'force-static'
 * - Content is generated once and cached until next build
 * - Fastest possible load, but not dynamic
 * - Good for marketing, docs, blogs, etc.
 */
export const dynamic = "force-static";

export default function StaticPage() {
  const now = new Date().toLocaleString();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Static Rendering</h1>
      <p className="mb-4">
        This page is statically rendered at build time. The time below will not update until the next build.
      </p>
      <div className="bg-gray-100 p-4 rounded">Build time: <b>{now}</b></div>
      <p className="text-gray-500 text-sm mt-4">Try rebuilding the app to see the time update.</p>
    </main>
  );
} 
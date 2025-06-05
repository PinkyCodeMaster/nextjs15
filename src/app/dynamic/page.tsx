/**
 * Dynamic Rendering Example
 *
 * This page is always rendered dynamically on the server.
 * - Uses export const dynamic = 'force-dynamic'
 * - Content is generated on every request
 * - Good for highly dynamic or personalized content
 */
export const dynamic = "force-dynamic";

export default function DynamicPage() {
  const now = new Date().toLocaleString();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Dynamic Rendering</h1>
      <p className="mb-4">
        This page is always rendered dynamically on the server. The time below updates on every refresh.
      </p>
      <div className="bg-gray-100 p-4 rounded">Server time: <b>{now}</b></div>
    </main>
  );
} 
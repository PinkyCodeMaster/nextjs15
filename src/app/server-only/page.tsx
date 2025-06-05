/**
 * Server-only Code Example
 *
 * This page demonstrates code that only runs on the server.
 * - Can use server-only APIs, secrets, and environment variables
 * - Never sent to the browser
 * - Good for secure logic, data fetching, and backend integration
 */
export default function ServerOnlyPage() {
  // This code runs only on the server
  const secret = process.env.SECRET_KEY || "not set";
  const now = new Date().toLocaleString();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Server-only Code</h1>
      <p className="mb-4">This page can access secrets and server-only APIs. The secret below is never sent to the browser.</p>
      <div className="bg-gray-100 p-4 rounded mb-2">Server time: <b>{now}</b></div>
      <div className="bg-yellow-100 p-4 rounded">SECRET_KEY: <b>{secret}</b></div>
      <p className="text-gray-500 text-sm mt-4">Try viewing page source: the secret is rendered on the server, not exposed to JS bundles.</p>
    </main>
  );
} 
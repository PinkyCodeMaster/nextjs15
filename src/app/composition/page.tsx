/**
 * Server and Client Composition Patterns Example
 *
 * This page demonstrates how to compose server and client components together.
 * - Server components fetch data, handle logic, and pass props to client components
 * - Client components handle interactivity and browser APIs
 * - This pattern enables optimal performance and user experience
 */
import ClientButton from "./ClientButton";

export default function CompositionPage() {
  // This code runs on the server
  const now = new Date().toLocaleString();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Server & Client Composition</h1>
      <p className="mb-4">The parent is a server component. The button below is a client component.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">Server time: <b>{now}</b></div>
      {/* ClientButton is a client component, can use hooks and browser APIs */}
      <ClientButton label="Click me!" />
    </main>
  );
} 
/**
 * dynamicParams Example
 *
 * This page explains dynamicParams in Next.js.
 * - Used in dynamic routes to control which params are statically generated
 * - If dynamicParams is true, any param can be rendered on-demand
 * - If false, only params returned by generateStaticParams are allowed
 */
export default function DynamicParamsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">dynamicParams</h1>
      <p className="mb-4">
        <code>dynamicParams</code> controls which dynamic routes are allowed to be generated on-demand.
      </p>
      <ul className="text-left text-sm text-gray-600">
        <li>• <b>true</b>: Any param can be rendered on-demand</li>
        <li>• <b>false</b>: Only params from <code>generateStaticParams</code> are allowed</li>
      </ul>
    </main>
  );
} 
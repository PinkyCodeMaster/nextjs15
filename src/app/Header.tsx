/**
 * Header Navigation for Rendering Demos
 *
 * This component provides navigation links to all rendering demo pages.
 * - Uses Next.js <a> tags for navigation (no extra packages)
 * - Placed at the top of every page via the layout
 * - Helps new devs explore each rendering strategy
 */
export default function Header() {
  return (
    <nav style={{ padding: 16, borderBottom: "1px solid #eee", marginBottom: 24 }}>
      {/* Each link points to a different rendering demo page */}
      <a href="/csr" style={{ marginRight: 12 }}>CSR</a>
      <a href="/ssr" style={{ marginRight: 12 }}>SSR</a>
      <a href="/suspense-ssr" style={{ marginRight: 12 }}>Suspense SSR</a>
      <a href="/rsc" style={{ marginRight: 12 }}>RSC</a>
      <a href="/server-client" style={{ marginRight: 12 }}>Server & Client</a>
      <a href="/lifecycle" style={{ marginRight: 12 }}>Lifecycle</a>
      <a href="/static" style={{ marginRight: 12 }}>Static</a>
      <a href="/dynamic" style={{ marginRight: 12 }}>Dynamic</a>
      <a href="/generate-static-params" style={{ marginRight: 12 }}>generateStaticParams</a>
      <a href="/dynamic-params" style={{ marginRight: 12 }}>dynamicParams</a>
      <a href="/streaming" style={{ marginRight: 12 }}>Streaming</a>
      <a href="/composition" style={{ marginRight: 12 }}>Composition</a>
      <a href="/server-only" style={{ marginRight: 12 }}>Server-only</a>
    </nav>
  );
} 
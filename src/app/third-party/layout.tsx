import ThirdPartyHeader from "./Header";

/**
 * Layout for all third-party package demo pages.
 * - Includes the header for navigation
 */
export default function ThirdPartyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ThirdPartyHeader />
      <div style={{ padding: 24 }}>{children}</div>
    </div>
  );
} 
/**
 * Header for Third-Party Package Demos
 * - Simple navigation for each package demo
 */
export default function ThirdPartyHeader() {
  return (
    <nav style={{ padding: 16, borderBottom: "1px solid #eee", marginBottom: 24 }}>
      <a href="/third-party/lodash" style={{ marginRight: 12 }}>Lodash (Server)</a>
      <a href="/third-party/react-chartjs" style={{ marginRight: 12 }}>Chart.js (Client)</a>
      <a href="/third-party/date-fns" style={{ marginRight: 12 }}>date-fns (Server)</a>
      <a href="/third-party/react-toastify" style={{ marginRight: 12 }}>Toastify (Client)</a>
    </nav>
  );
} 
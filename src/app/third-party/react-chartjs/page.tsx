/**
 * Chart.js Demo Page
 * - Uses a client component to load Chart.js, since { ssr: false } is not allowed in server components
 */
import ChartClient from "./ChartClient";

export default function ChartPage() {
  return <ChartClient />;
} 
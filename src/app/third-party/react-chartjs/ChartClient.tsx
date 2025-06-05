/**
 * Chart.js Client Loader
 * - This client component dynamically loads the Chart.js demo
 * - Required because { ssr: false } is not allowed in server components
 */
"use client";
import dynamic from "next/dynamic";

// Dynamically import the ChartDemo client component
const ChartDemo = dynamic(() => import("./Chart"), { ssr: false });

export default function ChartClient() {
  return <ChartDemo />;
} 
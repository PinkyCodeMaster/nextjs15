/**
 * Chart.js Demo (Client Component)
 * - Chart.js requires the DOM, so must be used in a client component
 */
"use client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function ChartDemo() {
  return (
    <div>
      <h2>Chart.js (Client Component)</h2>
      <Bar
        data={{
          labels: ["Red", "Blue", "Yellow"],
          datasets: [{ label: "Votes", data: [12, 19, 3], backgroundColor: ["red", "blue", "yellow"] }],
        }}
      />
      <p>
        <b>Note:</b> This must be a client component because Chart.js needs the DOM.
      </p>
    </div>
  );
} 
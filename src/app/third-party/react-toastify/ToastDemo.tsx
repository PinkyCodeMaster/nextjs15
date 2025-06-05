/**
 * Toastify Demo (Client Component)
 * - react-toastify must be used in a client component
 */
"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastDemo() {
  return (
    <div>
      <h2>React Toastify (Client Component)</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => toast("Hello from Toastify!")}
      >
        Show Toast
      </button>
      <ToastContainer />
      <p>
        <b>Note:</b> This must be a client component because it uses browser APIs.
      </p>
    </div>
  );
} 
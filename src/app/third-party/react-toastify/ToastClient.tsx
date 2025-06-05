/**
 * Toastify Client Loader
 * - This client component dynamically loads the ToastDemo
 * - Required because { ssr: false } is not allowed in server components
 */
"use client";
import dynamic from "next/dynamic";

// Dynamically import the ToastDemo client component
const ToastDemo = dynamic(() => import("./ToastDemo"), { ssr: false });

export default function ToastClient() {
  return <ToastDemo />;
} 
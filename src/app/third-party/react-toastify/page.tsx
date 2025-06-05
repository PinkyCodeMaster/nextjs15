/**
 * Toastify Demo Page
 * - Uses a client component to load Toastify, since { ssr: false } is not allowed in server components
 */
import ToastClient from "./ToastClient";

export default function ToastifyPage() {
  return <ToastClient />;
} 
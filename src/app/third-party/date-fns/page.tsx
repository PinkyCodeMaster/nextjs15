/**
 * date-fns Demo (Server Component)
 * - date-fns can be used in server components for date formatting
 */
import { format } from "date-fns";

export default function DateFnsDemo() {
  const now = new Date();
  return (
    <div>
      <h1>date-fns (Server Component)</h1>
      <p>Current date: {format(now, "yyyy-MM-dd HH:mm:ss")}</p>
      <p>
        <b>Note:</b> This runs on the server. No client JS required.
      </p>
    </div>
  );
} 
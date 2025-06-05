/**
 * Lodash Demo (Server Component)
 * - Lodash can be used in server components for data manipulation
 */
import _ from "lodash";

export default function LodashDemo() {
  const arr = [1, 2, 3, 4, 5];
  const shuffled = _.shuffle(arr);

  return (
    <div>
      <h1>Lodash (Server Component)</h1>
      <p>Original: {JSON.stringify(arr)}</p>
      <p>Shuffled: {JSON.stringify(shuffled)}</p>
      <p>
        <b>Note:</b> This runs on the server. No client JS required.
      </p>
    </div>
  );
} 
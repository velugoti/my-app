import { useState, useEffect } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState<number | null>(null);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const td = (window as any).themeDisplay;

    if (td) {
      setUserId(td.getUserId());
    }
  }, []);

  const startCounter = () => {
    const num = parseInt(input);
    if (!isNaN(num)) {
      setCount(num);
    }
  };

  const increment = () => {
    if (count !== null) {
      setCount(count + 1);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple Counter</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter starting number"
      />

      <button onClick={startCounter}>Start</button>

      <h1>{count ?? 0} {userId??0}</h1>

      <button onClick={increment} disabled={count === null}>
        Increment
      </button>
    </div>
  );
}
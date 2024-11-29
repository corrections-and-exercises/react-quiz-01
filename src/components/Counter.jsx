import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((prev) => prev + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </>
  );
}

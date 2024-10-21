import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((prev) => prev + 1);
  }
  function decrease() {
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <div>
        <button onClick={increase}>Increase By One</button>
        <p>Count: {count}</p>
        <button onClick={decrease}>Decrease By Two</button>
      </div>
      <div>
        <p></p>
      </div>
    </>
  );
}

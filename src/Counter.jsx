import React, { useState } from "react";


function Counter({ title }) {
  const [count, setCount] = useState(0); // State for the counter

  // Event handlers
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-box">
      <h2>{title}</h2>
      <h3>Count: {count}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
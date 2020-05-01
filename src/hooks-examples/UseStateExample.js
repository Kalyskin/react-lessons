import React, { useState, useCallback } from "react";
import Counter from "../components/Counter/Counter";

export function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <Counter
      name={"Counter"}
      onDecrement={() => setCount((count) => count - 1)}
      onIncrement={() => setCount((count) => count + 1)}
      count={count}
    />
  );
}

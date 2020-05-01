import React, { useState, useCallback } from "react";
import { MemoizedCounter } from "../components/Counter/Counter";

export function MemoExample() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const decrement = useCallback(() => setCount((count) => count - 1), []);
  const increment = useCallback(() => setCount((count) => count + 1), []);

  const decrement2 = useCallback(() => setCount2((count) => count - 1), []);
  const increment2 = useCallback(() => setCount2((count) => count + 1), []);

  return (
    <>
      <MemoizedCounter
        name={"Counter 1"}
        onDecrement={decrement}
        onIncrement={increment}
        count={count}
      />
      <br />
      <MemoizedCounter
        name={"Counter 2"}
        onDecrement={decrement2}
        onIncrement={increment2}
        count={count2}
      />
    </>
  );
}

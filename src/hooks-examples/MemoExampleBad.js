import React, { useState } from "react";
import { MemoizedCounter } from "../components/Counter/Counter";

export function MemoExample() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <MemoizedCounter
        name={"Counter 1"}
        onDecrement={() => setCount((count) => count - 1)}
        onIncrement={() => setCount((count) => count + 1)}
        count={count}
      />
      <br />
      <MemoizedCounter
        name={"Counter 2"}
        onDecrement={() => setCount2((count) => count - 1)}
        onIncrement={() => setCount2((count) => count + 1)}
        count={count2}
      />
    </>
  );
}

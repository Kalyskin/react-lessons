import React from "react";
import Counter, { MemoizedCounter } from "../components/Counter/Counter";
import { useCounter } from "../hooks/useCounter";

export function CustomHookExample() {
  const [count, decrement, increment] = useCounter(0);
  const [count2, decrement2, increment2] = useCounter(0);

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

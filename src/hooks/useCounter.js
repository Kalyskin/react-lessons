import { useState, useCallback } from "react";

export function useCounter(defaultCount) {
  const [count, setCount] = useState(defaultCount);
  const decrement = useCallback(() => setCount((count) => count - 1), []);
  const increment = useCallback(() => setCount((count) => count + 1), []);
  return [count, decrement, increment, setCount];
}

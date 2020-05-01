import React, { useState, useCallback } from "react";
import Counter from "../components/Counter/Counter";

export function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const decrement = useCallback(() => setCount((count) => count - 1), []);
  const increment = useCallback(() => setCount((count) => count + 1), []);

  return (
    <Counter onDecrement={decrement} onIncrement={increment} count={count} />
  );
}

// export function UseStateExample2() {
//   const [count, setCount] = useState(0);

//   return (
//     <Counter
//       onDecrement={() => setCount((count) => count - 1)}
//       onIncrement={() => setCount((count) => count + 1)}
//       count={count}
//     />
//   );
// }

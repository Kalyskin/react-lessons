import React from "react";
import "./Counter.css";

export default function Counter({ name, onIncrement, onDecrement, count }) {
  console.log("Counter updated", name);
  return (
    <div className="counter">
      <button className="counter__button" onClick={onDecrement}>
        -
      </button>
      <span className="counter__count">{count}</span>
      <button className="counter__button" onClick={onIncrement}>
        +
      </button>
    </div>
  );
}
export const MemoizedCounter = React.memo(Counter);

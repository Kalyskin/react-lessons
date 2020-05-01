import React from "react";

export function redClock(ClockComponent) {
  return ({ children, ...props }) => (
    <ClockComponent {...props}>
      {(time) => children(<span style={{ color: "red" }}>{time}</span>)}
    </ClockComponent>
  );
}

export function bigClock(ClockComponent) {
  return ({ children, ...props }) => (
    <ClockComponent {...props}>
      {(time) => children(<h2>{time}</h2>)}
    </ClockComponent>
  );
}

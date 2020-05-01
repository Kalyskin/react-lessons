import React, { useEffect, useState } from "react";
import "./Clock.css";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleString()), 1000);
    return () => clearInterval(id);
  });

  return (
    <div className="clock">
      <span className="clock__text">The time is {time}</span>
    </div>
  );
}

export function ClockRenderProps({ children }) {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleString()), 1000);
    return () => clearInterval(id);
  });

  return (
    <div className="clock">
      <span className="clock__text">{children(time)}</span>
    </div>
  );
}

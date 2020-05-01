import React, { useState, useEffect } from "react";
import Counter from "../components/Counter/Counter";
import { useCounter } from "../hooks/useCounter";

export function UseEffectExample() {
  const [unMount, setUnMount] = useState(false);
  const [seconds, decrementSeconds] = useCounter(10);

  useEffect(() => {
    if (seconds <= 0) {
      setUnMount(true);
    } else {
      setTimeout(decrementSeconds, 1000);
    }
  }, [seconds]);

  return unMount ? `Done` : <CounterTimer />;
}

export function CounterTimer() {
  const [count, decrement, increment] = useCounter(0);

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
    return () => {
      document.title = `Counter unmounted`;
    };
  });

  useEffect(() => {
    const id = setInterval(() => {
      increment();
      console.log("increment");
    }, 500);
    return () => {
      clearInterval(id);
      console.log("clearInterval", id);
    };
  }, []);

  return (
    <Counter
      name={"Counter"}
      onDecrement={decrement}
      onIncrement={increment}
      count={count}
    />
  );
}

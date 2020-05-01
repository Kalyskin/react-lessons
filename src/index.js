import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { UseStateExample } from "./hooks-examples/UseStateExample";
//import { MemoExample } from "./hooks-examples/MemoExampleBad";
//import { CustomHookExample } from "./hooks-examples/CustomHookExample";
//import { UseEffectExample } from "./hooks-examples/UseEffectExample";
//import Clock, { ClockRenderProps } from "./components/Clock/Clock";
//import { MemoExample } from "./hooks/MemoExampleGood";

ReactDOM.render(
  <React.StrictMode>
    <UseStateExample />
  </React.StrictMode>,
  document.getElementById("root")
);

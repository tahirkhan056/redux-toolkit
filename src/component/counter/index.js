import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../feature/counter/counter";
import "./style.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log("decrement::", decrement, increment);
  return (
    <div className="counter">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <div className="counter-value">{count}</div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

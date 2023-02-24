import React from "react";
import { CounterTwoProps } from "./CoutnerTwo.types";

const CounterTwo = ({
  count,
  handleIncrement,
  handleDecrement,
}: CounterTwoProps) => {
  return (
    <>
      <div>Counter Two</div>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </>
  );
};

export default CounterTwo;

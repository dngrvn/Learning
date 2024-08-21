import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Пример с Redux - также см. папку modules
const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>up</button>
      <button onClick={decrement}>down</button>
    </div>
  );
};
// далее идем в Store
export default Counter;

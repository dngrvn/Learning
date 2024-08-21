/*
Задание 3 (тайминг 25 минут)
Создать простое приложение счетчика, которое увеличивает или
уменьшает значение на 1.
● Action types: INCREMENT, DECREMENT.
● Actions: Создайте два действия: одно для увеличения счетчика
и другое для его уменьшения.
● Reducer: Реализуйте редьюсер, который обрабатывает эти
действия и изменяет состояние счетчика соответствующим
образом.
● Component: Создайте компонент, который отображает счетчик
и имеет кнопки для его увеличения и уменьшения.
*/

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/task3";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;

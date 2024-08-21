import { useState } from "react";

/* Задание 1 (тайминг 25 минут)
● Создать компонент Counter, который отображает кнопку и число. 
● Число увеличивается на 1 каждый раз, когда пользователь нажимает на кнопку. */

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>{count}</p>
    </>
  );
}

export default Counter;

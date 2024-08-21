/* Задание 2 (тайминг 25 минут)
1. Разработайте компонент Counter, который отображает число и две кнопки: одна для увеличения значения на 1, а другая для уменьшения на 1. Счетчик не должен опускаться ниже нуля.
2. Используйте хук useState для управления состоянием счётчика.
3. Кнопки можно сделать с помощью material ui */

import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";

function Counter() {
  const [count, setCount] = useState(0);

  const upCount = () => {
    setCount(count + 1);
  };

  const downCount = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div>
      <Button onClick={downCount} variant="contained">
        -1
      </Button>
      <div>{count}</div>
      <Button onClick={upCount} variant="contained">
        +1
      </Button>
    </div>
  );
}

export default Counter;

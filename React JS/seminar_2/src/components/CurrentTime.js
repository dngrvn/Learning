/* Задание 4* (тайминг 20 минут)
● Создать компонент Timer, который отображает таймер, увеличивающийся на 1 
каждую секунду. Использовать useEffect для установки и очистки интервала. */
import { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <p>Время {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default CurrentTime;

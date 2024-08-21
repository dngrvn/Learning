/* Задание 5* (тайминг 20 минут) - совмещено с заданием 3
● Создайте компонент ThemeSwitcher. Этот компонент будет содержать кнопку, при нажатии на которую будет меняться тема интерфейса (светлая/темная).
● Используйте useState для управления текущей темой. Храните состояние текущей темы в компоненте ThemeSwitcher. Состояние может быть простой строкой, например, "light" или "dark".
● Передайте текущую тему в виде пропса в другой компонент, который изменит свой стиль в зависимости от полученной темы. Например, создайте компонент Content, который изменяет свой фоновый цвет в зависимости от темы.
● Добавьте логику для переключения темы в ThemeSwitcher. При нажатии на кнопку должно происходить переключение между "light" и "dark" состояниями, и это изменение должно отражаться в компоненте Content. */

import { useState } from "react";
import MessagesList from "./MessagesList";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  function switchTheme() {
    if (theme === "light") {
      setTheme("dark");
      document.querySelector("body").style.backgroundColor = "black";
    } else {
      setTheme("light");
      document.querySelector("body").style.backgroundColor = "white";
    }
  }

  return (
    <div>
      <button onClick={switchTheme}>Switch theme</button>
      <MessagesList themeColor={theme} />
    </div>
  );
}

export default ThemeSwitcher;

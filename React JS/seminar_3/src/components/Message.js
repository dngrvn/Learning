/* Задание 3 (тайминг 25 минут)
● Создайте компонент MessagesList, который отображает список сообщений. Каждое сообщение должно иметь уникальный id и текст.
● Используйте проп key при рендеринге списка, чтобы обеспечить оптимальную производительность.
совмещено с заданием 5.
Задание 5* (тайминг 20 минут)
● Создайте компонент ThemeSwitcher. Этот компонент будет содержать кнопку, при нажатии на которую будет меняться тема интерфейса (светлая/темная).
● Используйте useState для управления текущей темой. Храните состояние текущей темы в компоненте ThemeSwitcher. Состояние может быть простой строкой, например, "light" или "dark".
● Передайте текущую тему в виде пропса в другой компонент, который изменит свой стиль в зависимости от полученной темы. Например, создайте компонент Content, который изменяет свой фоновый цвет в зависимости от темы.
● Добавьте логику для переключения темы в ThemeSwitcher. При нажатии на кнопку должно происходить переключение между "light" и "dark" состояниями, и это изменение должно отражаться в компоненте Content. */

import { PropTypes } from "prop-types";
import "./Message.css";

function Message({ text, time, author, themeColor }) {
  return (
    <div>
      <h4 className={themeColor === "light" ? "light" : "dark"}>
        Author № {author}
      </h4>
      <p className={themeColor === "light" ? "light" : "dark"}>{text}</p>
      <p className={themeColor === "light" ? "light" : "dark"}>Post time:</p>
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  author: PropTypes.number.isRequired,
  themeColor: PropTypes.string.isRequired,
};

export default Message;

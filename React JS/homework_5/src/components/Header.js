import React, { useContext } from "react";
import { ThemeContext } from "../contexts/task1";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <h1>Переключение темы сайта</h1>
      <button onClick={toggleTheme}>Сменить тему</button>
    </header>
  );
};

export default Header;

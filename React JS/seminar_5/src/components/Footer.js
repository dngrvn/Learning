import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/task1";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${theme}`}>
      <p>&copy; {currentYear} Мой сайт</p>
    </footer>
  );
};

export default Footer;

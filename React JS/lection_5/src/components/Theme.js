import { createContext, useContext } from "react";
import { ThemeContext } from "../App";

export const ThemeButton = () => {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.color }}>
      Theme button
    </button>
  );
};

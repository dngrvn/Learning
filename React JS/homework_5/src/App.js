import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { ThemeContext } from "./contexts/task1";
// import { Provider } from "react-redux";
import "./App.css";

const initialTheme = "white";

const App = () => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "white" ? "dark" : "white"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <Header />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

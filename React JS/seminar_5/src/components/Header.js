import React, { useContext } from "react";
import { UserContext, ThemeContext } from "../contexts/task1";

const Header = () => {
  const { user } = useContext(UserContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <h1>Привет, {user.username}!</h1>
      <button onClick={toggleTheme}>Сменить тему</button>
    </header>
  );
};

// function Header() {
//   const userName = useContext(UserContext);

//   return (
//     <header className="header">
//       <h1>Привет, {userName}!</h1>
//     </header>
//   );
// }
export default Header;

import React, { useContext } from "react";
import { UserContext, ThemeContext } from "../contexts/task1";

const Profile = () => {
  const { user, changeUsername } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const handleUsernameChange = (event) => {
    changeUsername(event.target.value);
  };

  return (
    <div className={`profile ${theme}`}>
      <h2>Профиль пользователя</h2>
      <p>Имя пользователя: {user.username}</p>
      <input
        type="text"
        value={user.username}
        onChange={handleUsernameChange}
      />
    </div>
  );
};

export default Profile;

/*
Задание 4* (тайминг 30 минут)
Цель: Создать функциональность для обновления профиля
пользователя, включая имя и email.
● Action types: UPDATE_NAME, UPDATE_EMAIL.
● Actions: Определите действия для обновления имени и email
пользователя.
● Reducer: Напишите редьюсер, который обновляет профиль
пользователя в соответствии с выполненными действиями.
● Component: Разработайте форму для ввода нового имени и email, а
также кнопку для отправки обновлений.
*/

// ProfileUpdateForm.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "../actions/task4";

const ProfileUpdateForm = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.profile);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName !== "") {
      dispatch(updateName(newName));
      setNewName("");
    }
    if (newEmail !== "") {
      dispatch(updateEmail(newEmail));
      setNewEmail("");
    }
  };

  return (
    <div>
      <h3>Current Profile</h3>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">New Name:</label>
          <input
            type="text"
            id="name"
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">New Email:</label>
          <input
            type="email"
            id="email"
            value={newEmail}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileUpdateForm;

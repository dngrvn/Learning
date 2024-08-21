import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";

const AddTodo = () => {
  // Локальное состояние для текста новой задачи
  const [text, setText] = useState("");
  // Dispatch для отправки действий
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    // Если текст задачи не пустой, добавляем его в список
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Добавить задачу</button>
    </div>
  );
};

export default AddTodo;

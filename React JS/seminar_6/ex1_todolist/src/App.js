/*
Задание 1 (тайминг 50 минут)
Разработайте функционал для управления списком дел, который позволит пользователям добавлять новые задачи и удалять их из списка.
Настройка Redux Store:
● Определите начальное состояние для списка задач в вашем Redux store. Каждая задача должна иметь следуящие атрибуты:
● id: Уникальный идентификатор (например, можно использовать Date.now() для его генерации).
● description : Описание задачи, введенное пользователем.
● isCompleted : Статус выполнения задачи (изначально false).
● Создайте два действия:
● Для добавления новой задачи в список.
● Для удаления задачи из списка по id.
Компонент для добавления задачи:
● Реализуйте компонент с текстовым полем для ввода описания задачи и кнопкой "Добавить", которая будет диспатчить action для добавления задачи в store.
Компонент для отображения списка задач:
● Создайте компонент, который будет отображать список всех текущих задач. Для каждой задачи отобразите описание и кнопку "Удалить", которая будет диспатчить action для удаления этой задачи из store. */

import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { FilterProvider } from "./contexts/FilterContext";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <FilterProvider>
          <h1>To-Do List</h1>
          <AddTodo />
          <TodoList />
          <TodoFilter />
        </FilterProvider>
      </Provider>
    </div>
  );
}

export default App;

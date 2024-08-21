// Константы для типов действий
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// Создание задачи
export const addTodo = (text) => ({
  type: ADD_TODO, // Тип действия
  payload: { text }, // Полезная нагрузка действия
});

// Изменение статуса задачи (выполнено/не выполнено)
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO, // Тип действия
  payload: { id }, // Полезная нагрузка действия
});

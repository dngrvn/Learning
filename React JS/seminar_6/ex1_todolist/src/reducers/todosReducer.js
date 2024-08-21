import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/todoActions";

const initialState = [];

// Редьюсер для обработки действий с задачами
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // Добавляем новую задачу в список
      return [
        ...state,
        { id: Date.now(), text: action.payload.text, completed: false },
      ];

    case TOGGLE_TODO:
      // Изменяем состояние выполненности задачи
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    // Удаление задачи из списка задач
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default todosReducer;

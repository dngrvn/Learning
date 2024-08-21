import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { FilterProvider } from "./contexts/FilterContext";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  // При загрузке приложения пользователь видит 3 основных компонента: список задач (TodoList), поле для добавления новой задачи (AddTodo) и фильтр для выбора видимых задач (TodoFilter).

  // В TodoList пользователь видит все текущие задачи. Задачи могут быть отмечены как выполненные или не выполненные. Пользователь может также удалить задачу из списка.

  // В AddTodo пользователь может ввести текст новой задачи и добавить ее в список нажатием кнопки.

  // В TodoFilter пользователь может выбрать видимые задачи по выполненности или статусу (все, выполненные, не выполненные).

  // Все действия пользователя приводят к отправке действий в хранилище Redux через функции-действия, определенные в файле todoActions.js

  // Редуктор в файле todoReducer.js слушает действия и обновляет состояние в соответствии с этими действиями.

  // Компоненты реагируют на изменение состояния и обновляют отображение соответствующим образом.

  // Контекст фильтра (в файле FilterContext.js) предоставляет возможность изменять фильтр и получать его значение в любом компоненте, который его использует.

  // Компонент высшего порядка withFilter.js оборачивает TodoList, предоставляя ему функциональность фильтрации задач в соответствии с выбранным фильтром.

  // Хранилище Redux создается в файле store.js и передается в компонент Provider в файле index.js.

  return (
    <div className="App">
      <Provider store={store}>
        <FilterProvider>
          <AddTodo />
          <TodoList />
          <TodoFilter />
        </FilterProvider>
      </Provider>
    </div>
  );
}

export default App;

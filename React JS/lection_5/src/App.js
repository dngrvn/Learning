// import React, { createContext, useContext, useState } from "react";
// import "./App.css";
// // import { Provider } from "react-redux";
// // import store from "./components/store";
// // import CounterRedux from "./components/CounterRedux";

// // Как было раньше с props
// // function GrandParent() {
// //   return <Parent message="Hello from the top!" />
// // };

// // function Parent(props) {
// //   return <Child message={props.message} />
// // };

// // function Child(props) {
// //   return <GrandChild message={props.message} />
// // };

// // function GrandGrandGrandChild(props) {
// //   return <span>{props.message}</span>
// // };

// // Создаем контекст
// const MessageContext = createContext();

// // Компонент GrandGrandGrandChild использует контекст
// function GrandGrandGrandChild() {
//   // Используем useContext для доступа к контексту
//   const message = useContext(MessageContext);
//   return <span>{message}</span>;
// }

// // Компонент GrandParent устанавливает контекст
// // можно так
// // function GrandParent() {
// //   const [message, setMessage] = useState("Hello from the top Context!");
// //   return (
// //     <MessageContext.Provider value={message}>
// //       <Parent />
// //     </MessageContext.Provider>
// //   );
// // } или так:
// function GrandParent() {
//   return (
//     <MessageContext.Provider value="Hello from the top Context!">
//       <Parent />
//     </MessageContext.Provider>
//   );
// }
// // Компонент Parent передает контекст через пропсы
// function Parent() {
//   return <Child />;
// }

// // Компонент Child передает контекст дальше
// function Child() {
//   return <GrandChild />;
// }

// // Компонент GrandChild передает контекст на последний уровень
// function GrandChild() {
//   return <GrandGrandGrandChild />;
// }

// // // ...

// // Корневой компонент
// // function App() {
// //   return (
// //     <div>
// //       <h1>Пример использования React.Context</h1>
// //       <GrandParent />
// //     </div>
// //   );
// // }

// /// EX 2
// // Шаг 1: Создаем контекст
// const ThemeContext = createContext();

// // Компонент, использующий контекст
// const ThemedButton = () => {
//   // Шаг 2: Используем useContext для доступа к контексту
//   const theme = useContext(ThemeContext);
//   return (
//     <button style={{ background: theme.background, color: theme.foreground }}>
//       Themed Button
//     </button>
//   );
// };

// // Компонент, который устанавливает контекст
// // const App = () => {
// //   // Шаг 3: Определяем состояние, которое будет передаваться через контекст
// //   const [theme, setTheme] = useState({
// //     background: "lightgray",
// //     foreground: "black",
// //     label: "Переключить тему",
// //   });

// // Шаг 4: Оборачиваем компоненты, которые должны использовать контекст, в провайдер контекста
// // return (
// //   <ThemeContext.Provider value={theme}>
// //     <div>
// //       <h1>Использование React.Context</h1>
// //       <ThemedButton />
// //       <button
// //         onClick={() => setTheme({ background: "black", foreground: "white" })}
// //       >
// //         Сменить тему
// //       </button>
// //     </div>
// //   </ThemeContext.Provider>
// //   );
// // };

// /// EX3

// // Создаем контексты для темы и заметок
// const ThemeNotesContext = createContext();
// const NotesContext = createContext();

// // Создаем пользовательские хуки для удобства использования контекстов
// const useThemeNotes = () => useContext(ThemeNotesContext);
// const useNotes = () => useContext(NotesContext);

// // Компонент, отображающий список заметок
// const NotesList = () => {
//   // Используем пользовательские хуки для доступа к контекстам
//   const { notes } = useNotes();
//   return (
//     <ul>
//       {notes.map((note, index) => (
//         <li key={index}>{note}</li>
//       ))}
//     </ul>
//   );
// };

// // Компонент, позволяющий добавлять заметки
// const NoteInput = () => {
//   // Используем пользовательские хуки для доступа к контекстам
//   const [inputValue, setInputValue] = useState("");
//   const { addNote } = useNotes();

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };
//   const handleAddNote = () => {
//     addNote(inputValue);
//     setInputValue("");
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleAddNote}>Добавить заметку</button>
//     </div>
//   );
// };
// // Компонент для переключения темы
// const ThemeToggle = () => {
//   // Используем пользовательские хуки для доступа к контекстам
//   const { themeNotes, toggleThemeNotes } = useThemeNotes();
//   return (
//     <button onClick={toggleThemeNotes}>
//       Переключить на {themeNotes === "light" ? "темную" : "светлую"} тему
//     </button>
//   );
// };

// const App = () => {
//   const [themeNotes, setThemeNotes] = useState("light");
//   const [notes, setNotes] = useState(["Заметка 1", "Заметка 2", "Заметка 3"]);
// };
// export default App;
////////////

import "./App.css";
import GrandParent from "./components/ContextExample";
import { createContext, useState } from "react";
import { ThemeButton } from "./components/Theme";
import { NoteInput, NotesList } from "./components/Notes";
import StyledComponent from "./components/StyledComponent";
import WrapperCounter from "./components/WrapperCounter";
import MyProvider from "./components/MyProvider";

export const ThemeContext = createContext(null);
export const NotesContext = createContext(null);

function App() {
  const [theme, setTheme] = useState({
    background: "lightgray",
    color: "black",
  });
  const [notes, setNotes] = useState(["item 1", "item 2"]);
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <GrandParent />
          <ThemeButton />
          <button
            onClick={() =>
              setTheme({
                background: "black",
                color: "white",
              })
            }
          >
            change theme
          </button>
          <NotesList />
          <NoteInput />
          <StyledComponent />
          <WrapperCounter />
        </div>
      </ThemeContext.Provider>
      <MyProvider />
    </NotesContext.Provider>
  );
}

export default App;

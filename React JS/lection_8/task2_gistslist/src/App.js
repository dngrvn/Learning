// Импортируем стандартные компоненты React и CSS стили
import React from "react";
import "./App.css";

// Импортируем наш компонент GistsList
import GistsList from "./components/GistsList";

// Определяем компонент App
function App() {
  return (
    // Обертка для всего приложения
    <div className="App">
      Шапка приложения с заголовком
      <header className="App-header">
        <h1>Список Gists с Github</h1>
      </header>
      Основная часть приложения, где будет отображаться список gists.
      <main>
        <GistsList />
      </main>
    </div>
  );
}

export default App;

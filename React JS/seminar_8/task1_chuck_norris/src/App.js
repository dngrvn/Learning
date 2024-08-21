/*
Задание 1 (тайминг 35 минут)
Создать приложение на React для отображения случайных шуток о Чаке Норрисе.
Мы будем использовать Chuck Norris API, который предоставляет случайные шутки о Чаке Норрисе. Этот
API не требует ключа для доступа, что делает его идеальным для обучения.
Инициализируйте новый проект с помощья Create React App.
Разработайте интерфейс с кнопкой, при нажатии на которую будет отправляться запрос к API для
получения новой шутки.
Используйте fetch вместе с Promise или async/await для выполнения запроса к Chuck Norris API и получения
случайной шутки.
Отобразите полученную шутку в вашем интерфейсе. Можете добавить какой-нибудь элемент анимации или
визуализации при загрузке данных. */

import React, { useState } from "react";
import Joke from "./Joke";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setJoke(data.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chuck Norris Jokes</h1>
        <button onClick={fetchJoke}>Get Joke</button>
        {joke && <Joke joke={joke} />}
      </header>
    </div>
  );
}

export default App;

/* Задание 2 (тайминг 55 минут)
Разработать приложение на React, которое позволит пользователю конвертировать заданное количество рублей (RUB) в выбранную иностранную валюту по актуальному курсу
1. Создайте новый проект
2. Выбираем любой доступный API или https://www.exchangerate-api.com/
3. В интерфейсе должно быть минимум три элемента управления:
a. Поле ввода для указания количества рублей (RUB), которые пользователь хочет конвертировать.
b. Поле ввода для указания кода целевой валюты (например, USD, EUR).
c. Кнопка для выполнения операции конвертации.
4. URL запроса к API `https://v6.exchangerate-api.com/v6/Ваш Ключ/latest/RUB`;
5. Пользователь может ввести количество рублей и код целевой валюты, нажать на кнопку и увидеть результат конвертации. */

import React from "react";
import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
        <CurrencyConverter />
      </header>
    </div>
  );
}

export default App;

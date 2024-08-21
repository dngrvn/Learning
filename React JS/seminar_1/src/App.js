import logo from "./logo.svg";
import "./App.css";

/* Задание 1 (тайминг 15 минут)
● Установить Node.js и NPM (если еще не установлены).
● Создать новый проект React, используя Create React App, выполнив 
команду npx create-react-app my-first-react-app в 
терминале.
● Запустить проект, используя команду npm start в директории 
проекта, и убедиться, что приложение отображается в браузере.
● Заменить шаблонный текст на произвольный */

// import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import NewComponent from "./components/NewComponent";
import CurrentTime from "./components/CurrentTime";
import "./components/CurrentTime.css";
import EvenCard from "./components/EvenCard";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h4>Random title</h4>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, please!
        </a>
      </header> */}
      <h1>Изучаем React</h1>
      <Greeting />
      <NewComponent />
      <CurrentTime />

      <div>
        <EvenCard
          title="Крутая группа*"
          date="22 октября 2024, 19:00"
          location="Москва, Крокус Сити Холл"
        />
        <EvenCard
          title="Выставка 'Мир динозавров'"
          date="5 ноября 2024, 10:00"
          location="Санкт-Петербург, Экспофорум"
        />
        <EvenCard
          title="Фестиваль еды 'Вкусная осень'"
          date="12 ноября 2024, 12:00"
          location="Нижний Новгород, Парк культуры и отдыха"
          propsBoolean="false"
        />
      </div>
    </div>
  );
}

export default App;

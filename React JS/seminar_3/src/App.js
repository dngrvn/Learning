import "./App.css";
import Greeting from "./components/greeting";
import Counter from "./components/counter";
import MessagesList from "./components/MessagesList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TextDisplayForm from "./components/TextDisplayForm";

function App() {
  const name = "Екатерина!";
  return (
    <div className="App">
      <h1>Изучаем React!</h1>
      <TextDisplayForm />
      <Greeting name={name} />
      <Counter />
      <MessagesList />
      <ThemeSwitcher />
    </div>
  );
}

export default App;

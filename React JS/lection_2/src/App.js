import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import Show from "./components/visible";
import Timer from "./components/timer";
import RefExample from "./components/refExample";
import MessagesList from "./components/list";

function App() {
  const userName = "Kate";
  return (
    <div>
      <h1>Hello {userName}</h1>
      <RefExample />
      <Timer />
      <Counter />
      <Show data="Текст из компонента" />
      <Show data="Другой текст" />
      <MessagesList />
    </div>
  );
}

export default App;

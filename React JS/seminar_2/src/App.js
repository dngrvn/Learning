import "./App.css";
import TextInput from "./components/TextInput";
import CurrentTime from "./components/CurrentTime";
import TodoList from "./components/TodoList";
import Counter from "./components/counter";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <Counter />
      <TextInput />
      <TodoList />
      <CurrentTime />
      <Timer />
    </>
  );
}

export default App;

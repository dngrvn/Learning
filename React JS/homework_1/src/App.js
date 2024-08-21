import "./App.css";
import Message from "./components/message";

const messageAuthor = "Возможно это будет интересно для тебя";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text={messageAuthor} />
      </header>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

function App() {
  const userName = "Kate";
  return (
    <div>
      <h1>Hello, {userName}</h1>
      <Heading />
      <Heading />
      <Arcticle number="3" name="Info" />
      <Arcticle number="4" name="Blog" />
    </div>
  );
}

function Heading() {
  return (
    <div>
      <h2>Новый текст внутри заголовка</h2>
      <p>Новый текст</p>
      <a href="#">Читать далее . . .</a>
    </div>
  );
}

function Arcticle({ name, number }) {
  let themeSiteWhite = true; // тема сайта белая - то в h3 текст будет зеленый, иначе - красным (если будет false)
  return (
    <div>
      <h2 className="heading">
        Статья про {name} номер {number}
      </h2>
      <h3 style={{ color: themeSiteWhite ? "green" : "red" }}>
        Какой-то заголовок
      </h3>
      <p style={{ color: "green" }}>Очень интересно</p>
      <a href="#">Читать статью</a>
    </div>
  );
}

export default App;

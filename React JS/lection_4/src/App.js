import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticleDetail from "./components/ArticleDetail";
import ArticleList from "./components/ArticleList";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetails";

const articles = [
  { id: 1, title: "Статья 1", content: "Content of Article 1" },
  { id: 2, title: "Статья 2", content: "Content of Article 2" },
  { id: 3, title: "Статья 3", content: "Content of Article 3" },
];

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "description of Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    description: "description of Product 2",
    price: 200,
  },
  {
    id: 3,
    name: "Product 3",
    description: "description of Product 3",
    price: 300,
  },
  {
    id: 4,
    name: "Product 4",
    description: "description of Product 4",
    price: 5000,
  },
  {
    id: 5,
    name: "Product 5",
    description: "description of Product 5",
    price: 500,
  },
  {
    id: 6,
    name: "Product 6",
    description: "description of Product 6",
    price: 600,
  },
  {
    id: 7,
    name: "Product 7",
    description: "description of Product 7",
    price: 800,
  },
  {
    id: 8,
    name: "Product 8",
    description: "description of Product 8",
    price: 900,
  },
  {
    id: 9,
    name: "Product 9",
    description: "description of Product 9",
    price: 900,
  },
];

function App() {
  // npm install react-router-dom
  // return (
  //   <Router>
  //     <div>
  //       <h1>Приложение для просмотра статей</h1>
  //       <Routes>
  //         {/* <Route path="/" element={<ArticleList articles={articles} />} /> */}
  //         <Route
  //           path="/articles/:id"
  //           element={<ArticleDetail articles={articles} />}
  //         />
  //         <Route path="*" element={<ArticleList articles={articles} />} />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
  //////////
  return (
    <Router>
      <Routes>
        <Route
          path="/page/:pageNumber"
          element={<ProductList products={products} />}
        />
        <Route
          path="/product/:productId"
          element={<ProductDetail products={products} />}
        />
        <Route path="/" element={<ProductList products={products} />} />
      </Routes>
    </Router>
  );
  /////////////////////
  // return (
  // <div>
  //   <div className="App">
  //     {console.log(
  //       <DivWithChild>
  //         <p>Новый текст</p>
  //         <div>Новый элемент div</div>
  //       </DivWithChild>
  //     )}
  //   </div>
  // </div>
  // return (
  // <div>
  //   <div className="App">
  //     <div>
  //       <h2>Пример 2 использования 'children'</h2>
  //       <BorderComp>
  //         <p>Этот абзац находится внутри рамки.</p>
  //         <button>Кнопка внутри рамки</button>
  //       </BorderComp>
  //       <BorderComp>
  //         <h3>Новый заголовок</h3>
  //       </BorderComp>
  //       <p>Этот абзац находится снаружи рамки</p>
  //     </div>
  //   </div>
  // </div>
  // );
  /* Легко создавать кастомные карточки с разными элементами внутри, такими как текст, кнопки, ссылки и другие. */
  // return (
  // <div>
  //   <div className="App">
  //     <div>
  //       <h2>Пример 3 использования 'props.children'</h2>
  //       <Card title="Карточка 1">
  //         <p>Это содержимое первой карточки</p>
  //         <button>Действие</button>
  //       </Card>
  //       <Card title="Карточка 2">
  //         <p>Это содержимое второй карточки</p>
  //         <a href="#">Ссылка</a>
  //       </Card>
  //     </div>
  //   </div>
  // </div>
  // );
  /////
  // return (
  // <div>
  //   <div className="App">
  //     <div>
  //       <h1>Пример Render props с функциональными компонентами</h1>
  //       <MouseTracker render={({ x, y }) => <MouseInfo x={x} y={y} />} />
  //     </div>
  //   </div>
  // </div>
  // );
  /////
  // );
}

function DivWithChild({ children }) {
  return <div>{children}</div>;
}

const BorderComp = ({ children }) => {
  return (
    <div style={{ border: "2px solid #000", padding: "16px" }}>{children}</div>
  );
};

// Компонент Card принимает заголовок и содержимое в качестве children

const Card = ({ title, children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        marginBottom: "16px",
      }}
    >
      <h2>{title}</h2>
      <p>Любой рекламный текст</p>
      {children}
    </div>
  );
};

////////// Render props

// Компонент для отслеживания положения курсора мыши
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {/* Внутри Render prop используем переданную ф-ю */}
      {render(position)}
    </div>
  );
};

// Компонент, который использует Render prop для рендеринга инф-ции о положении курсора
const MouseInfo = ({ x, y }) => {
  return (
    <div>
      <h2>Положение курсора мыши</h2>
      <p>
        X: {x}, Y: {y}
      </p>
    </div>
  );
};

export default App;

import "./App.css";
import Box from "./components/Box";
import List from "./components/List";
import pic from "./img/42159.jpg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./components/ListPage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { useState } from "react";
import NotFound from "./components/NotFound";

// function App() {
//   // return (
//   //   <div>
//   //     <Box>
//   //       <p>This is first item.</p>
//   //     </Box>
//   //     <Box>
//   //       <p>This is second item.</p>
//   //     </Box>
//   //     <Box>
//   //       <p>This is third item.</p>
//   //     </Box>
//   //     <Box>
//   //       <img src={pic} />
//   //     </Box>
//   //   </div>
//   // );

//   ///////
//   const liElements = [1, 2, 3, 4, 5, 6, 7];
//   const renderItem = (item, index) => {
//     const style = { color: index % 2 === 0 ? "blue" : "red" };
//     return <div style={style}>{item} - Уникальный стиль</div>;
//   };

//   return (
//     <div className="App">
//       <h1> Изучаем React!</h1>
//       <List listItems={liElements} renderItem={renderItem} />
//     </div>
//   );
// }
///////////////////
/* Задание 4 (тайминг 25 минут)
● Создайте маленькое приложение со страницей списка (ListPage) и страницей деталей (DetailPage).
● На ListPage отобразите список элементов (например, статей или продуктов), где каждый элемент является ссылкой на DetailPage, содержащую детальную информацию об элементе. Используйте react-router-dom для настройки маршрутизации.
● На DetailPage используйте useParams для извлечения параметра из URL (например, ID элемента) и отобразите детальную информацию об элементе.*/
function App() {
  const [products, setProducts] = useState([
    { name: "Product 1", text: "Product text" },
    { name: "Product 2", text: "Product text" },
    { name: "Product 3", text: "Product text" },
    { name: "Product 4", text: "Product text" },
    { name: "Product 5", text: "Product text" },
  ]);

  const router = createBrowserRouter([
    { path: "/", element: <ListPage products={products} /> },
    {
      path: "/detail/:productId",
      element: <ProductDetails products={products} />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

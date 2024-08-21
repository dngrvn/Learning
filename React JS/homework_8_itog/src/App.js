/*                Урок 8. Работа с API
В финальном проекте вам необходимо применить все знания, которые вы получили на протяжении всего курса.

Для выполнения задания вам потребуется вёрстка сайта Интернет-магазина из курсов по HTML/CSS: https://www.figma.com/file/SbfOi2i4S1pIs0G6uOLPCx/shop-(Copy)?type=design&node-id=0-1&mode=design&t=HqHf7Yort2ND3o3y-0

Так как у вас уже есть готовая вёрстка, вам необходимо перевести проект на react.

                                  Функционал который необходим:
1. Все товары являются компонентами.
2. Разбить сайт на необходимые компоненты, чтобы исключить дублирование кода и чтобы можно было легче редактировать проект.
3. На странице каталога есть сортировка по размеру (S, XS, L, M) необходимо реализовать даный функционал, к какому именно размеру будет относиться тот или иной товар, не имеет значения.
4. Реализовать переключение между страницами с помощью Routing.
5. На странице корзины реализовать верный подсчет общей цены товаров (GRAND TOTAL $900) плюс реализовать возможность менять количество товара, это также должно влиять на цену товар (GRAND TOTAL $900). */

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import store from "./store";
import "./styles/style.css";
import HomePage from "./components/homePage/HomePage";
import CartPage from "./components/cart/CartPage";
import CatalogPage from "./components/catalog/CatalogPage";
import ProductPage from "./components/product/ProductPage";
import RegistryPage from "./components/registry/RegistryPage";
import ErrorPage from "./components/basis/ErrorPage";
import { ProductDataProvider } from "./contexts/ProductDataContext";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ProductDataProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/page/:pageNumber" element={<CatalogPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/registry" element={<RegistryPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ProductDataProvider>
      </Router>
    </Provider>
  );
}

export default App;

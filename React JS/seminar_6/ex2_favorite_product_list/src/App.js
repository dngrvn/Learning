/*
Задание 2 (тайминг 25 минут)
Создать приложение, которое позволяет пользователям добавлять товары в список "Избранное" и
управлять этим списком (добавлять новые товары и удалять их).
1. Настройка Redux Store:
a. Создайте favoritesSlice с использованием createSlice. Определите начальное состояние,
которое будет содержать массив избранных товаров. Каждый товар должен иметь id,
name, description, и price.
b. Определите редьюсеры для добавления товара в избранное и удаления товара из избранного.
2. Компоненты React:
a. Создайте компонент, который отображает список всех товаров. Для каждого товара
предусмотрите кнопку "Добавить в избранное", которая будет добавлять товар в список избранных.
b. Разработайте компонент, который отображает список товаров, добавленных в избранное. Для каждого товара в этом списке должна быть кнопка "Удалить из избранного", позволяющая удалять товар из списка. */

import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import ProductList from "./components/ProductsList";
import FavoritesList from "./components/FavoritesList";
// import { store } from "./store";
// import { Provider } from "react-redux";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    price: 10,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: 15,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 20,
  },
];

function App() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Product List
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom>
            All Products
          </Typography>
          <ProductList products={products} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom>
            Favorites
          </Typography>
          <FavoritesList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

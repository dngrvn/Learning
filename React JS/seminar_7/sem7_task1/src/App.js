/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { addFav } from "./reducers/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import FavoritesList from "./components/FavoritesList.js";
import SagaComp from "./components/SagaComp";

function App() {
  return <SagaComp />;
}

export default App;

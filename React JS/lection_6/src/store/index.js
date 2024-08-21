import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
// store - данные, с которыми мы работаем. const Store говорит о том, что мы будем менять значения ТОЛЬКО! через reducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/CounterSlice.js";
import todoListReducer from "../reducers/TodoListSlice.js";
import favoritesReducer from "../reducers/favoritesSlice .js";
import usersReducers from "../reducers/UsersSlice.js";
import { middleware } from "../middlewares/middleware.js";
import createSagaMiddleware from "redux-saga";
import usersSaga from "../sagas/usersSaga.js";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoListReducer,
    favList: favoritesReducer,
    users: usersReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware, sagaMiddleware),
});

sagaMiddleware.run(usersSaga);

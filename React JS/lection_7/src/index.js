import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // импортируем PersistGate
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import asyncMiddlewareEx3 from "./asyncMiddlewareEx3";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { dataReducer } from "./dataReducer";

// EX1
// Это промежуточное ПО для демонстрации дополнительных эффектов.
const middleware = (store) => (next) => (action) => {
  console.log("Дополнительный эффект!");

  setTimeout(() => {
    console.log("тайм-ауты, вызовы api и т.д.");
  }, 1000);

  return next(action);
};

// EX2
// Это logger middleware, который выводит действия, отправленные в store.
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("dispatching", action);
  return next(action);
};

// EX Saga
// Создаем middleware для Redux-Saga.
const sagaMiddleware = createSagaMiddleware();

// Конфигурация для redux-persist.
const persistConfig = {
  key: "root", // Ключ, по которому хранится состояние в storage.
  storage, // Объект storage для хранения.
};

// Создаем персистентный редьюсер с использованием persistReducer и конфигурации.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Создаем нашу store с использованием configureStore, middleware, и persistReducer.
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Игнорируем действие, т.к. оно не сериализуемо
      },
    }).concat(
      middleware,
      loggerMiddleware,
      asyncMiddlewareEx3,
      thunk,
      sagaMiddleware
    ), // указываем через запятую ex1, ex2, ex3...
});

// Запускаем нашу сагу
sagaMiddleware.run(mySaga);

// Сериализуем persistor, который будет использоваться для сохранения/восстановления состояния.
let persistor = persistStore(store);

// EX Saga_2
// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: {
//     ...rootReducer,
//     data: dataReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(
//       middleware,
//       loggerMiddleware,
//       asyncMiddlewareEx3,
//       thunk,
//       sagaMiddleware
//     ), // указываем через запятую ex1, ex2, ex3...
// });

// Запускаем нашу сагу
sagaMiddleware.run(mySaga);

// Persist

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

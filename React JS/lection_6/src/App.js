import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ButtonComponent from "./components/ButtonComponent";
import ButtonComponentAdd from "./components/ButtonComponentAdd";
import ButtonComponentSubtract from "./components/ButtonComponentSubtract";
import ButtonComponentReset from "./components/ButtonComponentReset";
import ButtonComponentDecrement from "./components/ButtonComponentDecrement";
import CounterComponent from "./components/CounterComponent";
// npm install react-redux
// npm install @reduxjs/toolkit

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent />
        <ButtonComponent />
        <ButtonComponentDecrement />
        <ButtonComponentReset />
        <ButtonComponentAdd />
        <ButtonComponentSubtract />
      </div>
    </Provider>
  );
};

export default App;

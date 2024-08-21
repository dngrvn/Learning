import React from "react";
import { connect } from "react-redux";
import { increment } from "../reducers/counterSlice";
// Components - то, что отображается на странице. Кнопка на кот. кликаем
const ButtonComponent = (props) => {
  return <button onClick={props.increment}>+1</button>;
};

// будет отвечать за увеличение значения в кнопке выше
const mapDispatchToProps = {
  increment,
};

export default connect(null, mapDispatchToProps)(ButtonComponent);

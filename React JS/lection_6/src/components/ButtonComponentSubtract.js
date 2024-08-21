import React from "react";
import { connect } from "react-redux";
import { subtract } from "../reducers/counterSlice";

const ButtonComponentSubtract = (props) => {
  return <button onClick={props.subtract}>-3</button>;
};

const mapDispatchToProps = {
  subtract,
};

export default connect(null, mapDispatchToProps)(ButtonComponentSubtract);

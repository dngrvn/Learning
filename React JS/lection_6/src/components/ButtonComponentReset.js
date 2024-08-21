import React from "react";
import { connect } from "react-redux";
import { reset } from "../reducers/counterSlice";

const ButtonComponentReset = (props) => {
  return <button onClick={props.reset}>Reset</button>;
};

const mapDispatchToProps = {
  reset,
};

export default connect(null, mapDispatchToProps)(ButtonComponentReset);

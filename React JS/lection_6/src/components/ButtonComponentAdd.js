import React from "react";
import { connect } from "react-redux";
import { add } from "../reducers/counterSlice";

const ButtonComponentAdd = (props) => {
  return <button onClick={props.add}>+5</button>;
};

const mapDispatchToProps = {
  add,
};

export default connect(null, mapDispatchToProps)(ButtonComponentAdd);

import React from "react";
import { connect } from "react-redux";
// счетчик, отображаемый на странице
const CounterComponent = (props) => {
  return (
    <div>
      <h1>Count: {props.count}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

export default connect(mapStateToProps)(CounterComponent);

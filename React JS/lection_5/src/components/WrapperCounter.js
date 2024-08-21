import { useState } from "react";

const withCounter = (WrapperCounter) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    const newProps = { count, incrementCount, ...props };

    return <WrapperCounter {...newProps} />;
  };
};

const ClickCount = ({ count, incrementCount, message }) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={incrementCount}>click</button>
      <p>Clicked: {count}</p>
    </div>
  );
};

const ClickCounterWithCounterAndProps = withCounter(ClickCount);

export default function WrapperCounter() {
  return <ClickCounterWithCounterAndProps />;
}

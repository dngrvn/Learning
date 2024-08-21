const withStyle = (WrappedComponent, style) => {
  return (props) => {
    const newProps = { ...props, style };
    return <WrappedComponent {...newProps} />;
  };
};

const Button = ({ style }) => {
  return <button style={style}>click me</button>;
};

const StyleButton = withStyle(Button, {
  backgroundColor: "white",
  color: "blue",
});

export default function StyledComponent() {
  return <StyleButton />;
}

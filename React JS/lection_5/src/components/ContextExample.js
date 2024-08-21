import { createContext, useContext } from "react";

const MessageContext = createContext("");

const GrandGrandChild = () => {
  const message = useContext(MessageContext);
  return <span>{message}</span>;
};

function GrandChild() {
  return <GrandGrandChild />;
}

function Child() {
  return <GrandChild />;
}

function Parent() {
  return <Child />;
}

const GrandParent = () => {
  return (
    <MessageContext.Provider value="Hello">
      <Parent />
    </MessageContext.Provider>
  );
};

export default GrandParent;

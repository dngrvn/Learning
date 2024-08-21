import { messages } from "../data";
import Message from "./Message";
import { PropTypes } from "prop-types";

export default function MessagesList({ themeColor }) {
  return (
    <>
      {messages.map((message) => (
        <Message themeColor={themeColor} key={message.id} {...message} />
      ))}
    </>
  );
}

MessagesList.propTypes = {
  themeColor: PropTypes.string,
};

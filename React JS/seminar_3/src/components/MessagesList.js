import { messages } from "../data";
import Message from "./Message";
import { PropTypes } from "prop-types";

function MessagesList({ themeColor }) {
  return (
    <div>
      {messages.map((message) => (
        <Message themeColor={themeColor} key={message.id} {...message} />
      ))}
    </div>
  );
}

MessagesList.propTypes = {
  themeColor: PropTypes.string,
};

export default MessagesList;

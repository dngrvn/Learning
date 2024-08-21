import React, { useState } from "react";

// function MessagesList() {
//   const [messages, setMessages] = useState([
//     { id: "id1", text: "message 1" },
//     { id: "id2", text: "message 2" },
//     { id: "id3", text: "message 3" },
//   ]);

//   return messages.map((message) => <div key={message.id}>{message.text}</div>); // бежим по массиву и по ключу вставляю данные
// }

// либо более сложный вариант с до.п данными

function MessagesList() {
  const [messages, setMessages] = useState([
    { id: "id1", text: "message 1", heading: "Heading 1" },
    { id: "id2", text: "message 2", heading: "Heading 2" },
    { id: "id3", text: "message 3", heading: "Heading 3" },
  ]);

  return messages.map((message) => (
    // <div>
    <>
      <h2>{message.heading}</h2>
      <div key={message.id}>{message.text}</div>
    </> // вместо div, это фрагмент
  ));
}

export default MessagesList;

import "./message.css";

function Message({ text }) {
  return (
    <div className="message">
      <h1>Прочитай этот текст: '{text}'</h1>
    </div>
  );
}

export default Message;

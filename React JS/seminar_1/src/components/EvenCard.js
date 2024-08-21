import "../EvenCard.css";

function EvenCard({ title, date, location, propsBoolean }) {
  return (
    <div className="evenCard">
      <h2 style={{ color: propsBoolean ? "green" : "red" }}>
        <span className="evenCard_title">Группа</span>"{title}"
      </h2>
      <h2>
        <span className="evenCard_date">Дата: </span>
        {date}
      </h2>
      <h2>
        <span className="evenCard_description">Адрес: </span>
        {location}
      </h2>
    </div>
  );
}

export default EvenCard;

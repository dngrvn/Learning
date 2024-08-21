import { NavLink } from "react-router-dom";

/* Задание 4 (тайминг 25 минут)
● Создайте маленькое приложение со страницей списка (ListPage) и страницей деталей (DetailPage).
● На ListPage отобразите список элементов (например, статей или продуктов), где каждый элемент является ссылкой на DetailPage, содержащую детальную информацию об элементе. Используйте react-router-dom для настройки маршрутизации.
● На DetailPage используйте useParams для извлечения параметра из URL (например, ID элемента) и отобразите детальную информацию об элементе.*/

function ListPage({ products }) {
  return (
    <div>
      <ul>
        {products.map((product, i) => (
          <NavLink
            key={i}
            style={{ textAlign: "left", fontSize: "24px" }}
            to={`/detail/${i + 1}`}
          >
            <li>{product.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;

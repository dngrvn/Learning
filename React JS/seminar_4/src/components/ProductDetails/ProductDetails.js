import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";

/* Задание 4 (тайминг 25 минут)
● Создайте маленькое приложение со страницей списка (ListPage) и страницей деталей (DetailPage).
● На ListPage отобразите список элементов (например, статей или продуктов), где каждый элемент является ссылкой на DetailPage, содержащую детальную информацию об элементе. Используйте react-router-dom для настройки маршрутизации.
● На DetailPage используйте useParams для извлечения параметра из URL (например, ID элемента) и отобразите детальную информацию об элементе.*/

function ProductDetails({ products }) {
  const params = useParams();
  return (
    <div>
      {products
        .filter((_, i) => i === +params.productId - 1)
        .map((product, i) => (
          <div className={classes.content} key={i}>
            <p className={classes.text}>{product.name}</p>
            <p className={classes.text}>{product.text}</p>
          </div>
        ))}
    </div>
  );
}

export default ProductDetails;

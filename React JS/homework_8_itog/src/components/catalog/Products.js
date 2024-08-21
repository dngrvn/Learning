import React from "react";
import Product from "./Product";

// Функция для импорта всех изображений из папки /img
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    // Убираем начальные ./ из пути к изображениям
    const imagePath = item.replace("./", "");
    images[imagePath] = r(item);
  });
  return images;
}

// Импортируем все изображения из папки /img
const images = importAll(
  require.context("../../img", false, /\.(png|jpe?g|svg)$/)
);

const Products = ({ productsData, pageSize, currentPage = 1 }) => {
  const startIndex = (currentPage - 1) * pageSize;
  const productsToDisplay = productsData.slice(
    startIndex,
    startIndex + pageSize
  );
  // Преобразуем данные о продуктах, добавляя ссылку на изображение к каждому продукту
  const products = productsToDisplay.map((product) => ({
    ...product,
    img: images[product.img], // Подставляем путь к изображению из импортированных
  }));

  return (
    <div className="products__items-wrap">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;

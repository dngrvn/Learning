import React, { createContext, useState, useEffect } from "react";
import productsData from "../data/Products.json"; // Импортируем данные о продуктах

// Создаем контекст
export const ProductDataContext = createContext();

// Создаем провайдер контекста
export const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Загрузка данных о продуктах при монтировании компонента
  useEffect(() => {
    // Можно выполнить здесь любую логику загрузки данных, например, из API или файла
    setProducts(productsData); // Устанавливаем данные о продуктах из импортированного файла
  }, []);

  return (
    <ProductDataContext.Provider value={{ products }}>
      {children}
    </ProductDataContext.Provider>
  );
};

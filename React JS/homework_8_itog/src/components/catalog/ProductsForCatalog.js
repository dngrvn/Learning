import React, { useState, useContext } from "react";
import Products from "../catalog/Products";
import Filters from "./filters/Filters";
import ProductsPagination from "./ProductsPagination";
import { ProductDataContext } from "../../contexts/ProductDataContext";

const PAGE_SIZE = 3; // Пример: количество товаров на одной странице

const ProductsForCatalog = () => {
  const { products } = useContext(ProductDataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSizeFilterChange = (selectedSize) => {
    // Toggle selected size
    if (selectedSizes.includes(selectedSize)) {
      setSelectedSizes(selectedSizes.filter((size) => size !== selectedSize));
    } else {
      setSelectedSizes([...selectedSizes, selectedSize]);
    }
    setCurrentPage(1);
  };

  // Фильтрация продуктов по размеру
  const filteredProducts =
    selectedSizes.length > 0
      ? products.filter((product) => selectedSizes.includes(product.size))
      : products;

  return (
    <section className="products center">
      <Filters onSizeFilterChange={handleSizeFilterChange} />
      <Products
        productsData={filteredProducts}
        pageSize={PAGE_SIZE}
        currentPage={currentPage}
      />
      <ProductsPagination
        productsData={filteredProducts}
        pageSize={PAGE_SIZE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default ProductsForCatalog;

import React, { useContext } from "react";
import { ProductDataContext } from "../../contexts/ProductDataContext";
import Products from "../catalog/Products";

const PAGE_SIZE = 3; // Пример: количество товаров на одной странице

const ProductsForPage = () => {
  const { products } = useContext(ProductDataContext);

  return (
    <section className="products center">
      <div className="products__items-wrap">
        <Products productsData={products} pageSize={PAGE_SIZE} />
      </div>
    </section>
  );
};

export default ProductsForPage;

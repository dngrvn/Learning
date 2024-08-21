import React, { useContext } from "react";
import Products from "../catalog/Products";
import { Link } from "react-router-dom";
import { ProductDataContext } from "../../contexts/ProductDataContext";

const PAGE_SIZE = 6; // Пример: количество товаров на одной странице

const ProductsHome = () => {
  const { products } = useContext(ProductDataContext);

  return (
    <section className="products center">
      <h2 className="products__title">Featured Items</h2>
      <p className="products__text">
        Shop for items based on what we featured in this week
      </p>
      <Products productsData={products} pageSize={PAGE_SIZE} />
      <Link to="/catalog" className="products__button">
        Browse All Product
      </Link>
    </section>
  );
};

export default ProductsHome;

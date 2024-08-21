import React from "react";
import Header from "../basis/header/Header";
import Footer from "../basis/footer/Footer";
import Subscribe from "../basis/subscribe/Subscribe";
import Features from "../basis/features/Features";
import BreadCrumbs from "../basis/BreadCrumbs";
import ProductsForCatalog from "./ProductsForCatalog";

const CatalogPage = () => {
  return (
    <div>
      <Header />
      <BreadCrumbs title={"NEW ARRIVALS"} />
      <ProductsForCatalog />
      <Features />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default CatalogPage;

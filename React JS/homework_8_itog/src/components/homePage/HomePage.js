import React from "react";
import Header from "../basis/header/Header";
import Footer from "../basis/footer/Footer";
import Subscribe from "../basis/subscribe/Subscribe";
import Top from "./Top";
import Offers from "./Offers";
import Features from "../basis/features/Features";
import ProductsHome from "./ProductsHome";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Top />
      <Offers />
      <ProductsHome />
      <Features />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePage;

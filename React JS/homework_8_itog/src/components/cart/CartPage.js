import React from "react";
import Header from "../basis/header/Header";
import Footer from "../basis/footer/Footer";
import Subscribe from "../basis/subscribe/Subscribe";
import BreadCrumbs from "../basis/BreadCrumbs";
import Cart from "./Cart";

const CartPage = () => {
  return (
    <div>
      <Header />
      <BreadCrumbs title={"SHOPPING CART"} />
      <Cart />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default CartPage;

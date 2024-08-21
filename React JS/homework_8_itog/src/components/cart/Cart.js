import React from "react";
import Order from "./Order";
import OrderInfo from "./OrderInfo";

const Cart = () => {
  return (
    <section className="cart center">
      <Order />
      <OrderInfo />
    </section>
  );
};

export default Cart;

import React from "react";
import { useSelector } from "react-redux";

const OrderInfo = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Вычисляем общую сумму корзины
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart__right">
      <div className="cart__address">
        <div className="cart__address__title">SHIPPING ADDRESS</div>
        <div className="cart__address__form">
          <input
            type="text"
            name="country"
            id="country"
            className="cart__address__input"
            placeholder="Bangladesh"
          />
          <input
            type="text"
            name="region"
            id="region"
            className="cart__address__input"
            placeholder="State"
          />
          <input
            type="text"
            name="zip"
            id="zip"
            className="cart__address__input"
            placeholder="Postcode / Zip"
          />
          <button type="submit" className="cart__address__button">
            GET A QUOTE
          </button>
        </div>
      </div>
      <div className="cart__amount_card">
        <p className="cart__amount_card__subtotal">
          <span>SUB TOTAL</span>
          <span>${totalAmount.toFixed(2)}</span>
        </p>
        <p className="cart__amount_card__total">
          <span>GRAND TOTAL</span>
          <span className="cart__amount_card__total__price">
            ${totalAmount.toFixed(2)}
          </span>
        </p>
        <hr className="cart__amount_card__line" />
        <a href="#" className="cart__amount_card__button">
          PROCEED TO CHECKOUT
        </a>
      </div>
    </div>
  );
};

export default OrderInfo;

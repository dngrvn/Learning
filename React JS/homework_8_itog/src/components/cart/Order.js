import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../../store";
import { useNavigate } from "react-router-dom";

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

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  // Преобразуем данные о продуктах, добавляя ссылку на изображение к каждому продукту
  const products = cartItems.map((product) => ({
    ...product,
    imgcart: images[product.imgcart], // Подставляем путь к изображению из импортированных
  }));

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity({ productId, newQuantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleContinueShopping = () => {
    navigate("/catalog");
  };

  return (
    <div className="cart__left">
      {products.length === 0 ? (
        <p>No products</p>
      ) : (
        <div className="cart__product_cards">
          {products.map((item) => (
            <article key={item.id} className="cart__product_card">
              <svg
                onClick={() => handleRemoveFromCart(item.id)}
                className="cart__product_card__remove_products_icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                  fill="#575757"
                />
              </svg>
              <img
                src={item.imgcart}
                alt={item.title}
                className="cart__product_card__img"
              />
              <div className="cart__product_card__info">
                <h3 className="cart__product_card__info__title">
                  {item.title}
                </h3>
                <p className="cart__product_card__info__param">
                  Price:{" "}
                  <span className="cart__product_card__info__price">
                    ${item.price.toFixed(2)}
                  </span>
                </p>
                <p className="cart__product_card__info__param">
                  Color: <span>Red</span>
                </p>
                <p className="cart__product_card__info__param">
                  Size: <span>{item.size}</span>
                </p>
                <label htmlFor={`quantity-${item.id}`}>
                  Quantity:
                  <input
                    className="cart__product_card__info__quantity_input"
                    type="number"
                    name={`quantity-${item.id}`}
                    id={`quantity-${item.id}`}
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                </label>
              </div>
            </article>
          ))}
        </div>
      )}
      <div className="cart__buttons">
        <a href="#" className="cart__button" onClick={handleClearCart}>
          CLEAR SHOPPING CART
        </a>
        <a href="#" className="cart__button" onClick={handleContinueShopping}>
          CONTINUE SHOPPING
        </a>
      </div>
    </div>
  );
};

export default Order;

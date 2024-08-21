import { createSlice, configureStore } from "@reduxjs/toolkit";

// Инициализируем начальное состояние корзины
const initialCartState = {
  items: [],
};

// Создание slice (кусочка состояния) для корзины
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
    updateQuantity(state, action) {
      const { productId, newQuantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === productId);
      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
      }
    },
  },
});

// Экспорт actions, reducers
export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;
export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

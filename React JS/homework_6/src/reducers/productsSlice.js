import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = productsAdapter.getInitialState();

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: productsAdapter.addOne,
    removeProduct: productsAdapter.removeOne,
    updateProduct: productsAdapter.updateOne,
    toggleProductAvailability: (state, action) => {
      const productId = action.payload;
      const product = state.entities[productId];
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateProduct,
  toggleProductAvailability,
} = productsSlice.actions;

export const { selectAll: selectAllProducts, selectById: selectProductById } =
  productsAdapter.getSelectors((state) => state.products);

export default productsSlice.reducer;

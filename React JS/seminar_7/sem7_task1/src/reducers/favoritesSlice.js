import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favList",
  initialState: {
    array: [],
  },
  reducers: {
    addFav: (state, { payload: newFavItem }) => {
      if (state.array.some((item) => item.id === newFavItem.id)) {
        return;
      }
      state.array.push(newFavItem);
    },
    deleteFav: (state, { payload: favItem }) => {
      const filteredArray = state.array.filter(
        (item) => item.id !== favItem.id
      );
      state.array = filteredArray;
    },
  },
});

export const { addFav, deleteFav } = favoritesSlice.actions;

export default favoritesSlice.reducer;

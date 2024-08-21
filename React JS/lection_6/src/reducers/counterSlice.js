import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count--;
      }
    },
    reset: (state) => {
      state.count = 0;
    },
    add: (state) => {
      state.count += 5;
    },
    subtract: (state) => {
      if (state.count >= 3) {
        state.count -= 3;
      } else {
        state.count = 0;
      }
    },
  },
});

export const { increment, decrement, reset, add, subtract } =
  counterSlice.actions;
export default counterSlice.reducer;

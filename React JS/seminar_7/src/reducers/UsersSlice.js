import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: {
      entities: [],
      loading: "idle",
      error: null,
    },
  },
  reducers: {
    fetchRequest: (state) => {
      state.value.loading = "pending";
    },
    fetchSuccess: (state, action) => {
      state.value.entities = action.payload;
      state.value.loading = "succeeded";
    },
    fetchFailure: (state, action) => {
      state.value.loading = "failed";
      state.value.error = action.payload;
    },
  },
});

export const { fetchRequest, fetchSuccess, fetchFailure } = usersSlice.actions;

export default usersSlice.reducer;

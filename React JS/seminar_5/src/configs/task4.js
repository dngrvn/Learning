// store.js
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/task4";

const storeProfile = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default storeProfile;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/task3";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

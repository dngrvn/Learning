// const initialState = {
//   data: [],
// };

// function rootReducer(state = initialState, action) {
//   return state;
// }

// Persist

import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  root: (state = { data: [] }, action) => state, // Это ваш существующий редьюсер
  data: dataReducer, // Это ваш новый редьюсер для хранения данных
});

export default rootReducer;

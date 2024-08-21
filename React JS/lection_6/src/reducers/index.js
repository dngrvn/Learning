import { combineReducers } from "redux";
import counterReducer from "./counterSlice";
// здесь говорим, что будем использовать reducer
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;

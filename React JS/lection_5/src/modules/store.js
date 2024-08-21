// установка npm install @reduxjs/toolkit

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
// создание хранилища
export const store = configureStore({ reducer: reducer });

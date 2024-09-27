import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    array: [
      {
        id: 1,
        text: "Todo #1",
      },
      {
        id: 2,
        text: "Todo #2",
      },
      {
        id: 3,
        text: "Todo #3",
      },
    ],
  },
  reducers: {
    addTodo: (state, { payload: newTodoItem }) => {
      if (state.array.some((item) => item.id === newTodoItem.id)) {
        return;
      }
      state.array.push(newTodoItem);
    },
    deleteTodo: (state, { payload: todoItem }) => {
      const filteredArray = state.array.filter(
        (item) => item.id !== todoItem.id
      );
      state.array = filteredArray;
    },
  },
});

export const { addTodo, deleteTodo } = todoListSlice.actions;

export default todoListSlice.reducer;

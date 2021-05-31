import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Todo } from "./types";

type TodosState = {
  list: Todo[];
};

const initialState = {
  list: [],
} as TodosState;

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    setTodos: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setTodos } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.list;
export default todosSlice.reducer;

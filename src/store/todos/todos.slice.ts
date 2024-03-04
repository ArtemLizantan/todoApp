import { createSlice } from "@reduxjs/toolkit";
import {
  ITodoState,
  ISetTodoListAction,
  ISetFilterAction,
  IAddTodoAction,
} from "../../interfaces/interfaces";

const initialState: ITodoState = {
  todoList: [],
  filter: "all",
};

const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    setTodoList: (state, action: ISetTodoListAction) => {
      state.todoList = action.payload;
    },
    addTodo: (state, action: IAddTodoAction) => {
      state.todoList.push({
        task: action.payload.task,
        id: action.payload.id,
        completed: false,
      });
    },
    updateTodo: (state, action) => {
      const { id, task } = action.payload;
      const index = state.todoList.findIndex((todo) => todo.id === id);
      state.todoList[index].task = task;
    },
    deleteTodo: (state, action) => {
      const idToDelete = action.payload;
      state.todoList = state.todoList.filter((todo) => todo.id !== idToDelete);
    },
    toggleCompleted: (state, action) => {
      const { id } = action.payload;
      const index = state.todoList.findIndex((todo) => todo.id === id);

      if (index !== -1) {
        state.todoList[index].completed = !state.todoList[index].completed;
      }
    },
    setFilter: (state, action: ISetFilterAction) => {
      state.filter = action.payload.filter;
    },
  },
});

export const {
  setTodoList,
  addTodo,
  updateTodo,
  deleteTodo,
  toggleCompleted,
  setFilter,
} = TodoSlice.actions;
export default TodoSlice.reducer;

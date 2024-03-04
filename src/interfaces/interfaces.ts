import { PayloadAction } from "@reduxjs/toolkit";

export interface IFilterButtonProps {
  filterType: string;
  onClick: (filterType: string) => void;
  count: number;
}

export interface IButtonProps {
  onClick: () => void;
  text: string;
}

export interface ITodo {
  task: string;
  id: string;
  completed: boolean;
}

export interface ITodoState {
  todoList: ITodo[];
  filter: string;
}

export interface ISetTodoListAction extends PayloadAction<ITodo[]> {}

export interface IAddTodoAction
  extends PayloadAction<{ task: string; id: string }> {}

export interface ISetFilterAction {
  type: string;
  payload: {
    filter: string;
  };
}

export interface IContainerProps {
  children: React.ReactNode;
}

export interface IModalProps {
  active: boolean;
  onClose: () => void;
  addItem: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

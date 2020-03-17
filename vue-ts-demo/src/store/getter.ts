import { ITodoItem, State } from "@/store/state";

export const getters = {
  getCurrentTodoList(state: State): ITodoItem[] {
    return state.todoList;
  }
};

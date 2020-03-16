import { MutationTree } from "vuex";
import { ITodoItem, State } from './state'

export const mutations: MutationTree<State> = {
  //创建todo
  createTodoItem(state: State, todoItem: ITodoItem) {
    state.todoList.push(todoItem)
  }
}
import { MutationTree } from "vuex";
import { ITodoItem, State } from "./state";
import { _ } from "@/utils";

export const mutations: MutationTree<State> = {
  //创建todo
  createTodoItem(state: State, todoItem: ITodoItem) {
    state.todoList.push(todoItem);
  },
  //选择图片背景
  selectColor(state: State, payload: { id: string; color: string }) {
    const list = state.todoList;
    const todo = _.find(list, payload.id);

    if (todo) {
      todo.color = payload.color;
    }
  },
  //选择图标
  selectIcon(state: State, payload: { id: string, icon: string}) {
    const list = state.todoList;
    const todo = _.find(list, payload.id);

    if (todo) {
      todo.iconName = payload.icon
    }
  },
  //编辑任务名称
  changeName(state: State, payload: { id: string; value: string }) {
    const list = state.todoList;
    const todo = _.find(list, payload.id);

    if (todo) {
      todo.name = payload.value;
    }
  }
};

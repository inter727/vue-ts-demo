import { MutationTree } from "vuex";
import { ITodoItem, Mode, State } from "./state";
import { _ } from "@/utils";

export const mutations: MutationTree<State> = {
  //创建todo
  createTodoItem(state: State, todoItem: ITodoItem) {
    state.todoList.push(todoItem);
  },
  //选择图片背景
  selectColor(state: State, payload: { id: string; color: string }) {
    const list: ITodoItem[] = state.todoList;
    const todo: ITodoItem | undefined = _.find(list, payload.id);

    if (todo) {
      todo.color = payload.color;
    }
  },
  //选择图标
  selectIcon(state: State, payload: { id: string; icon: string }) {
    const list: ITodoItem[] = state.todoList;
    const todo: ITodoItem | undefined = _.find(list, payload.id);

    if (todo) {
      todo.iconName = payload.icon;
    }
  },
  //编辑任务名称
  changeName(state: State, payload: { id: string; value: string }) {
    const list: ITodoItem[] = state.todoList;
    const todo: ITodoItem | undefined = _.find(list, payload.id);

    if (todo) {
      todo.name = payload.value;
    }
  },
  //删除未定义好的任务
  removeTodoItem(state: State) {
    state.todoList.pop();
  },
  //从编辑模式进入完成模式
  finishTodoItem(state: State) {
    const list: ITodoItem[] = state.todoList;
    const todo: ITodoItem | undefined = list[list.length - 1];

    if (todo) {
      todo.mode = Mode.finish;
    }
  },
  //将此任务设置为完成
  doneTodoItem(state: State, id: string) {
    const list: ITodoItem[] = state.todoList;
    const todo: ITodoItem | undefined = _.find(list, id);

    if (todo) {
      todo.isDone = true;
    }
  },
  //将此任务删除
  deleteTodoItem(state: State, id: string) {
    const list: ITodoItem[] = state.todoList;
    state.todoList = list.filter(item => item.id !== id);
  }
};

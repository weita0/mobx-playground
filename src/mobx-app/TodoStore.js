import { observable, computed } from 'mobx'
import TodoModel from './TodoModel'

export default class TodoStore {
  @observable todos = []

  @computed get activeTodoCount () {
    return this.todos.reduce((sum, todo) => sum + (todo.finished ? 0 : 1))
  }

  addTodo (title) {
    this.todos.push(new TodoModel(_.uniqueId, title, false)) // id, title, finished
  }
}
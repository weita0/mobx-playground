import { observable, computed, reaction } from 'mobx'

export default class TodoStore {
  @observable todos = []

  unrelatedArray = []

  get countFinished () {
    return this.todos.filter(todo => todo.finished).length
  }

  @computed get progress () {
    if (this.todos.length === 0) {
      return 'This to-do list is empty, \nyou can do your own business, or create a new one'
    }
    return `Next todo: ${this.todos[0].title} \n` +
      `Progress: ${this.countFinished}/${this.todos.length}`
  }

  @computed get howManyUnrelated () {
    console.log(this.unrelatedArray)
    return this.unrelatedArray.length
  }

  addTodo (title) {
    if (!title) {
      return
    }
    this.todos.push({
      id: _.uniqueId(),
      title,
      finished: false
    })
  }

}
import React from 'react'
import { observer } from 'mobx-react'
import { observable, computed, autorun } from 'mobx'

class Todo {
  id = Math.random()
  @observable title = ''
  @observable finished = false
}

class TodoStore {
  @observable todos = []
  @observable pendingRequests = 0
  constructor () {
    autorun(() => console.log(this.report))
  }
  @computed get completedTodosCount () {
    return this.todos.filter(todo => todo.completed).length
  }
  @computed get report () {
    if (this.todos.length === 0) {
      return '<none>'
    }
    return `Next todo: "${this.todos[0].task}".\nProgress: ${this.completedTodosCount}/${this.todos.length}`
  }
  addTodo (task) {
    this.todos.push({
      id: Math.random(),
      task: task,
      completed: false,
      assignee: null
    })
  }
}

const todoStore = new TodoStore()

todoStore.addTodo('leave the seat')
todoStore.addTodo('wait the elevator')
todoStore.addTodo('walk to Starbucks')
todoStore.addTodo('buy a coffee')

class TodoList {
  @observable todos = []
  @computed get unfinishedTodoCount () {
    return this.todos.filter(todo => !todo.finished).length
  }
}

// const list = new TodoList()

// list.todos.push(new Todo({
//   title: 'fist task'
// }))

@observer
class TodoListView extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {
            this.props.todoList.todos.map(todo => 
              <TodoView todo={todo} key={todo.id} />
            )
          }
        </ul>
      </div>
    )
  }
}

const TodoView = observer(({todo}) => {
  console.log('todo >>', todo)
  return <li>
    <input 
      type="checkbox"
      checked={todo.finished}
      onClick={() => todo.finished = !todo.finished}
    /><span>{todo.title || 'nothing'}</span>
  </li>
})

const store = new TodoList()

// autorun(() => {
//   console.log('Task left: ' + store.unfinishedTodoCount)
// })

setTimeout(() => {
  store.todos.push(
    new Todo({title: 'Buy Coffee'})
    // new Todo({title: 'Drink coffee'})
  )
}, 1000)

export default class SessionOne extends React.Component {
  render () {
    return (
      <div>Session One</div>
    )
  }
}

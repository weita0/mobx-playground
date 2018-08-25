import React from 'react'
import { observer } from 'mobx-react'
import { ObservableTodoStore } from './session_two'

@observer
class TodoList extends React.Component {
  onNewTodo = () => {
    this.props.store.addTodo(window.prompt('task name'))
  }
  render () {
    const store = this.props.store
    return (
      <div>
        { store.report }
        <ul>
          {
            store.todos.map((todo, idx) => <TodoView todo={todo} key={idx} />)
          }
        </ul>
        { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small> (double-click a todo to edit)</small>
      </div>
    )
  }
}

@observer
class TodoView extends React.Component {
  onToggleCompleted = () => {
    const todo = this.props.todo
    todo.complete = !todo.complete
  } 
  render () {
    const {todo} = this.props
    return (
      <li ><input type='checkbox' checked={todo.checked} onChange={this.onToggleCompleted} />{todo.task}</li>
    )
  }
}

export default () => <TodoList store={ new ObservableTodoStore() } />

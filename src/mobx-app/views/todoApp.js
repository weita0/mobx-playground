import React from 'react'
import TodoItem from '../TodoItem'
import {observer} from 'mobx-react'

@observer
export default class TodoApp extends React.Component {
  handleTodoCraete = event => {
    if (event.which !== 13) {
      return
    }
    let input = document.getElementById('new-todo')
    let val = input.value
    if (val) {
      this.props.todoStore.addTodo(val)
      input.value = ''
    }
  }
  render () {
    return (
      <div>
        <div className='todoapp'>
          <h1>Task List(MobX)</h1>
          <ul className='todo-list'>
            {
              this.props.todoStore.todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
              ))
            }
          </ul>
          <input
            placeholder='What needs to be done?'
            onKeyDown={this.handleTodoCraete}
            id='new-todo'
            className='new-todo'
          />
        </div>
        <div className='list-status'>
          {`Total: ${this.props.todoStore.totalTodoCount}
            Done: ${this.props.todoStore.finishedTodoCount}
            Undone: ${this.props.todoStore.activeTodoCount}`}
        </div>
      </div>
    )
  }
}

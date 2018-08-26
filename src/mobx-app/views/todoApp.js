import React from 'react'
import TodoItem from '../TodoItem'
export default class TodoApp extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {
            this.props.todoStore.todos.map(todo => (
              <TodoItem todo={todo} />
            ))
          }
        </ul>
      </div>
    )
  }
}

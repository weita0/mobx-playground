import React from 'react'
import TodoApp from './views/todoApp'
import TodoStore from './TodoStore'

export default class MobXApp extends React.Component {
  render () {
    return (
      <div>
        <TodoApp todoStore={new TodoStore()} />
      </div>
    )
  }
}

import React from 'react'
import TodoApp from './views/todoApp'
import TodoStore from './TodoStore'
import DevTools from 'mobx-react-devtools'

export default class MobXApp extends React.Component {
  render () {
    return (
      <div>
        <TodoApp todoStore={new TodoStore()} />
        {/* <DevTools /> */}
      </div>
    )
  }
}

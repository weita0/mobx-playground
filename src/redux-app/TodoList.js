import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import Todo from './Todo'
import UserInput from './UserInput'
import Status from './Status'

class TodoList extends React.Component {
  render () {
    // console.log(this.props.todos)
    return (
      <div>
        <div className='todoapp'>
          <h1>Task List(Redux)</h1>
          <ul className='todo-list'>
            {
              this.props.todos.map(todo => <Todo key={todo.id} toggleTodo={this.props.actions.toggleTodo} {...todo} />)
            }
          </ul>
          {/* <h2>New Task</h2> */}
          <UserInput addTodo={this.props.actions.addTodo} />
        </div>
        <Status todos={this.props.todos} />
      </div>
    )
  }
}

export default connect(state => ({
  todos: state.todos 
}), dispatch => ({
  actions: bindActionCreators(actions, dispatch)
}))(TodoList)
import React from 'react'

export default class TodoItem extends React.Component {
  handleToggle () {
    this.props.todo.toggle()
  }
  render () {
    const { todo } = this.props
    return (
      <li style={{textDecoration: todo.finished ? 'line-through' : 'none'}}>
        <input
          type='checkbox'
          checked={todo.finished}
          onChange={this.handleToggle}
        /> 
        <label>{todo.title}</label>
      </li>
    )
  }
}
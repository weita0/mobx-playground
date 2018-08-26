import React from 'react'

export default class Todo extends React.Component {
  toggleTodo = (id, e) => {
    this.props.toggleTodo(id, e.target.checked)
  }
  render () {
    const { title, finished, id } = this.props
    return (
      <div>
        <input type='checkbox' checked={finished} onChange={this.toggleTodo.bind(this, id)} />
        <span style={{textDecoration: finished ? 'line-through' : 'none'}}>{title}</span>
      </div>
    )
  }
}

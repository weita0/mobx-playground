import React from 'react'

export default class Todo extends React.Component {
  toggleTodo = (id, e) => {
    this.props.toggleTodo(id, e.target.checked)
  }
  render () {
    const { title, finished, id } = this.props
    return (
      <li className={finished ? 'finished' : ''}>
        <div className='view'>
          <input
            type='checkbox'
            className='toggle'
            checked={finished}
            onChange={this.toggleTodo.bind(this, id)}
          />
          <label>{title}</label>
        </div>
      </li>
    )
  }
}

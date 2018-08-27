import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class TodoItem extends React.Component {
  handleToggle = () => {
    this.props.todo.toggle()
  }
  render () {
    const { todo } = this.props
    return (
      <li className={todo.finished ? 'finished' : ''}>
        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            checked={todo.finished}
            onChange={this.handleToggle}
          />
          <label>{todo.title}</label>
        </div>
      </li>
    )
  }
}
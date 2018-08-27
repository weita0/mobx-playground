import React from 'react'

export default class Status extends React.Component {
  render () {
    const todos = this.props.todos
    return (
      <div className='list-status'>
        {`Total: ${todos.length} \t
          Done: ${todos.filter(el => el.finished).length} \t
          Undone: ${todos.filter(el => !el.finished).length}`}
      </div>
    )
  }
}
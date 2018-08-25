import React from 'react'
import TodoStore from './todoStore'
import {observer} from 'mobx-react'
import { autorun } from 'mobx'
import { __esModule } from '../node_modules/react-router-dom/Redirect';

export const todoStore = new TodoStore()

@observer
export default class SessionOne extends React.Component {
  state = {
    inputValue: ''
  }
  componentDidMount () {
    autorun(() => {
      console.log(todoStore.progress)
    })
    document.getElementById('task-input').addEventListener('keydown', e => {
      if (e.which === 13) { // enter
        if (this.state.inputValue) {
          todoStore.addTodo(this.state.inputValue)
          // this.props.todoStore.addTodo(this.state.inputValue)
          this.setState({
            inputValue: ''
          })
        }
      }
    })
  }
  handleInput = e => {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleChecked = (id, e) => {
    // console.log(id, e.target.checked)
    todoStore.todos.find(el => el.id === id).finished = e.target.checked
    // this.props.todoStore.toggleFinished(id, e.target.checked)
  }
  clearFinished = () => {
    todoStore.todos = todoStore.todos.filter(todo => !todo.finished)
  }
  addUnrelated = () => {
    console.log('hello')
    todoStore.unrelatedArray.push(_.uniqueId())
  }
  render () {
    // const todoStore = this.props.todoStore
    return (
      <div>
        <p>示例一</p>
        <h1>Task List</h1>
        <ul>
          {
            todoStore.todos.map(el =>
              <li key={el.id}>
                <input type='checkbox' onChange={this.handleChecked.bind(this, el.id)} />
                <span style={{textDecoration: el.finished ? 'line-through' : 'none'}}>{el.title}</span>
              </li>
            )
          }
        </ul>
        {todoStore.todos.length !== 0 && <button onClick={this.clearFinished}>clear the finished</button>}
        <button onClick={this.addUnrelated}>add an unrelated</button>
        <h2>New Task:</h2>
        <input id='task-input' onChange={this.handleInput} value={this.state.inputValue} />
        <h2>Progress:</h2>
        <p>{todoStore.progress}</p>
        <p>{`how many unrelated: ${todoStore.howManyUnrelated}`}</p>
      </div>
    )
  }
}
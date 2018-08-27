import React from 'react'
import { observable, computed, autorun, toJS } from 'mobx'
import { observer } from 'mobx-react'

class Todo {
  @observable title
  @observable finished
  id 

  constructor (title, finished=false, id=_.uniqueId()) {
    this.title = title
    this.finished = finished
    this.id = id
  }
}

// const todo = new Todo('wake up')
const todo = new Todo('wake up')

@observer
export default class SessionTwo extends React.Component {
  componentDidMount () {
    setTimeout(() => {
      todo.title = 'go to sleep'
    }, 3000)
    autorun(() => {
      localStorage.setItem('todo', JSON.stringify(toJS(todo)))
    })
  }
  toggle = () => {
    todo.finished = !todo.finished
  }
  changeId = () => {
    todo.id = _.uniqueId()
  }
  componentWillUnmount () {
    console.log('clear')
    localStorage.clear()
  }
  render () {
    return (
      <div>
        示例二 
        <p>{`Id:  ${todo.id}`}</p>
        <p>{`Title:  ${todo.title}`}</p>
        <p>{`Finished:  ${todo.finished}`}</p>
        <button onClick={this.toggle}>toggle</button>
        <button onClick={this.changeId}>change Id</button>
        <p>
          {
            localStorage.getItem('todo')
          }
        </p>
      </div>
    )
  }
} 
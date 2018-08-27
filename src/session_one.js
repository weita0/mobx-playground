import React from 'react'
import TodoStore from './todoStore'
import {observer} from 'mobx-react'
import { autorun, observable, computed, action } from 'mobx'

class Store {
  @observable todos = []
  // todos = []

  unrelated = []
  // todos = [] 
  addTodo (title) {
    this.todos.push({
      id: _.uniqueId(),
      title,
      finished: false
    })
  }

  removeTodo (id) {
    this.todos = this.todos.filter(el => el.id !== id)
  }

  @computed get leftTask () {
    return this.todos.filter(el => !el.finished).length
  }
  
  get howManyUnrelated () {
    return this.unrelated.length
  }

  // @computed get total () {
  //   return this.unrelated.length + this.todos.length
  // }
}

const store = new Store()

@observer
export default class SessionOne extends React.Component {
  componentDidMount () {
    setTimeout(() => {
      store.addTodo('play one song')
      store.unrelated.push(0)
    }, 1000)

    setTimeout(() => {
      store.addTodo('make a coffee')
      store.unrelated.push(1)
    }, 2000)
    
  }
  del (id, e) {
    store.removeTodo(id)
  }
  render () {
    return (
      <div>
        示例一
        <div>
          <ul>
            {
              store.todos.map(el =>
                <li key={el.id} onDoubleClick={this.del.bind(this, el.id)}>{el.title}</li>
              ) 
            }
          </ul>
          <p>{`${store.leftTask} left`}</p>
          <p>
            {`${store.howManyUnrelated} left`}
          </p>
          {/* <p>
            {`${store.total} left`}
          </p> */}
        </div>
      </div>
    )
  }
}
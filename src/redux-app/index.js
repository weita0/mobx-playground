import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import TodoList from './TodoList'

const store = createStore(reducer)

export default class ReduxApp extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
  }
}
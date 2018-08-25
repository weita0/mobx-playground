import React from 'react'
import { store, handleAdd } from './redux-example'
import axios from 'axios'

export default class Content extends React.Component {
  componentDidMount () {
    // document.getElementById('content').appendChild(mx)
    store.dispatch(handleAdd(5))
  }
  render () {
    return (
      <div id='content'>
        
      </div>
    )
  }
}
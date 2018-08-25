import React, { Fragment } from 'react'
import { store, handleAdd } from './redux-example'
import content from './mobx-share.md'

export default class Content extends React.Component {
  componentDidMount () {
    // document.getElementById('content').appendChild(mx)
    store.dispatch(handleAdd(5))
  }
  render () {
    return (
      <div id='content'>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    )
  }
}
import React, { Component, PureComponent } from 'react'

const obj = {
  foo: 'hello',
  bar: 'world'
}

let str = 'hello world'

export default class Parents extends Component {
  state = {
    obj: {
      foo: 'hello',
      bar: 'world'
    }
  }
  // static obj = {
  //   foo: 'hello',
  //   bar: 'world'
  // }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        test: true
      }) 
    }, 2000)
  }
  render () {
    return (
      <div>
        <h1>Parents Component</h1>
        <Children />
      </div>
    )
  }
}

class Children extends PureComponent {
  render () {
    console.log('rerender')
    return (
      <div>
        <h2>I'm child</h2>
      </div>
    )
  }
}
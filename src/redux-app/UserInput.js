import React from 'react'

export default class UserInput extends React.Component {
  state = {
    inputValue: ''
  }
  onCreate = e => {
    if (e.which === 13) {
      console.log(e.target.value)
      this.props.addTodo(e.target.value)
      this.setState({
        inputValue: ''
      })
    }
  }
  onInputChange = e => {
    this.setState({
      inputValue: e.target.value
    })
  }
  render () {
    return (
      <div>
        <input onKeyDown={this.onCreate} value={this.state.inputValue} onChange={this.onInputChange} />
      </div>
    )
  }
}

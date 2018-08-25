import React from 'react'

class TodoStore {
	todos = [];

	get completedTodosCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }

	report() {
		if (this.todos.length === 0)
			return '试试添加一个任务';
		return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}

  addTodo(task) {
    this.todos.push({
      id: parseInt(Math.random() * 1000),
      task: task,
      completed: false,
      assignee: null
    });
	}
}

const todoStore = new TodoStore()

export default class SessionOne extends React.Component {
  state = {
    inputValue: ''
  }
  componentDidMount () {
    document.getElementById('task-input').addEventListener('keydown', e => {
      if (e.which === 13) { // enter
        if (this.state.inputValue) {
          todoStore.addTodo(this.state.inputValue)
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
    todoStore.todos.find(el => el.id === id).completed = e.target.checked
  }
  render () {
    return (
      <div>
        <h1>Task List</h1>
        <ul>
          {
            todoStore.todos.map(el => <li key={el.id}><input type='checkbox' onChange={this.handleChecked.bind(this, el.id)} />{el.task}</li>)
          }
        </ul>
        <h2>New Task:</h2>
        <input id='task-input' onChange={this.handleInput} value={this.state.inputValue} />
        <h2>Progress:</h2>
        <p>{todoStore.report()}</p>
      </div>
    )
  }
}
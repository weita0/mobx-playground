const initState = {
  todos: []
}

export default function reducer (state = initState, action) {
  switch (action.type) {
    case 'ADDTODO':
      return {...state, todos: [...state.todos, {title: action.title, finished: false, id: _.uniqueId()}]}
    case 'TOGGLE_TODO':
      return {...state, todos: state.todos.map(el => {
        if (el.id === action.id) {
          return {
            ...el,
            finished: action.checked
          }
        } else {
          return el
        }
      })}
    default:
      return state
  }
}
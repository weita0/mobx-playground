export function addTodo (title) {
  return {
    type: 'ADDTODO',
    title
  }
}

export function toggleTodo (id, checked) {
  return {
    type: 'TOGGLE_TODO',
    id,
    checked
  }
}
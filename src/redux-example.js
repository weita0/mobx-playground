// define actions
import { createStore } from 'redux'

export function handleAdd (amount) {
  return {
    type: 'ADD',
    amount
  }
}

function reducer (state = { count: 0 }, action) {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + action.amount }
    default:
      return state
  }
}

export const store = createStore(reducer)

store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch(handleAdd(5))
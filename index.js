const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = Redux.createStore(counter)

const valueElement = document.getElementById('value')

function render() {
  valueElement.innerHTML = store.getState().toString()
}

render()
store.subscribe(render)
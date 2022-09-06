let state;

// Takes in 'action' and does something depending on the typeOf 
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'counter/increment':
      state = { count: state.count + 1 }
      return state;
    default:
      return state;
  }
}

// Re-sets state variable to the return value of the reducer function
const dispatch = (action) => {
  state = reducer(state, action)
  render()
}

// html zzzzz
const render = () => {
  const container = document.getElementById('container')
  container.textContent = state.count
}

// Initiailly render state to the page
dispatch({ type: '@@INIT' })

// html zzzzz
const incBtn = document.getElementById('button')
incBtn.addEventListener('click', () => {
  dispatch({ type: 'counter/increment' })
})
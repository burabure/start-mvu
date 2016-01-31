import React from 'react'
import ReactDOM from 'react-dom'
import simple from './startApp'

// initialModel : Model
const model = 1

// update : (Model, Action) -> Model
const update = (model, action) => {
  switch (action) {
    case 'INCREMENT': return model + 1
    case 'DECREMENT': return model - 1
    default: return model
  }
}

// view : (Dispatcher Action, Model) -> Html
const view = ({ dispatch, model }) =>
  <div>
    <h1>Count: {model}</h1>
    <button onClick={dispatch('INCREMENT')}>Increment</button>
    <button onClick={dispatch('DECREMENT')}>Decrement</button>
  </div>


// run
simple({ model, view, update })
  .forEach(view => {
    ReactDOM.render(view, document.getElementById('app'))
  })

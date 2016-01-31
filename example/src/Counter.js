import React from 'react'
import startAppSimple from '../../src/startAppSimple'


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

// view : { Model, Dispatcher Action } -> Html
const view = ({ model, dispatch }) =>
  <div>
    <h1>Count: {model}</h1>
    <button onClick={dispatch('INCREMENT')}>Increment</button>
    <button onClick={dispatch('DECREMENT')}>Decrement</button>
  </div>


export default startAppSimple({ model, view, update }, 'Counter')

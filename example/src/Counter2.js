import React from 'react'
import createApp from '../../src/createApp'


// model : Model
const model = { count: 1 }

// update : (Model, Action) -> Model
const update = (model, action) => {
  switch (action) {
    case 'INCREMENT': return { count: model.count + 1 }
    case 'DECREMENT': return { count: model.count - 1 }
    default: return model
  }
}

// Counter : { Model, Dispatcher Action } -> Html
const Counter = ({ model, dispatch }) =>
  <div>
    <h1>Count: {model.count}</h1>
    <button onClick={dispatch('INCREMENT')}>Increment</button>
    <button onClick={dispatch('DECREMENT')}>Decrement</button>
  </div>

export default createApp({ model, view: Counter, update })

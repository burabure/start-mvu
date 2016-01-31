import React from 'react'
import Counter from './Counter2'
import startAppSimple from '../../src/startAppSimple'


// model : Model
const model = {
  counters: [
    { id: 1 },
  ],
  nextID: 2,
}


// update : (Model, Action) -> Model
const update = (model, action) => {
  switch (action.type) {
    case 'ADD':
      const newCounter = {
        counters: model.counters.concat({ id: model.nextID }),
        nextID: model.nextID + 1,
      }
      return Object.assign({}, model, newCounter)
    case 'REMOVE':
      const removeCounter = {
        counters: model.counters.filter(counter => counter.id !== action.id),
      }
      return Object.assign({}, model, removeCounter)
    default: return model
  }
}


// displayCounters : { Array {id}, Dispatcher Action } -> Html
const displayCounters = ({ counters, dispatch }) =>
  counters.map(({ id }) =>
    <div key={id}>
      <Counter count={10} />
      <button onClick={dispatch({ type: 'REMOVE', id })}>Remove Counter</button>
    </div>
  )


// view : { Model, Dispatcher Action } -> Html
const view = ({ model, dispatch }) =>
  <div>
    <h1>Counters</h1>
    <pre>model: {JSON.stringify(model)}</pre>
    <button onClick={dispatch({ type: 'ADD' })}>Add Counter</button>
    {displayCounters({ counters: model.counters, dispatch })}
  </div>


export default startAppSimple({ model, view, update }, 'CounterList')

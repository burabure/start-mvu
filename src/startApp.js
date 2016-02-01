import Mailbox from './utils/Mailbox'
import scanObservable from './utils/scanObservable'


// simple : { model, view, update } -> Observable Html
export default function simple({ model, view, update }) {
  // actions : Mailbox Action
  const actions = new Mailbox([])

  // models : Observable Model
  const models = scanObservable(update, model, actions.observable)

  return models.map(model => {
    const dispatch = (action) => actions.observer.next.bind(actions.observer, action)
    return view({ model, dispatch })
  })
}

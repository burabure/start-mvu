import { Subject } from 'rxjs-es/Subject'
import 'rxjs-es/add/operator/map'
import 'rxjs-es/add/operator/scan'
import 'rxjs-es/add/operator/startWith'

// simple : { model, view, update } -> Observable Html
export default function simple({ model, view, update }) {
  // actions : Subject Action
  const actions = new Subject()

  // models : Observable Model
  const models = actions
    .startWith([])
    .scan(update, model)

  return models.map(model => {
    const dispatch = (action) => actions.next.bind(actions, action)
    return view({ model, dispatch })
  })
}

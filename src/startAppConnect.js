import React from 'react'
import { connect } from './startApp'


function startAppSimple({ model, view, update }, name = 'View') {
  view.displayName = name

  class StartAppSimple extends React.Component {
    componentDidMount() {
      connect({ model, update })
        .forEach(this.setState.bind(this))
    }

    render() {
      return this.state ?
        React.createElement(view, { model: this.state.model, dispatch: this.state.dispatch })
        : null
    }
  }

  StartAppSimple.displayName = `StartAppSimple(${name})`

  return StartAppSimple
}

export default startAppSimple

/* eslint no-param-reassign:0 */
import React from 'react'
import isPlainObject from './utils/isPlainObject'
import simple from './startApp'


function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'View'
}

function startAppSimple({ model, view, update }, name) {
  view.displayName = name ? name : getDisplayName(view)
  const reactView = React.createElement.bind(this, view)

  class StartAppSimple extends React.Component {
    componentDidMount() {
      const viewModel = isPlainObject(model) ?
        Object.assign({}, model, this.props) : this.props.model || model

      simple({ model: viewModel, view: reactView, update })
        .forEach(element => this.setState(element))
    }

    render() {
      return this.state ? this.state : null
    }
  }

  StartAppSimple.propTypes = { model: React.PropTypes.any }
  StartAppSimple.displayName = view.displayName ?
    `StartAppSimple(${view.displayName})` : 'StartAppSimple'

  return StartAppSimple
}

export default startAppSimple

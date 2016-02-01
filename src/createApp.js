/* eslint no-param-reassign:0 */
import React from 'react'
import isPlainObject from './utils/isPlainObject'
import startMVU from './startMVU'


function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'View'
}

export default function createApp({ model, view, update }, name) {
  view.displayName = name ? name : getDisplayName(view)
  const reactView = React.createElement.bind(this, view)

  class MVUApp extends React.Component {
    componentDidMount() {
      const viewModel = isPlainObject(model) ?
        Object.assign({}, model, this.props) : this.props.model || model

      startMVU({ model: viewModel, view: reactView, update })
        .forEach(element => this.setState(element))
    }

    render() {
      return this.state ? this.state : null
    }
  }

  MVUApp.propTypes = { model: React.PropTypes.any }
  MVUApp.displayName = view.displayName ?
    `MVUApp(${view.displayName})` : 'MVUApp'

  return MVUApp
}

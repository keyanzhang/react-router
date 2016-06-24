import React from 'react'
import hoistStatics from 'hoist-non-react-statics'
import { routerShape } from './PropTypes'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default function withRouter(WrappedComponent) {
  class WithRouter extends React.Component {
    static contextTypes = { router: routerShape };

    render() {
      return <WrappedComponent {...this.props} router={this.context.router} />
    }
  }

  WithRouter.displayName = `withRouter(${getDisplayName(WrappedComponent)})`
  WithRouter.WrappedComponent = WrappedComponent

  return hoistStatics(WithRouter, WrappedComponent)
}

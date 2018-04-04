import React from 'react'
import { hydrate } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Router from './config/Router'
import configureGlamorStyles from './config/configureGlamorStyles'

import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'

// Rehydrate glamor ids from the SSR
configureGlamorStyles()

const renderApp = (Component) => {
  hydrate(
    <AppContainer warnings={false}>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

renderApp(Router)

if (module.hot) {
  module.hot.accept('./config/Router', () => {
    const NewRouter = require('./config/Router').default
    renderApp(NewRouter)
  })
}

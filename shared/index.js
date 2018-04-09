import React from 'react'
import { hydrate } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import BrowserRouter from './config/BrowserRouter'
import configureGlamorStyles from './config/configureGlamorStyles'

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

renderApp(BrowserRouter)

if (module.hot) {
  module.hot.accept('./config/BrowserRouter', () => {
    const NewRouter = require('./config/BrowserRouter').default
    renderApp(NewRouter)
  })
}

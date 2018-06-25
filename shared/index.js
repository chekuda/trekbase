import React from 'react'
import { hydrate } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import BrowserRouter from './config/BrowserRouter'
import configureGlamorStyles from './config/configureGlamorStyles'
import { Provider } from 'react-redux'

import configureStore from './redux/configureStore'

// Rehydrate glamor ids from the SSR
configureGlamorStyles()

const store = configureStore(window.__INITIAL_STORE__)

const renderApp = (Component) => {
  hydrate(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <Component />
      </Provider>
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

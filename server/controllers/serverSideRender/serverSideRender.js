import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { renderStatic } from 'glamor/server'
import serializeJS from 'serialize-javascript'
import { Provider } from 'react-redux'

import App from '../../../shared/components/App'
import configureStore from '../../../shared/redux/configureStore'

export default (req, res) => {
  const context = {}
  const initialState = {
    mapReducer: {}
  }

  const store = configureStore(initialState)

  const { html, css, ids = [] } = renderStatic(() => renderToString(
    <StaticRouter location={req.url} context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  ))

  const templateData = {
    title: 'Trekbase',
    initialHtml: html,
    initialCSS: css,
    initialIds: serializeJS(ids),
    initialStore: serializeJS(store.getState(), { isJSON: true })
  }

  // Render the index.handlebars with the template data.
  res.render('index', templateData)
}

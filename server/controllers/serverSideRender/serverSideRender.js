import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { renderStatic } from 'glamor/server'
import serializeJS from 'serialize-javascript'
import App from '../../../shared/components/App'

export default (req, res) => {
  const context = {}

  const { html, css, ids = [] } = renderStatic(() => renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  ))

  const templateData = {
    title: 'Hike Page Bruv',
    initialHtml: html,
    initialCSS: css,
    initialIds: serializeJS(ids)
  }

  // Render the index.handlebars with the template data.
  res.render('index', templateData)
}

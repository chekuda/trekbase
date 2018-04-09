import React from 'react'
import { Route, Switch } from 'react-router-dom'

if (process.browser) require('./App.css')

import Home from '../../pages/Home'

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
  </Switch>
)

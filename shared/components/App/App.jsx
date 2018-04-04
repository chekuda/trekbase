import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HikePage from '../../pages/HikePage'

export default () => (
  <Switch>
    <Route exact path='/' component={HikePage} />
  </Switch>
)

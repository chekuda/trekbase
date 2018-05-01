import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'glamorous'
import themeVariables from '../../styles/theme'

import Homepage from '../../pages/Homepage'

export default () => (
  <ThemeProvider theme={themeVariables}>
    <Switch>
      <Route exact path='/' component={Homepage} />
    </Switch>
  </ThemeProvider>
)

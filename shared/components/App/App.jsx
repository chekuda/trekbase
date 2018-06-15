import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'glamorous'
import themeVariables from '../../styles/theme'

import Homepage from '../../pages/Homepage'
import ContinentHikes from '../../pages/ContinentHikes/ContinentHikes'

export default () => (
  <ThemeProvider theme={themeVariables}>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/continenthikes' component={ContinentHikes} />
    </Switch>
  </ThemeProvider>
)

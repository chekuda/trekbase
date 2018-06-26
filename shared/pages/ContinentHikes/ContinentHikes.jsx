import React, { Component } from 'react'

import CustomGoogleMap from '../../containers/CustomGoogleMap'

if (process.browser) {
  require('./ContinentHikes.css')
}

export default class ContinentHikes extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <CustomGoogleMap />
        </div>
      </div>
    )
  }
}


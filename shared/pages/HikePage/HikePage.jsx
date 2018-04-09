import React, { Component } from 'react'
import WorldMap from'./WorldMap'

if (process.browser) require('./HikePage.css')

export default class HikePage extends Component {
  render() {
    return (
      <div className='hike-page-container'>
        <WorldMap />
      </div>
    )
  }
}

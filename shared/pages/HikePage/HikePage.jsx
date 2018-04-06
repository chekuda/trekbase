import React, { Component } from 'react'

if (process.browser) require('./HikePage.css')

export default class HikePage extends Component {
  render() {
    return (
      <div className='hike-page-container'>
        Hike Page
      </div>
    )
  }
}

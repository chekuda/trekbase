import React, { Component } from 'react'

if (process.browser) require('./topImageBanner.css')

class TopImageBanner extends Component {

  render() {
    return (
      <div className='top-image-container'>
        <img src= '/static/assets/hikebanners/milfordsoundpanel.png'/>
      </div>
    )
  }
}

export default TopImageBanner

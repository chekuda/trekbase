import React, { Component } from 'react'
import './hikeBlockInfo.css'

class HikeBlockInfo extends Component {
  render() {
    return (
      <div className='hike-info-block col-md-6'>
        <div className='block'>{this.props.text}</div>
      </div>
    )
  }
}

export default HikeBlockInfo

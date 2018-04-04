import React, { Component } from 'react'

if (process.browser) require('./hikeBlockInfo.css')

class HikeBlockInfo extends Component {

  constructor(props){
    super(props)
    this.bgColorsArray = {
      fun: 'rgba(112, 191, 112, 0.7)',
      reach: 'rgba(121, 185, 218, 0.81)',
      money: 'rgba(241, 241, 139, 0.69)',
      tips: 'rgba(249, 90, 90, 0.71)'
    }
  }

  render() {
    return (
      <div className='hike-info-block' style={{ background: this.bgColorsArray[this.props.type] }}>
        <div className='block'>{this.props.text}</div>
      </div>
    )
  }
}

export default HikeBlockInfo

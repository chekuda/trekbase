import React, { Component } from 'react'
import './hikeBlockInfo.css'

class HikeBlockInfo extends Component {

  constructor(props){
    super(props)
    this.bgColorsArray = {
      fun: 'green',
      reach: 'blue',
      money: 'yellow',
      tips: 'red'
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

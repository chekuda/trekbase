import React, { Component } from 'react'
import HideBlockInfo from '../hikeBlockInfo/hikeBlockInfo'
if (process.browser) require('./hikeGridInfo.css')

class HikeGridInfo extends Component {

  componentWillMount(){
    //fetch data from this hike and setState
    const dummyData = [{
      type: 'fun',
      text: 'whatever'
      },{
        type: 'reach',
        text: 'whatever'
      },{
        type: 'money',
        text: 'whatever'
      }, {
        type: 'tips',
        text: 'whatever'
      }
    ]
    this.setState({ hikeInfo: dummyData })
  }

  render() {
    const { hikeInfo } = this.state

    return (
      <div className='hike-grid-container'>
        { hikeInfo && hikeInfo.map((info, index) => <HideBlockInfo { ...info } key={index} />) }
      </div>
    )
  }
}

export default HikeGridInfo

import React, { Component } from 'react'
import HideBlockInfo from '../hikeBlockInfo/hikeBlockInfo'
import './hikeGridInfo.css'

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
        <div className='container extra-30-padding'>
          <div className='row'>
            { hikeInfo && hikeInfo.map((info, i) => <HideBlockInfo key={i} { ...info }/>) }
          </div>
        </div>
      </div>
    )
  }
}

export default HikeGridInfo

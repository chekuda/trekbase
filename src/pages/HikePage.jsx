import React, { Component } from 'react'
import TopImageBanner from '../components/topImageBanner/topImageBanner'
import HikeTabs from '../components/hikeTabs/hikeTabs'
import NavBar from '../components/navBar/navBar'
import HikeGridInfo from '../components/hikeBlockInfo/hikeBlockInfo'
import './HikePage.css'

class HikePage extends Component {
  render() {
    return (
      <div className='hike-page-container'>
          <NavBar/>
          <div className='page-info'>
            <TopImageBanner/>
            <HikeGridInfo/>
            <HikeGridInfo/>
          </div>
      </div>
    )
  }
}

export default HikePage

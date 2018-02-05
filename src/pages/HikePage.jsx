import React, { Component } from 'react'
import TopImageBanner from '../components/topImageBanner/topImageBanner'
import HikeTabs from '../components/hikeTabs/hikeTabs'
import NavBar from '../components/navBar/navBar'
import HikeGridInfo from '../components/hikeGridInfo/hikeGridInfo'
import './HikePage.css'

class HikePage extends Component {
  render() {
    return (
      <div className='hike-page-container'>
        <NavBar/>
          <TopImageBanner/>
          {/* <HikeTabs/> */}
          <HikeGridInfo/>
      </div>
    )
  }
}

export default HikePage

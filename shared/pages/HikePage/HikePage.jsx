import React, { Component } from 'react'
import TopImageBanner from '../../components/TopImageBanner'
import HikeTabs from '../../components/HikeTabs'
import NavBar from '../../components/NavBar'
import HikeGridInfo from '../../components/HikeGridInfo'

if (process.browser) require('./HikePage.css')

export default class HikePage extends Component {
  render() {
    return (
      <div className='hike-page-container'>
        <NavBar/>
          <TopImageBanner/>
          <HikeTabs/>
          <HikeGridInfo/>
      </div>
    )
  }
}

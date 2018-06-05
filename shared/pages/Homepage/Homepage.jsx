import React, { Component } from 'react'
import WorldMap from '../../components/WorldMap'

export default class Homepage extends Component {
  render () {
    return (
      <div className='home'>
        <WorldMap />
      </div>
    )
  }
}

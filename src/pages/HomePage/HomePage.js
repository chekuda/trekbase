import React, { Component } from 'react'
import WordMap from './wordmap'
import './HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className='Homepage-container'>
        <WordMap  />
      </div>
    )
  }
}

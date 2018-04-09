import React, { Component } from 'react'

if (process.browser) require('./FadeIn.css')

export default class FadeIn extends Component {
  render () {
    const { duration = 3 } = this.props

   return <div className='fade-in'
    style={{
      animationDuration: duration
    }}>
      { this.props.children }
    </div>
  }
}
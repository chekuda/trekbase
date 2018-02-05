import React, { Component } from 'react'
import './Parallax.css'

export default class Parallax extends Component {
  constructor(){
    super()
    this.state = {
      coorY: 0
    }
    this.scrollParallax = this.scrollParallax.bind(this)
  }
  componentDidMount(){
    console.log('didmount')
    document.addEventListener('scroll', this.scrollParallax)
  }
  componentWillUnmount(){
    document.removeEventListener('scroll', this.scrollParallax)
  }
  scrollParallax(){
    this.setState({ coorY: (window.pageYOffset - this.parallax.offsetTop) * 0.15 })
  }
  render() {
    return (
      <div className='parallax-container' style={{ transform: `translate3d(0, ${this.state.coorY}px, 0)` }} ref={ element => this.parallax = element } >
      { this.props.children }
      </div>
    )
  }
}

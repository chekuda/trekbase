import React, { Component } from 'react'
import Parallax from '../Parallax/Parallax'
import './topImageBanner.css'

class TopImageBanner extends Component {

  render() {
    return (

        <div className='top-image-container'>
          <div className='bgimage'/>
          <Parallax>
            <p className='hero-text'>
            Milford Sound is one of the most renowned hikes in New Zealand, subsequently being renowned as the Jewel of the South Island within Fiordland National park. 
            </p>
          </Parallax>
        </div>
    )
  }
}

export default TopImageBanner

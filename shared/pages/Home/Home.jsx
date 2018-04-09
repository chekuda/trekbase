import React, { Component } from 'react'
import WorldMapaData from './worldMapData'
import FadeIn from '../../components/animations/FadeIn'

if (process.browser) require('./Home.css')

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      namerica: false,
      samerica: false,
      europe: false,
      asia: false,
      australia: false,
      africa: false
     }
  }

  handleContinentLoaded = (continent) => {
    console.log(continent)
    // this.setState({ [`continent-${continent}`]: 'loaded' })
  }

  buildMarkup(){
    return (
      <svg viewBox="0 0 3000 1576.0374">
        <defs>
          {
            WorldMapaData.map((continent, index) => {
              return (
                <mask key={index} id={`${continent.name}-mask`} maskUnits='userSpaceOnUse'>
                  <g transform='matrix(.13667 0 0 -.13667 -353.49 1881.1)'>
                    {
                      continent.paths.map((path, index) => {
                        return (
                          <path key={index} d={path} fill='#fff'/>
                        )
                      })
                    }
                  </g>
                </mask>
              )
            })
          }
        </defs>
        <image className='country' x="-78.803" y="-321.33" width="1725" height="1149.8" mask="url(#n-america-mask)" preserveAspectRatio="none" xlinkHref="/public/homepage/n-america-resized.jpg"/>
        <image className='country' x="531.3" y="691.82" width="569.25" height="996" mask="url(#s-america-mask)" preserveAspectRatio="none" xlinkHref="/public/homepage/s-america-resized.jpg"/>
        <image className='country' x="1059.9" y="15.861" width="1126.5" height="741.75" mask="url(#europe-mask)" preserveAspectRatio="none" xlinkHref="/public/homepage/europe-resize.jpg"/>
        <image className='country' x="1620.7" y="24.334" width="1875.8" height="1005" mask="url(#asia-mask)" preserveAspectRatio="none" xlinkHref="/public/homepage/asia-resize.jpg"/>
        <image className='country' x="2481.8" y="929.68" width="752.25" height="503.25" mask="url(#australia-mask)" preserveAspectRatio="none" xlinkHref="/public/homepage/australia-resized.jpg"/>
        <image className='country' x="715.94" y="370.34" width="1500" height="993.75" mask="url(#africa-mask)" preserveAspectRatio="none" xlinkHref="/public/homepage/africa-resize.jpg"/>
      </svg>
    )
  }
  render() {
    return (
      <div className='hike-page-container'>
        <FadeIn duration='4s'>
          { WorldMapaData && this.buildMarkup() }
        </FadeIn>
      </div>
    )
  }
}

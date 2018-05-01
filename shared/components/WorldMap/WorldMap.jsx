import React, { PureComponent } from 'react'
import { requestAnimationFrame, cancelAnimationFrame } from '../../utils'
import * as THREE from 'three'

export default class WorldMap extends PureComponent {
  constructor (props) {
    super(props)

    this.canvasRef = React.createRef()

    // World Map Variables
    this.scene = null
    this.camera = null
    this.renderer = null

    // Bind Functions
    this.preload = this.preload.bind(this)
    this.initialise = this.initialise.bind(this)
    this.update = this.update.bind(this)
    this.draw = this.draw.bind(this)
  }

  componentDidMount () {
    this.preload()
    this.initialise()
  }

  async preload () {
    // Load in the model and textures!
  }

  initialise () {
    
  }

  update () {

  }

  draw () {

  }

  render () {
    return (
      <canvas ref={this.canvasRef} />
    )
  }
}

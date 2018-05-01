import React, { PureComponent } from 'react'
import { requestAnimationFrame, cancelAnimationFrame } from '../../utils'
import * as THREE from 'three'

export default class WorldMap extends PureComponent {
  constructor (props) {
    super(props)

    // DOM Variables
    this.canvasRef = React.createRef()
    this.reqAnimFrameId = null

    // World Map Variables
    this.scene = null
    this.camera = null
    this.renderer = null

    // Bind Functions
    this.preload = this.preload.bind(this)
    this.initialise = this.initialise.bind(this)
    this.loop = this.loop.bind(this)
    this.update = this.update.bind(this)
    this.draw = this.draw.bind(this)
  }

  componentDidMount () {
    this.preload()
    this.initialise()
  }

  componentWillUnmount () {
    this.cleanUp()
  }

  async preload () {
    // Load in the model and textures!
  }

  initialise () {
    const { innerWidth, innerHeight } = window

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0xFF0000)

    this.camera = new THREE.PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    )

    this.renderer = new THREE.WebGLRenderer({ alpha: true })
  }

  loop () {
    this.reqAnimFrameId = requestAnimationFrame(this.loop)
  }

  update () {

  }

  draw () {

  }

  cleanUp = () => {
    cancelAnimationFrame(this.reqAnimFrameId)
  }

  render () {
    return (
      <canvas ref={this.canvasRef} />
    )
  }
}

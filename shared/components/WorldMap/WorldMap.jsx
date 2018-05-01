import React, { PureComponent } from 'react'
import * as THREE from 'three'

export default class WorldMap extends PureComponent {
  constructor (props) {
    super(props)

    this.canvasRef = React.createRef()
  }

  componentDidMount () {
    
  }

  render () {
    return (
      <canvas ref={this.canvasRef} />
    )
  }
}

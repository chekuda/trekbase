import React, { PureComponent } from 'react'
import { requestAnimationFrame, cancelAnimationFrame, throttle, setModelMaterial } from '../../utils'
import { TweenLite } from 'gsap'
import * as THREE from 'three'
import colladaLoader from 'three-loaders-collada' 

const isDev = process.env.NODE_ENV !== 'production'

// Initialise THREE plugins
colladaLoader(THREE)

// http://blog.cjgammon.com/threejs-lights-cameras

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
    this.pointLight = null
    this.directionalLight = null
    this.grid = null
  }

  componentDidMount () {
    this.initialise()
    this.loadAssets()
    this.createLights()
    this.createGrid()
    this.bindEvents()
    this.loop()
  }

  componentWillUnmount () {
    this.cleanUp()
  }

  initialise = () => {
    const { innerWidth, innerHeight } = window

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x181D21)
    this.scene.fog = new THREE.FogExp2(0x181D21, 0.1)

    this.camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)

    this.renderer = new THREE.WebGLRenderer({ alpha: true, canvas: this.canvasRef.current })
    this.renderer.setSize( innerWidth, innerHeight )

  }

  loadAssets = () => {
    const { load } = new THREE.ColladaLoader()

    load('public/models/allcontinents.dae', ({ scene }) => {
      const tweenProps = { opacity: 0 }

      scene.position.set(0, -1, -10)
      scene.scale.set(1.8, 1.8, 1.8)
      scene.rotation.x = -0.6

      setModelMaterial(
        scene,
        new THREE.MeshPhongMaterial({
          specular: 0x33373A,
          emissive: 0x33373A,
          shininess: 40,
          color: 0x33373A,
          side: THREE.DoubleSide,
          transparent: true
        })
      )

      scene.material.opacity = 0

      this.scene.add(scene)

      TweenLite.to(scene.material, 2, { opacity: 1 })
    })
  }

  createGrid = () => {
    this.grid = new THREE.GridHelper(30, 30, new THREE.Color(0x33373A), new THREE.Color(0x33373A))
    this.grid.material.opacity = 0
    this.grid.material.transparent = true
    this.grid.position.set(0, 0, -10)
    this.grid.rotateX(45)
    this.scene.add(this.grid)

    TweenLite.to(this.grid.material, 2, { opacity: 1 })
  }

  createLights = () => {
    this.pointLight = window.pl = new THREE.PointLight(0xFFFFFF, 1, 1000, 50)
    this.pointLight.position.set(0, 10, -5)
    this.scene.add(this.pointLight)

    if (isDev) {
      const pointLightHelper = new THREE.PointLightHelper(this.pointLight, 1)
      this.scene.add(pointLightHelper)
    }
  }

  bindEvents = () => {
    window.addEventListener('resize', this.handleResize, false)
  }

  handleResize = throttle(() => {    
    const { innerWidth, innerHeight } = window

    this.camera.aspect = innerWidth / innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(innerWidth, innerHeight)
  })

  unBindEvents = () => {
    window.removeEventListener('resize', this.handleResize, false)
  }

  loop = () => {
    this.reqAnimFrameId = requestAnimationFrame(this.loop)
    this.update()
    this.draw()
  }

  update = () => {

  }

  draw = () => {
    this.renderer.render(this.scene, this.camera)
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

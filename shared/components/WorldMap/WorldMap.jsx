import React, { PureComponent } from 'react'

import { throttle } from '../../utils'

import { TweenLite } from 'gsap'

import {
  requestAnimationFrame,
  cancelAnimationFrame,
  setModelMaterial,
  rotateAroundObjectAxis,
  degreesToRadians
} from '../../game/helpers'

import { GameLoopManager } from '../../game/managers'

import * as THREE from 'three'

import colladaLoader from 'three-loaders-collada'

const isDev = process.env.NODE_ENV !== 'production'

// Initialise THREE plugins
colladaLoader(THREE)

// http://blog.cjgammon.com/threejs-lights-cameras

if (isDev && process.browser) {
  window.THREE = THREE
}

export default class WorldMap extends PureComponent {
  constructor(props) {
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
    this.gameLoopManager = new GameLoopManager()
  }

  componentDidMount() {
    this.initialise()
    this.loadAssets()
    this.createLights()
    this.createGrid()
    this.bindEvents()
    this.loop()
  }

  componentWillUnmount() {
    this.cleanUp()
  }

  initialise = () => {
    const { innerWidth, innerHeight } = window

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x181D21)

    this.createCamera({ innerWidth, innerHeight })

    this.renderer = new THREE.WebGLRenderer({ alpha: true, canvas: this.canvasRef.current })
    this.renderer.setSize(innerWidth, innerHeight)
  }

  createCamera = ({ innerWidth, innerHeight }) => {
    const aspect = innerWidth / innerHeight

    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 10000)
    this.camera.position.set(0, 0, 8)

    if (isDev) {
      window.rott = rotateAroundObjectAxis
      window.camera = this.camera
    }
  }

  loadAssets = () => {
    const { load } = new THREE.ColladaLoader()

    load('public/models/allcontinents.dae', ({ scene }) => {
      if (isDev) {
        window.continents = scene
      }

      // const tweenProps = { opacity: 0 }

      scene.position.set(0, 0, -9)
      scene.scale.set(1, 1, 1)
      scene.rotation.x = degreesToRadians(-90)

      const color = 0x29CC01

      setModelMaterial(
        scene,
        new THREE.MeshLambertMaterial({
          specular: color,
          emissive: color,
          shininess: 40,
          color,
          side: THREE.DoubleSide,
          transparent: true
        })
      )

      scene.material.opacity = 0

      this.scene.add(scene)

      TweenLite.to(scene.material, 2, { opacity: 1, delay: 2 })
    })
  }

  createGrid = () => {
    this.grid = new THREE.GridHelper(50, 50, new THREE.Color(0x33373A), new THREE.Color(0x33373A))
    this.grid.material.opacity = 0
    this.grid.material.transparent = true
    this.grid.position.set(0, 0, -10)
    this.grid.rotation.x = degreesToRadians(30)
    this.scene.add(this.grid)

    TweenLite.to(this.grid.material, 2, { opacity: 1 })

    if (isDev) {
      window.grid = this.grid
    }
  }

  createLights = () => {
    this.pointLight = new THREE.PointLight(0xFFFFFF, 1, 1000, 50)
    this.pointLight.position.set(0, 0, 0)
    this.scene.add(this.pointLight)

    this.directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1)
    this.directionalLight.position.set(0, 0, 20)
    this.scene.add(this.directionalLight)

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
    this.gameLoopManager.run(this.update, this.draw)
    this.reqAnimFrameId = requestAnimationFrame(this.loop)
  }

  update = () => {

  }

  draw = () => {
    this.renderer.render(this.scene, this.camera)
  }

  cleanUp = () => {
    cancelAnimationFrame(this.reqAnimFrameId)
  }

  render() {
    return (
      <canvas ref={this.canvasRef} />
    )
  }
}

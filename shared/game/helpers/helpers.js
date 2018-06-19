import * as THREE from 'three'

export const requestAnimationFrame = (() => {
  if (!process.browser) {
    return {}
  }

  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    ((callback, fps = 60) => setTimeout(callback, 1000 / fps))
  )
})()

export const cancelAnimationFrame = (() => {
  if (!process.browser) {
    return {}
  }

  return (
    window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    (id => clearTimeout(id))
  )
})()

export const setModelMaterial = (node, material) => {
  node.material = material

  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      setModelMaterial(node.children[i], material)
    }
  }
}

export const rotateAroundObjectAxis = (object, axis, radians) => {
  const rotObjectMatrix = new THREE.Matrix4()
  rotObjectMatrix.makeRotationAxis(axis.normalize(), radians)
  object.matrix.multiply(rotObjectMatrix)
  object.rotation.setFromRotationMatrix(object.matrix)
}

export const degreesToRadians = degrees => (degrees * (Math.PI / 180))

export const radiansToDegrees = radians => (radians * (180 / Math.PI))

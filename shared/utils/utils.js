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
    ((id) => clearTimeout(id))
  )
})()

export const throttle = (func, delay = 100) => {
  let resizeTimeout
    // ignore resize events as long as an actualResizeHandler execution is in the queue
  return (...props) => {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null
        func(...props)
      }, delay)
    }
  }
}

export const setModelMaterial = (node, material) => {
  node.material = material

  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      setModelMaterial(node.children[i], material)
    }
  }
}

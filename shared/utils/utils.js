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

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

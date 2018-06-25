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

export const getOffset = (map, offsetx, offsety) => {
  const scale = Math.pow(2, map.zoom)
  const worldCoordinateCenter = map.getProjection().fromLatLngToPoint(map.center)
  const pixelOffset = new google.maps.Point((offsetx / scale) || 0, (offsety / scale) || 0) // eslint-disable-line

  const worldCoordinateNewCenter = new google.maps.Point( // eslint-disable-line
    worldCoordinateCenter.x - pixelOffset.x,
    worldCoordinateCenter.y + pixelOffset.y
  )

  const newCenter = map.getProjection().fromPointToLatLng(worldCoordinateNewCenter)

  return newCenter
}

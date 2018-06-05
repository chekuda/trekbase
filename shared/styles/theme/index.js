const COLORS = require('./colors')
const TYPOG = require('./typography')
const MEDIA_QUERIES = require('./mediaQueries')
const BREAK_POINTS = require('./breakpoints')
const { rgba } = require('polished')

module.exports = {
  // Fonts
  fontPrimary: `${TYPOG.raleway}, ${TYPOG.sansSerif}`,
  fontSecondary: `${TYPOG.openSans}, ${TYPOG.helvetica}`,

  // Media Queries
  ...MEDIA_QUERIES,

  // Breakpoints
  ...BREAK_POINTS
}

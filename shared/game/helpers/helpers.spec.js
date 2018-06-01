import {
  degreesToRadians,
  radiansToDegrees
} from './helpers'

describe('helpers', () => {
  describe('@degreesToRadians', () => {
    it('returns correct radians', () => {
      expect(degreesToRadians(90).toFixed(2)).toBe('1.57')
    })
  })

  describe('@radiansToDegrees', () => {
    it('returns correct degrees', () => {
      expect(radiansToDegrees(1.5708).toFixed(2)).toBe('90.00')
    })
  })
})
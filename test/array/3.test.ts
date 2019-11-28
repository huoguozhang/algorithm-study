import canPlaceFlowers from '../../code/array/3'

describe('种花问题', () => {
  test('case', () => {
    expect(canPlaceFlowers([1,0,0,0,1], 1)).toBe(true)
    expect(canPlaceFlowers([1,0,0,0,1], 2)).toBe(false)
    expect(canPlaceFlowers([0, 0, 1, 1, 1], 1)).toBe(true)
    expect(canPlaceFlowers([0, 0, 1, 1, 1], 2)).toBe(false)
    expect(canPlaceFlowers([1, 1, 1, 0, 0], 1)).toBe(true)
    expect(canPlaceFlowers([1, 1, 1, 0, 0], 2)).toBe(false)
  })
})

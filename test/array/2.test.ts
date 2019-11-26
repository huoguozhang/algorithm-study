import hasGroupsSizeX from '../../code/array/2'

describe('卡牌分组', () => {

  test('[1,2,3,4,4,3,2,1]', () => {
    expect(hasGroupsSizeX([1,2,3,4,4,3,2,1])).toBe(true)
  })

  test('[1,1,1,2,2,2,3,3]', () => {
    expect(hasGroupsSizeX([1,1,1,2,2,2,3,3])).toBe(false)
  })
  test('[1]', () => {
    expect(hasGroupsSizeX([1])).toBe(false)
  })
  test('[1,1]', () => {
    expect(hasGroupsSizeX([1,1])).toBe(true)
  })
  test('[1,1,2,2,2,2]', () => {
    expect(hasGroupsSizeX([1,1,2,2,2,2])).toBe(true)
  })

  test('[1,1,1,1,2,2,2,2,2,2]', () => {
    expect(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2])).toBe(true)
  })
})

import grayCode from '../../code/array/4'

describe('格雷编码', () => {
  test('case', () => {
    expect(grayCode(2)).toEqual([0, 1, 3, 2])
  })
})

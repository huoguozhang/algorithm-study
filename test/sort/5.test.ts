import maximumGap from '../../code/sort/5'

test('最大间距', () => {
  expect(maximumGap([3,6,9,1])).toBe(3)
  expect(maximumGap([10])).toBe(0)
})

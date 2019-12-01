import sort from '../../code/sort/4'

test('第k个最大元素', () => {
  expect(sort([3,2,1,5,6,4],2)).toBe(5)
  expect(sort([3,2,3,1,2,4,5,5,6],4)).toBe(4)
})

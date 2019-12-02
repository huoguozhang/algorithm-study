import firstMissingPositive from '../../code/sort/6'

test('缺失的第一个正数', () => {
  expect(firstMissingPositive([1,2,0])).toBe(3)
  expect(firstMissingPositive([3,4,-1,1])).toBe(2)
  expect(firstMissingPositive([1])).toBe(2)
  expect(firstMissingPositive([-1, -2])).toBe(1)
  expect(firstMissingPositive([0, 2, 2, 1, 1])).toBe(3)
})

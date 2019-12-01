import sort from '../../code/sort/2'

test('选择排序', () => {
  expect(sort([9,1,2,4,3,7])).toEqual([1,2,3,4,7,9])
  expect(sort([19,11,22,14,13,17])).toEqual([11,13,14,17,19,22])
})

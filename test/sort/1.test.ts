import sort from '../../code/sort/1'

test('冒泡排序', () => {
  expect(sort([9,1,2,4,3,7])).toEqual([1,2,3,4,7,9])
})

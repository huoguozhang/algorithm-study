import quickSort from '../../code/sort/quick'

test('快速排序', () => {
  expect(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  expect(quickSort([5, 9, 7, 3, 1, 8, 4])).toEqual([1, 3, 4, 5, 7, 8, 9])
})

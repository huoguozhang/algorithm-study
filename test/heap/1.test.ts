import heap, {frequencySort} from '../../code/heap/1'

test('堆排序', () => {
  const h = new heap([1,8,4,3,2,9])
  expect(h.sort()).toEqual([1,2,3,4,8,9])
})

test('字符频率排序', () => {
  expect(frequencySort("tree")).toBe('eetr')
  expect(frequencySort("cccaaa")).toMatch(/cccaaa|aaaccc/)
  expect(frequencySort("Aabb")).toBe('bbAa')
})

import findSubstring from '../../code/recur/2'

test('串联所有单词的子串', () => {
  // @ts-ignore
  expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).oneOf([[0, 9], [9, 0]])
  expect(findSubstring('wordgoodgoodgoodbestword', ['word','good','best','word'])).toEqual([])
})

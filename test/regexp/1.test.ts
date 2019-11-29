import repeatedSubstringPattern from '../../code/regexp/1'

test('重复子串1', function() {
  expect(repeatedSubstringPattern('abab')).toBe(true)
  expect(repeatedSubstringPattern('aba')).toBe(false)
  expect(repeatedSubstringPattern('abcabcabcabc')).toBe(true)
});

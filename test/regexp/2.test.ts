import isMatch from '../../code/regexp/2'

test('自定义正则', () => {
  expect(isMatch('aa', 'a')).toBe(false)
  expect(isMatch('aa', 'a*')).toBe(true)
  expect(isMatch('aab', 'c*a*b')).toBe(true)
  expect(isMatch('ab', '.*')).toBe(true)
  expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false)
  expect(isMatch('ab', '.*c')).toBe(false)
})

import countBinarySubstrings from '../../code/string/2'
describe('计数二进制子串', () => {

  test('00110011', () => {
     expect(countBinarySubstrings('00110011')).toBe(6)
  })

  test('10101', () => {
     expect(countBinarySubstrings('10101')).toBe(4)
  })
})

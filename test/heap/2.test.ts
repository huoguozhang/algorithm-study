import nthSuperUglyNumber from '../../code/heap/2'
// [1,2,4,7,8,13,14,16,19,26,28,32]
it('超级丑数', () => {
  expect(nthSuperUglyNumber(2, [2,7,13,19])).toBe(2)
  expect(nthSuperUglyNumber(800, [37,43,59,61,67,71,79,83,89,97,101,103,113,127,131,157,163,167,173,179,191,193,197,199,211,229,233,239,251,257])).toBe(411811)
})

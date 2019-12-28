import uniquePathsWithObstacles from '../../code/Dynamic/1'

test('不同路径2', () => {
  expect(uniquePathsWithObstacles([
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ])).toBe(2)

  expect(uniquePathsWithObstacles([
    [0,0],
    [0,0]
  ])).toBe(2)

  expect(uniquePathsWithObstacles([
    [0,0,0],
    [0,0,0]
  ])).toBe(3)
})

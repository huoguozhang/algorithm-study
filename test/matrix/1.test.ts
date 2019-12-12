import spiralOrder from '../../code/matrix/1'

it('螺旋矩阵', function () {
  expect(spiralOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
  ])).toEqual([1,2,3,6,9,8,7,4,5])

  expect(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ])).toEqual([1,2,3,4,8,12,11,10,9,5,6,7])

  expect(spiralOrder([[7],[9],[6]])).toEqual([7, 9, 6])

  expect(spiralOrder([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]])).toEqual([1,2,3,4,5,6,7,8,9,10])

});

import lemonadeChange from '../../code/greedy/2'

test('柠檬水找零问题', () => {
  expect(lemonadeChange([5,5,5,10,20])).toBeTruthy()
  expect(lemonadeChange([5,5,10])).toBeTruthy()
  expect(lemonadeChange([10,10])).toBeFalsy()
  expect(lemonadeChange([5,5,10,10,20])).toBeFalsy()
  expect(lemonadeChange([5,5,5,10,5,5,10,20,20,20])).toBeFalsy()

})

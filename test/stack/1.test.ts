import calPoints from '../../code/stack/1'

it('棒球比赛', () => {

  expect(calPoints(["5","2","C","D","+"])).toBe(30)

  expect(calPoints(["5","-2","4","C","D","9","+","+"])).toBe(27)

})

import leastInterval from '../../code/queue/2'

it('任务调度器', () => {
  expect(leastInterval(["A","A","A","B","B","B"],2)).toBe(8)
  expect(leastInterval(["A","A","A","B","B","B"],0)).toBe(6)
  expect(leastInterval(["A","A","A","B","B","B"],1)).toBe(6)
  expect(leastInterval(["A","A","A","B","B","B"],3)).toBe(10)
})

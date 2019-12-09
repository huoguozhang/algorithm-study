// 621. 任务调度器 https://leetcode-cn.com/problems/task-scheduler/
const leastInterval = function(tasks: Array<string>, n: number): number {
  let result = 0
  if (n === 0) return tasks.length
  const taskNameMap = {}
  tasks.forEach(v => {
    taskNameMap[v] ? taskNameMap[v]++ : taskNameMap[v] = 1
  })
  // [A B C D]    n = 4
  const size = Object.keys(taskNameMap).length // 有多个不同种类的任务
  // @ts-ignore
  const maxCountKey = Math.max(...Object.values(taskNameMap))
  if (maxCountKey === 1) {
    return result = size
  }
  // [A A A B B B] n = 1
  // [A A A B B B] n = 2  8
  // [A A A B B B] n = 3
  // [A A A B B B] n = 4
  const remainCount = tasks.length - maxCountKey // 3
  let space = (maxCountKey - 1) * n // 2 * n 6
  // 考虑特殊情况 有n个值和最多值得相等
  if (size <= n) {
    // [A A A B C D] n = 3 size = 2
    result = maxCountKey + (size - 1 ) + space
  } else {
    result = maxCountKey + (remainCount <= space ? 0 : remainCount - space) + space
  }
  return result

}

export default leastInterval

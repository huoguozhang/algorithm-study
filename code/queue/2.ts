// 621. 任务调度器 https://leetcode-cn.com/problems/task-scheduler/
const leastInterval = function(tasks: Array<string>, n: number): number {
  if (n === 0) return tasks.length
  const arr = []
  const len = tasks.length
  const indexMap = {} // 保存每个key的索引
  for (let i = 0; i < len; i++) {
    const v = tasks[i]
    if (!indexMap.hasOwnProperty(v)) {
      indexMap[v] = -1
    }
    // @ts-ignore
    const undefinedIndex = arr.findIndex((value, i) => !value && i > indexMap[v] )
    const index = indexMap[v] === -1 ? undefinedIndex === -1 ? arr.length : undefinedIndex : indexMap[v] + n + 1
    indexMap[v] = index
    arr[index] = v
  }
  console.log(arr)
  return arr.length

}

export default leastInterval

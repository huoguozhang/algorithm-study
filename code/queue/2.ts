// 621. 任务调度器 https://leetcode-cn.com/problems/task-scheduler/
// 方法1 计算
const leastInterval = function (tasks: Array<any>, n: number): number {
  // @ts-ignore
  // if (n === 0) return tasks.length
  // @ts-ignore
  let map = new Map();
    // 遍历计算所有任务出现的次数
    for (let i = 0; i < tasks.length; i++) {
        if (map.has(tasks[i])) {
            map.set(tasks[i], map.get(tasks[i])+1);
        } else {
            map.set(tasks[i], 1);
        }
    }
    // 对次数进行递减排序
    let arr = [...map.values()].sort((a,b) => b-a);
    let maxNum = arr[0];
    let res = (maxNum - 1) * (n + 1) + 1;
    let i = 1;
    while (i < arr.length && arr[i] === maxNum) {
        // 如果存在其他任务的出现次数跟最大次数相同
        res++;
        i++;
    }
    return Math.max(tasks.length, res)
}

/*const leastInterval2 = function(tasks, n) {
  // if (n === 0) return tasks.length
  const result = []
  const keyCountMap = {}
  const keyCountIndex = {}
  tasks.forEach(key => {
    if (keyCountMap.hasOwnProperty(key)) {
      keyCountMap[key]++
    } else {
      keyCountMap[key] = 1
    }
  })
  // @ts-ignore 倒序
  const arr = Object.entries(keyCountMap).sort((a, b) => b[1] - a[1])
  while (arr.length) {
    let [key, count] = arr.shift()
    while (count--) {
      if (keyCountIndex.hasOwnProperty(key)) {
        keyCountIndex[key] += n + 1
        result[keyCountIndex[key]] = key
      } else {
        // @ts-ignore
        let undefindIndex = result.findIndex(v => !v)
        keyCountIndex[key] = undefindIndex > -1 ? undefindIndex : result.length
        result[keyCountIndex[key]] = key
      }
    }
  }
  return result.length
};*/
export default leastInterval

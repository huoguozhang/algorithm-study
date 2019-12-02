// 41. 缺失的第一个正数 https://leetcode-cn.com/problems/first-missing-positive/
const firstMissingPositive = function (nums: Array<number>): number {
  /*const len = nums.length
  const arr = []
  if (len === 0) return 1
  if (len === 1) return nums [0] === 1 ? 2 : 1
  // 选择排序
  for (let i = 0; i < len; i++) {

    for (let j = i + 1; j < len; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
      }
    }

    if (nums[i] > 0) {
      arr[nums[i]] = nums[i]
    }
  }
  // @ts-ignore
  const index = arr.findIndex((v, i) => i > 0 && v == undefined)
  return index > 0 ? index : arr.length > 0 ? arr.length : 1*/
  // 优化
  // 只保留正整数即可
  const arr = nums.filter(v => v  > 0)
  const len = arr.length
  if (len === 0) return 1
  // 选择排序
  for (let i = 0; i < len; i++) {

    for (let j = i + 1; j < len; j++) {
      if (arr[i] >arr[j]) {
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
    if ( i === 0) {
      if (arr[0] !== 1) {
        return 1
      }
    } else {
      if (arr[i] - arr[i - 1] > 1) {
        // 与索引不对应直接返回
        return arr[i-1] + 1
      }
    }
  }
  // 数组连续的就直接返回
  return arr.pop() + 1
}

export default firstMissingPositive

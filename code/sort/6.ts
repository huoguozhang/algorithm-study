const firstMissingPositive = function (nums: Array<number>): number {
  const len = nums.length
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
  return index > 0 ? index : arr.length > 0 ? arr.length : 1
}

export default firstMissingPositive

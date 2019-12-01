// 215. 数组中的第K个最大元素 https://leetcode-cn.com/problems/kth-largest-element-in-an-array/submissions/

export default function sort (nums: Array<number>, k: number) {
  // return nums.sort((a, b) => b - a)[k - 1]
  // 使用冒泡排序
  // [3,2,1,5,6,4] 和 k = 2
  const len = nums.length - k - 1 // 6
  for (let i = nums.length - 1; i > len; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j+1]) {
        [nums[j + 1], nums[j]] = [nums[j], nums[j+1]]
      }
    }
  }
  return nums[len + 1]
}

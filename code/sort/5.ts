// 164. 最大间距 https://leetcode-cn.com/problems/maximum-gap/

const maximumGap = function(nums: Array<number>): number {
  // 简单粗暴版本
  /*const arr = nums.sort((a, b) => a - b)

  const len = arr.length - 1
  let maxGap = 0

  for (let i = 0 ; i < len  ; i++) {
    const gap = arr[i+1] - arr[i]
    if (gap > maxGap) {
      maxGap = gap
    }
  }

  return maxGap*/
  let len = nums.length
  let gap = 0
  // 选择排序
  for (let i = 0 ; i < len ; i++) {
    for(let j = i+1 ; j < len ; j++){
      const temp = nums[i]
      if (temp > nums[j]) {
        nums[i] = nums[j]
        nums[j] = temp
      }
    }
    if (i > 0) {
      const tmpGap = nums[i] -nums[i-1]
      gap = tmpGap > gap ? tmpGap : gap
    }
  }

  return gap
}

export default maximumGap

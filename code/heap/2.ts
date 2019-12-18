// 313. 超级丑数 https://leetcode-cn.com/problems/super-ugly-number/solution/313-chao-ji-chou-shu-by-yukarun/
// 无法通过数据量大的情况 最后一个例子
const nthSuperUglyNumber = function(n, primes) {
  // 构建最大堆
  // 找到所有质因数
  primes.sort((a, b) => b - a)
  function findPrimes (num) {
    const arr = []
    for (let i = 2; i <= num /2; i++) {
      if (num % i === 0 && findPrimes(i).length === 0 ) {
        arr.push(i)
      }
    }

    return arr
  }
  let num = 2
  const uglyArr = [1]
  let len = n
  // 找到n个超级丑数
  while(--len){
    let allP = findPrimes(num)
    // @ts-ignore
    while (allP.length === 0 || allP.some(v => !primes.includes(v))){
      if (allP.length === 0) {
        // 说明该数本身是一个质数
        if (primes.includes(num)) {
          uglyArr.push(num)
          break
        }
      }
      num++
      allP = findPrimes(num)
    }
    uglyArr.push(num++)
  }
  // @ts-ignore
  return Array.from(new Set(uglyArr))[n-1]
}
// 解题思路2 一个是超级丑数肯定能满足 primes[i]* primes[j]
const nthSuperUglyNumber2 = function (n, primes) {
  if (n === 1) return 1
  let count = 0
  const arr = [1]
  while (count < n - 1) {
    // @ts-ignore
    let min = Number.MAX_SAFE_INTEGER
    primes.forEach(v => {
      arr.forEach(a => {
        let val = a * v
        // @ts-ignore
        if (!arr.includes(val)) {
          min = Math.min(min, val)
        }
      })
    })
    arr.push(min)
    count++
  }
  return arr[n - 1]
}

export default nthSuperUglyNumber2

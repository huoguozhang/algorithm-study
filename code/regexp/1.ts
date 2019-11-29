// 459. 重复的子字符串 https://leetcode-cn.com/problems/repeated-substring-pattern/
let repeatedSubstringPattern = function(s:string) {
  let reg = /^(\w+)\1+$/
  return reg.test(s)
}
// 方法2
/*
var repeatedSubstringPattern = function(s) {
    // 流程：
    // 1.将原字符串给出拷贝一遍组成新字符串；
    // 2.掐头去尾留中间；
    // 3.如果还包含原字符串，则满足题意。

    // 原理：
    // 假设字符串有n个子串构成,则拼接后的子串为2n个,掐头去尾后为2n-2个,
    // 如果此时的字符串至少包含一个原字符串,则说明至少包含n个子串,则2n-2>=n,n>=2.
    // 则说明该字符串是周期性结构,最少由两个子串构成.如果一个都不包含,即不包含n个子串,
    // 则说明2n-2<n,n<2,即n为1,也就是不符合周期性结构
    let str = s + s;
    return str.substring(1, str.length - 1).indexOf(s) >= 0;
};
* */
export default repeatedSubstringPattern

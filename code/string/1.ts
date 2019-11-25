// 557. 反转字符串中的单词 III https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
export default function reverseWord (str: string): string {
  return str.split(' ').map(word => {
    return word.split('').reverse().join('')
  }).join(' ')
}

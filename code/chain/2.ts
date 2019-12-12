// 141. 环形链表 https://leetcode-cn.com/problems/linked-list-cycle/

import { Node, NodeList } from './1'

const hasCycle = function(head, pos) {
  if (pos < 0 || !head) {
    return false
  }
  // 使用快慢指针解题
  let slow = head
  let fast = head.next
  // 慢指针追上了快指针说明环形
  while (fast && fast.next) {
    if (fast === slow) {
      return true
    } else {
      fast = fast.next.next
      slow = slow.next
    }
  }
  return false
};

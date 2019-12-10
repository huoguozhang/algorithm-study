// 增加链表题型  148. 排序链表  https://leetcode-cn.com/problems/sort-list/
class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class NodeList {

  constructor (arr) {
    let head = new Node(arr.shift())
    let next = head
    while (arr.length) {
      next.next = new Node(arr.shift())
      next = next.next
    }
    return head
  }

}

// 输入: 4->2->1->3
// 输出: 1->2->3->4

const head = new NodeList([4, 2, 1, 3])

const sortList = function (head) {

  function swqp (p, q) {
    [p.val, q.val] = [q.val, p.val]
  }



}

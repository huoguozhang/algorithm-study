import hasCycle,{ NodeList } from "../../code/chain/2";


it('环形链表', () => {
  let head = new NodeList([3, 2, 0 , 4])
  // @ts-ignore 变成环形链表
  head.next.next.next.next = head.next
  expect(hasCycle(head, 1)).toBeTruthy()
})

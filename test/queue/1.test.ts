import MyCircularQueue from '../../code/queue/1'

it('循环队列 测试1', () => {
const circularQueue = new MyCircularQueue(3)
expect(circularQueue.enQueue(1)).toBe(true);  // 返回 true

expect(circularQueue.enQueue(2)).toBe(true);  // 返回 true

expect(circularQueue.enQueue(3)).toBe(true);  // 返回 true

expect(circularQueue.enQueue(4)).toBe(false);  // 返回 false，队列已满

expect(circularQueue.Rear()).toBe(3);  // 返回 3

expect(circularQueue.isFull()).toBe(true);  // 返回 true

expect(circularQueue.deQueue()).toBe(true);  // 返回 true

expect(circularQueue.enQueue(4)).toBe(true);  // 返回 true

expect(circularQueue.Rear()).toBe(4);  // 返回 4
})

it('循环队列 测试2', () => {
const circularQueue = new MyCircularQueue(3)
expect(circularQueue.enQueue(2)).toBe(true);

expect(circularQueue.Front()).toBe(2);

expect(circularQueue.Rear()).toBe(2);

expect(circularQueue.deQueue()).toBeTruthy();

expect(circularQueue.Front()).toBe(-1);

expect(circularQueue.deQueue()).toBeFalsy();
})

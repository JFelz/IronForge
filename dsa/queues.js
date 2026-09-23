// ─── Queues ─────────────────────────────────────────────────────────────────

// Challenge 1: Implement Stack using Queues
// Implement a LIFO stack using only two queues.
class MyStack {
  constructor() {}
  push(x) {}
  pop() {}
  top() {}
  empty() {}
}

// Challenge 2: Design Circular Queue
// Design a fixed-size circular queue supporting enQueue, deQueue, Front,
// Rear, isEmpty, and isFull operations.
class MyCircularQueue {
  constructor(k) {}
  enQueue(value) {}
  deQueue() {}
  Front() {}
  Rear() {}
  isEmpty() {}
  isFull() {}
}

// Challenge 3: Number of Recent Calls
// Implement a RecentCounter class that counts the number of requests made in
// the last 3000 milliseconds.
class RecentCounter {
  constructor() {}
  ping(t) {}
}

// Challenge 4: Rotting Oranges
// Given a grid of oranges (0 empty, 1 fresh, 2 rotten), return the minimum
// minutes until no fresh orange remains, or -1 if impossible.
// Example: orangesRotting([[2,1,1],[1,1,0],[0,1,1]]) => 4
function orangesRotting(grid) {}

// Challenge 5: Task Scheduler
// Given a list of tasks and a cooldown period n, return the minimum number
// of intervals needed to complete all tasks.
// Example: leastInterval(["A","A","A","B","B","B"], 2) => 8
function leastInterval(tasks, n) {}

module.exports = {
  MyStack,
  MyCircularQueue,
  RecentCounter,
  orangesRotting,
  leastInterval,
};

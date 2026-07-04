// ─── Queues ───────────────────────────────────────────────────────────────────

// Challenge 1: Implement Queue Using Two Stacks
// Implement a FIFO queue using only two stacks.
// Support push, pop, peek, and empty operations.
class MyQueue {
  constructor() {}
  push(x) {}   // push to back
  pop() {}     // remove from front
  peek() {}    // view front
  empty() {}   // return true if empty
}

// Challenge 2: Sliding Window Maximum
// Given an array and window size k, return the max value in each sliding window.
// Example: maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3) => [3,3,5,5,6,7]
function maxSlidingWindow(nums, k) {}

// Challenge 3: First Non-Repeating Character in a Stream
// Given a stream of characters, return the first non-repeating character after
// each insertion. Return '#' if none exists.
// Example: firstNonRepeating("abc") => ['a','a','a']  for stream a, ab, abc
function firstNonRepeating(stream) {}

// Challenge 4: Generate Binary Numbers from 1 to N
// Using a queue, generate binary representations of all numbers from 1 to n.
// Example: generateBinary(5) => ["1","10","11","100","101"]
function generateBinary(n) {}

// Challenge 5: Rotting Oranges (BFS with Queue)
// Grid cells: 0=empty, 1=fresh orange, 2=rotten orange.
// Every minute, a rotten orange spreads to adjacent fresh oranges.
// Return the minimum minutes until no fresh oranges remain, or -1 if impossible.
// Example: orangesRotting([[2,1,1],[1,1,0],[0,1,1]]) => 4
function orangesRotting(grid) {}

module.exports = { MyQueue, maxSlidingWindow, firstNonRepeating, generateBinary, orangesRotting };

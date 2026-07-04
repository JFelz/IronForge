// ─── Heaps / Priority Queues ──────────────────────────────────────────────────

// Challenge 1: Kth Largest Element in a Stream
// Design a class that finds the kth largest element in a stream.
// Calling add(val) inserts val into the stream and returns the kth largest.
// Example: new KthLargest(3, [4,5,8,2]).add(3) => 4
class KthLargest {
  constructor(k, nums) {}
  add(val) {}
}

// Challenge 2: Top K Frequent Words
// Given an array of strings `words` and integer k, return the k most frequent words.
// Sort by frequency descending; ties broken alphabetically ascending.
// Example: topKFrequentWords(["i","love","leetcode","i","love","coding"], 2) => ["i","love"]
function topKFrequentWords(words, k) {}

// Challenge 3: Find Median from Data Stream
// Design a data structure to find the median of a number stream efficiently.
// addNum(num) adds a number; findMedian() returns the current median.
// Use a max-heap for the lower half and min-heap for the upper half.
class MedianFinder {
  constructor() {}
  addNum(num) {}
  findMedian() {}
}

// Challenge 4: Merge K Sorted Lists
// Merge k sorted linked lists and return one sorted linked list.
// Use a min-heap to efficiently get the next smallest node.
// Example: mergeKLists([[1,4,5],[1,3,4],[2,6]]) => 1->1->2->3->4->4->5->6
class ListNode {
  constructor(val = 0, next = null) { this.val = val; this.next = next; }
}
function mergeKLists(lists) {}

// Challenge 5: Task Scheduler
// Given a CPU task list where each letter is a task type and n is the cooldown
// between same-type tasks, return the minimum intervals needed to complete all tasks.
// Example: leastInterval(["A","A","A","B","B","B"], 2) => 8
function leastInterval(tasks, n) {}

module.exports = { KthLargest, topKFrequentWords, MedianFinder, ListNode, mergeKLists, leastInterval };

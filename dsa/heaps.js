// ─── Heaps ──────────────────────────────────────────────────────────────────

// Challenge 1: Kth Largest Element in an Array
// Given an integer array and an integer k, return the kth largest element
// (not the kth distinct element).
// Example: findKthLargest([3,2,1,5,6,4], 2) => 5
function findKthLargest(nums, k) {}

// Challenge 2: Merge K Sorted Lists
// Given an array of k sorted linked lists, merge them into one sorted list.
// Example: mergeKLists([[1,4,5],[1,3,4],[2,6]]) => [1,1,2,3,4,4,5,6]
function mergeKLists(lists) {}

// Challenge 3: Find Median from Data Stream
// Design a data structure that supports adding integers from a stream and
// finding the median of all elements added so far.
class MedianFinder {
  constructor() {}
  addNum(num) {}
  findMedian() {}
}

// Challenge 4: K Closest Points to Origin
// Given an array of points on the X-Y plane and an integer k, return the k
// closest points to the origin.
// Example: kClosest([[1,3],[-2,2]], 1) => [[-2,2]]
function kClosest(points, k) {}

// Challenge 5: Reorganize String
// Given a string, rearrange its characters so no two adjacent characters are
// the same. Return "" if not possible.
// Example: reorganizeString("aab") => "aba"
function reorganizeString(s) {}

module.exports = {
  findKthLargest,
  mergeKLists,
  MedianFinder,
  kClosest,
  reorganizeString,
};

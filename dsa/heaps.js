// ─── Heaps ──────────────────────────────────────────────────────────────────

// Challenge 1: Kth Largest Element in an Array
// Find the kth largest element in an unsorted array using a heap.
// Example: findKthLargest([3,2,1,5,6,4], 2) => 5
function findKthLargest(nums, k) {}

// Challenge 2: Top K Frequent Words
// Given an array of words and an integer k, return the k most frequent
// words, sorted by frequency then lexicographically.
// Example: topKFrequent(["i","love","leetcode","i","love","coding"], 2)
//          => ["i","love"]
function topKFrequentWords(words, k) {}

// Challenge 3: Merge k Sorted Lists
// Merge k sorted linked lists into one sorted linked list using a min-heap.
// Example: mergeKLists([[1,4,5],[1,3,4],[2,6]]) => [1,1,2,3,4,4,5,6]
function mergeKLists(lists) {}

// Challenge 4: Find Median from Data Stream
// Design a data structure that supports adding numbers and finding the
// median of all numbers added so far, using two heaps.
class MedianFinder {
  constructor() {}
  addNum(num) {}
  findMedian() {}
}

// Challenge 5: Kth Closest Points to Origin
// Given an array of points, return the k closest points to the origin
// (0, 0) using a max-heap of size k.
// Example: kClosest([[1,3],[-2,2]], 1) => [[-2,2]]
function kClosest(points, k) {}

// Challenge 6: Task Scheduler II (Reorganize String)
// Given a string s, rearrange the characters so no two adjacent characters
// are the same, using a max-heap by frequency. Return "" if impossible.
// Example: reorganizeString("aab") => "aba"
function reorganizeString(s) {}

// Challenge 7: Ugly Number II
// Find the nth ugly number (a positive integer whose prime factors are only
// 2, 3, and 5) using a min-heap.
// Example: nthUglyNumber(10) => 12
function nthUglyNumber(n) {}

// Challenge 8: Meeting Rooms II
// Given an array of meeting time intervals, find the minimum number of
// conference rooms required, using a min-heap of end times.
// Example: minMeetingRooms([[0,30],[5,10],[15,20]]) => 2
function minMeetingRooms(intervals) {}

// Challenge 9: Sliding Window Median
// Given an array and window size k, return the median of each sliding
// window as it moves across the array.
// Example: medianSlidingWindow([1,3,-1,-3,5,3,6,7], 3) => [1,3,-1,3,5,6]
function medianSlidingWindow(nums, k) {}

// Challenge 10: Design Twitter
// Design a simplified Twitter where users can post tweets, follow/unfollow
// others, and see the 10 most recent tweets in their news feed, using a
// heap to merge tweets across followees.
class Twitter {
  constructor() {}
  postTweet(userId, tweetId) {}
  getNewsFeed(userId) {}
  follow(followerId, followeeId) {}
  unfollow(followerId, followeeId) {}
}

module.exports = {
  findKthLargest,
  topKFrequentWords,
  mergeKLists,
  MedianFinder,
  kClosest,
  reorganizeString,
  nthUglyNumber,
  minMeetingRooms,
  medianSlidingWindow,
  Twitter,
};

// ─── Sliding Window ─────────────────────────────────────────────────────────

// Challenge 1: Maximum Sum Subarray of Size K
// Given an array of integers and an integer k, find the maximum sum of any
// contiguous subarray of size k.
// Example: maxSumSubarray([2,1,5,1,3,2], 3) => 9
function maxSumSubarray(nums, k) {}

// Challenge 2: Sliding Window Maximum
// Given an array and a window size k, return the maximum value in each
// sliding window as it moves from left to right.
// Example: maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3) => [3,3,5,5,6,7]
function maxSlidingWindow(nums, k) {}

// Challenge 3: Minimum Size Subarray Sum
// Given an array of positive integers and a target sum, return the minimal
// length of a contiguous subarray whose sum is >= target. Return 0 if none.
// Example: minSubArrayLen(7, [2,3,1,2,4,3]) => 2
function minSubArrayLen(target, nums) {}

// Challenge 4: Permutation in String
// Given two strings s1 and s2, return true if s2 contains a permutation of
// s1 as a contiguous substring.
// Example: checkInclusion("ab", "eidbaooo") => true
function checkInclusion(s1, s2) {}

// Challenge 5: Max Consecutive Ones III
// Given a binary array and an integer k, return the maximum number of
// consecutive 1s if you can flip at most k 0s.
// Example: longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2) => 6
function longestOnes(nums, k) {}

module.exports = {
  maxSumSubarray,
  maxSlidingWindow,
  minSubArrayLen,
  checkInclusion,
  longestOnes,
};

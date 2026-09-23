// ─── Arrays ─────────────────────────────────────────────────────────────────

// Challenge 1: Two Sum
// Given an array of integers and a target, return the indices of the two
// numbers that add up to the target.
// Example: twoSum([2,7,11,15], 9) => [0,1]
function twoSum(nums, target) {}

// Challenge 2: Maximum Subarray
// Given an integer array, find the contiguous subarray with the largest sum
// and return its sum.
// Example: maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) => 6
function maxSubArray(nums) {}

// Challenge 3: Product of Array Except Self
// Given an array nums, return an array where each element is the product of
// all elements except itself, without using division.
// Example: productExceptSelf([1,2,3,4]) => [24,12,8,6]
function productExceptSelf(nums) {}

// Challenge 4: Merge Intervals
// Given an array of intervals, merge all overlapping intervals.
// Example: merge([[1,3],[2,6],[8,10],[15,18]]) => [[1,6],[8,10],[15,18]]
function merge(intervals) {}

// Challenge 5: Rotate Array
// Given an array, rotate it to the right by k steps, in place.
// Example: rotate([1,2,3,4,5,6,7], 3) => [5,6,7,1,2,3,4]
function rotate(nums, k) {}

module.exports = {
  twoSum,
  maxSubArray,
  productExceptSelf,
  merge,
  rotate,
};

// ─── Binary Search ──────────────────────────────────────────────────────────

// Challenge 1: Binary Search
// Given a sorted array of integers and a target, return the index of the
// target, or -1 if not found.
// Example: search([-1,0,3,5,9,12], 9) => 4
function search(nums, target) {}

// Challenge 2: Search in Rotated Sorted Array
// Given a rotated sorted array with distinct values and a target, return
// the index of target, or -1 if not found, in O(log n).
// Example: search([4,5,6,7,0,1,2], 0) => 4
function searchRotated(nums, target) {}

// Challenge 3: Find Minimum in Rotated Sorted Array
// Given a rotated sorted array with no duplicates, find the minimum element
// in O(log n).
// Example: findMin([3,4,5,1,2]) => 1
function findMin(nums) {}

// Challenge 4: Find First and Last Position of Element in Sorted Array
// Given a sorted array and a target, find the starting and ending position
// of the target value in O(log n).
// Example: searchRange([5,7,7,8,8,10], 8) => [3,4]
function searchRange(nums, target) {}

// Challenge 5: Search a 2D Matrix
// Given an m×n matrix where each row is sorted and the first integer of
// each row is greater than the last integer of the previous row, determine
// if a target value exists.
// Example: searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3) => true
function searchMatrix(matrix, target) {}

// Challenge 6: Find Peak Element
// A peak element is greater than its neighbors. Given an array, find the
// index of any peak element in O(log n).
// Example: findPeakElement([1,2,3,1]) => 2
function findPeakElement(nums) {}

// Challenge 7: Koko Eating Bananas
// Koko eats bananas at speed k per hour from n piles; find the minimum
// integer k so she finishes all piles within h hours.
// Example: minEatingSpeed([3,6,7,11], 8) => 4
function minEatingSpeed(piles, h) {}

// Challenge 8: Median of Two Sorted Arrays
// Given two sorted arrays, find the median of the two combined, in
// O(log(m+n)) time.
// Example: findMedianSortedArrays([1,3], [2]) => 2.0
function findMedianSortedArrays(nums1, nums2) {}

// Challenge 9: Capacity To Ship Packages Within D Days
// Given package weights and D days, find the minimum ship capacity so all
// packages ship within D days, keeping order.
// Example: shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5) => 15
function shipWithinDays(weights, days) {}

// Challenge 10: Split Array Largest Sum
// Given an array and an integer m, split the array into m non-empty
// contiguous subarrays to minimize the largest sum among them.
// Example: splitArray([7,2,5,10,8], 2) => 18
function splitArray(nums, m) {}

module.exports = {
  search,
  searchRotated,
  findMin,
  searchRange,
  searchMatrix,
  findPeakElement,
  minEatingSpeed,
  findMedianSortedArrays,
  shipWithinDays,
  splitArray,
};

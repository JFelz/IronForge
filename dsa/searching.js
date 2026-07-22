// ─── Searching ────────────────────────────────────────────────────────────────

// Challenge 1: Binary Search
// Given a sorted array of distinct integers and a target, return the index of
// target, or -1 if not found. Must run in O(log n).
// Example: binarySearch([-1,0,3,5,9,12], 9) => 4
function binarySearch(nums, target) {}

// Challenge 2: Search in Rotated Sorted Array
// A sorted array was rotated at some unknown pivot. Search for target and return
// its index, or -1. Must run in O(log n).
// Example: search([4,5,6,7,0,1,2], 0) => 4
function search(nums, target) {}

// Challenge 3: Find Minimum in Rotated Sorted Array
// Find the minimum element in a rotated sorted array of unique elements.
// Must run in O(log n).
// Example: findMin([3,4,5,1,2]) => 1
function findMin(nums) {}

// Challenge 4: Search a 2D Matrix
// Given an m×n matrix where each row is sorted and the first integer of each
// row is greater than the last of the previous row, search for a target.
// Must run in O(log(m*n)).
// Example: searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3) => true
function searchMatrix(matrix, target) {}

// Challenge 5: Find Peak Element
// A peak is an element strictly greater than its neighbors. Return any peak index.
// Must run in O(log n).
// Example: findPeakElement([1,2,3,1]) => 2
function findPeakElement(nums) {}

module.exports = { binarySearch, search, findMin, searchMatrix, findPeakElement };

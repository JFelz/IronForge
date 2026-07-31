// ─── Arrays ───────────────────────────────────────────────────────────────────

// Challenge 1: Two Sum
// Given an array of integers `nums` and a target integer, return the indices
// of the two numbers that add up to the target. Assume exactly one solution exists.
// Example: twoSum([2, 7, 11, 15], 9) => [0, 1]
function twoSum(nums, target) {}

// Challenge 2: Best Time to Buy and Sell Stock
// Given an array `prices` where prices[i] is the price on day i, return the
// maximum profit from one buy-then-sell transaction. Return 0 if no profit possible.
// Example: maxProfit([7,1,5,3,6,4]) => 5
function maxProfit(prices) {}

// Challenge 3: Product of Array Except Self
// Return an array where each element is the product of all other elements in `nums`,
// without using division and in O(n) time.
// Example: productExceptSelf([1,2,3,4]) => [24,12,8,6]
function productExceptSelf(nums) {}

// Challenge 4: Maximum Subarray (Kadane's Algorithm)
// Find the contiguous subarray with the largest sum and return that sum.
// Example: maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) => 6
function maxSubArray(nums) {}

// Challenge 5: Rotate Array
// Rotate the array `nums` to the right by `k` steps, in-place.
// Example: rotate([1,2,3,4,5,6,7], 3) => [5,6,7,1,2,3,4]
function rotate(nums, k) {}

// Challenge 6: Contains Duplicate
// Given an integer array, return true if any value appears at least twice.
// Example: containsDuplicate([1,2,3,1]) => true  |  containsDuplicate([1,2,3,4]) => false
function containsDuplicate(nums) {}

// Challenge 7: Move Zeroes
// Move all 0's in `nums` to the end while maintaining the relative order of
// the non-zero elements, in-place.
// Example: moveZeroes([0,1,0,3,12]) => [1,3,12,0,0]
function moveZeroes(nums) {}

// Challenge 8: Merge Sorted Array
// nums1 has length m+n, with the last n slots empty (0). Merge nums2 (length n)
// into nums1 in-place so the result is sorted.
// Example: mergeSortedArray([1,2,3,0,0,0], 3, [2,5,6], 3) => [1,2,2,3,5,6]
function mergeSortedArray(nums1, m, nums2, n) {}

// Challenge 9: Find All Duplicates in an Array
// Given an array of integers where 1 <= nums[i] <= n (n = nums.length) and
// each value appears once or twice, return all values that appear twice.
// Must run in O(n) time and O(1) extra space (besides the output array).
// Example: findDuplicates([4,3,2,7,8,2,3,1]) => [2,3]
function findDuplicates(nums) {}

// Challenge 10: Next Permutation
// Rearrange `nums` into the lexicographically next greater permutation,
// in-place. If no such permutation exists, rearrange into the lowest order.
// Example: nextPermutation([1,2,3]) => [1,3,2]
function nextPermutation(nums) {}

module.exports = {
  twoSum,
  maxProfit,
  productExceptSelf,
  maxSubArray,
  rotate,
  containsDuplicate,
  moveZeroes,
  mergeSortedArray,
  findDuplicates,
  nextPermutation,
};

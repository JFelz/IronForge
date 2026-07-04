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

module.exports = { twoSum, maxProfit, productExceptSelf, maxSubArray, rotate };

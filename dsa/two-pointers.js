// ─── Two Pointers ─────────────────────────────────────────────────────────────

// Challenge 1: Two Sum II (Sorted Input)
// Given a 1-indexed sorted array, return the indices of two numbers that sum to target.
// Must use O(1) extra space.
// Example: twoSumSorted([2,7,11,15], 9) => [1,2]
function twoSumSorted(numbers, target) {}

// Challenge 2: 3Sum
// Find all unique triplets in the array that sum to zero.
// The solution set must not contain duplicate triplets.
// Example: threeSum([-1,0,1,2,-1,-4]) => [[-1,-1,2],[-1,0,1]]
function threeSum(nums) {}

// Challenge 3: Container With Most Water
// Given an array of heights representing vertical lines, find two lines that
// together with the x-axis form a container holding the most water.
// Example: maxArea([1,8,6,2,5,4,8,3,7]) => 49
function maxArea(height) {}

// Challenge 4: Trapping Rain Water
// Given an elevation map as an array of heights, compute how much water it can trap.
// Example: trap([0,1,0,2,1,0,1,3,2,1,2,1]) => 6
function trap(height) {}

// Challenge 5: Remove Duplicates from Sorted Array
// Remove duplicates from a sorted array in-place so each element appears only once.
// Return the new length k; the first k elements must be the unique values in order.
// Must use O(1) extra space.
// Example: removeDuplicates([1,1,2]) => 2, array becomes [1,2,...]
function removeDuplicates(nums) {}

module.exports = { twoSumSorted, threeSum, maxArea, trap, removeDuplicates };

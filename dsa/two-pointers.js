// ─── Two Pointers ───────────────────────────────────────────────────────────

// Challenge 1: Two Sum II - Input Array Is Sorted
// Given a sorted array and a target, return the 1-indexed indices of the
// two numbers that add up to the target.
// Example: twoSum([2,7,11,15], 9) => [1,2]
function twoSum(numbers, target) {}

// Challenge 2: Three Sum
// Given an array of integers, return all unique triplets that sum to zero.
// Example: threeSum([-1,0,1,2,-1,-4]) => [[-1,-1,2],[-1,0,1]]
function threeSum(nums) {}

// Challenge 3: Container With Most Water
// Given an array of heights, find two lines that together with the x-axis
// form a container holding the most water.
// Example: maxArea([1,8,6,2,5,4,8,3,7]) => 49
function maxArea(height) {}

// Challenge 4: Trapping Rain Water
// Given an array representing an elevation map, compute how much water it
// can trap after raining.
// Example: trap([0,1,0,2,1,0,1,3,2,1,2,1]) => 6
function trap(height) {}

// Challenge 5: Remove Duplicates from Sorted Array
// Given a sorted array, remove duplicates in place so each element appears
// once, and return the new length.
// Example: removeDuplicates([1,1,2]) => 2  (array becomes [1,2,...])
function removeDuplicates(nums) {}

// Challenge 6: Sort Colors
// Given an array with values 0, 1, and 2, sort it in place in one pass
// using the Dutch national flag algorithm.
// Example: sortColors([2,0,2,1,1,0]) => [0,0,1,1,2,2]
function sortColors(nums) {}

// Challenge 7: Valid Palindrome II
// Given a string, return true if it can be a palindrome after deleting at
// most one character.
// Example: validPalindrome("abca") => true
function validPalindrome(s) {}

// Challenge 8: 4Sum
// Given an array of integers and a target, return all unique quadruplets
// that sum to the target.
// Example: fourSum([1,0,-1,0,-2,2], 0) => [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
function fourSum(nums, target) {}

// Challenge 9: Boats to Save People
// Given people's weights and a boat weight limit (max 2 people per boat),
// return the minimum number of boats needed.
// Example: numRescueBoats([3,2,2,1], 3) => 3
function numRescueBoats(people, limit) {}

// Challenge 10: Minimum Size Subarray Sum
// Given a target sum and an array of positive integers, find the minimal
// length of a contiguous subarray whose sum is >= target. Return 0 if none.
// Example: minSubArrayLen(7, [2,3,1,2,4,3]) => 2
function minSubArrayLen(target, nums) {}

module.exports = {
  twoSum,
  threeSum,
  maxArea,
  trap,
  removeDuplicates,
  sortColors,
  validPalindrome,
  fourSum,
  numRescueBoats,
  minSubArrayLen,
};

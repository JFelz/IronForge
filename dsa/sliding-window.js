// ─── Sliding Window ───────────────────────────────────────────────────────────

// Challenge 1: Maximum Sum Subarray of Size K
// Given an array and integer k, find the maximum sum of any contiguous subarray
// of exactly k elements.
// Example: maxSumSubarray([2,1,5,1,3,2], 3) => 9  (subarray [5,1,3])
function maxSumSubarray(nums, k) {}

// Challenge 2: Longest Substring with At Most K Distinct Characters
// Return the length of the longest substring containing at most k distinct characters.
// Example: lengthOfLongestSubstringKDistinct("eceba", 2) => 3  ("ece")
function lengthOfLongestSubstringKDistinct(s, k) {}

// Challenge 3: Minimum Window Substring
// Given strings s and t, return the minimum window in s that contains all characters
// of t (including duplicates). Return "" if no such window exists.
// Example: minWindow("ADOBECODEBANC", "ABC") => "BANC"
function minWindow(s, t) {}

// Challenge 4: Permutation in String
// Return true if any permutation of string p exists as a substring of string s.
// Example: checkInclusion("ab", "eidbaooo") => true  ("ba" is a substring)
function checkInclusion(p, s) {}

// Challenge 5: Fruit Into Baskets
// You have two baskets and can pick one fruit per tree. Each basket holds only one
// fruit type. Starting from any tree, pick the maximum number of fruits.
// (Equivalent to: longest subarray with at most 2 distinct values.)
// Example: totalFruit([1,2,1,2,3]) => 4  ([1,2,1,2])
function totalFruit(fruits) {}

module.exports = { maxSumSubarray, lengthOfLongestSubstringKDistinct, minWindow, checkInclusion, totalFruit };

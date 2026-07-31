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

// Challenge 6: Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without
// repeating characters.
// Example: lengthOfLongestSubstring("abcabcbb") => 3  ("abc")
function lengthOfLongestSubstring(s) {}

// Challenge 7: Minimum Size Subarray Sum
// Given a positive integer target and an array of positive integers, return
// the minimal length of a contiguous subarray whose sum is >= target.
// Return 0 if no such subarray exists.
// Example: minSubArrayLen(7, [2,3,1,2,4,3,3]) => 2  ([4,3])
function minSubArrayLen(target, nums) {}

// Challenge 8: Longest Repeating Character Replacement
// Given a string s and integer k, you may replace up to k characters with
// any other uppercase letter. Return the length of the longest substring
// containing the same letter after replacements.
// Example: characterReplacement("ABAB", 2) => 4
function characterReplacement(s, k) {}

// Challenge 9: Find All Anagrams in a String
// Given strings s and p, return all start indices of p's anagrams in s.
// Example: findAnagrams("cbaebabacd", "abc") => [0,6]
function findAnagrams(s, p) {}

// Challenge 10: Max Consecutive Ones III
// Given a binary array and an integer k, return the maximum number of
// consecutive 1's if you can flip at most k 0's.
// Example: longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2) => 6
function longestOnes(nums, k) {}

module.exports = {
  maxSumSubarray,
  lengthOfLongestSubstringKDistinct,
  minWindow,
  checkInclusion,
  totalFruit,
  lengthOfLongestSubstring,
  minSubArrayLen,
  characterReplacement,
  findAnagrams,
  longestOnes,
};

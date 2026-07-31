// ─── Dynamic Programming ──────────────────────────────────────────────────────

// Challenge 1: Climbing Stairs
// You are climbing a staircase of n steps, taking 1 or 2 steps at a time.
// Return the number of distinct ways to reach the top.
// Example: climbStairs(5) => 8
function climbStairs(n) {}

// Challenge 2: 0/1 Knapsack
// Given item weights, values, and a capacity, return the maximum total value
// achievable without exceeding the capacity. Each item may be used at most once.
// Example: knapsack([1,3,4,5], [1,4,5,7], 7) => 9
function knapsack(weights, values, capacity) {}

// Challenge 3: Longest Common Subsequence
// Given two strings, return the length of their longest common subsequence.
// Example: lcs("abcde", "ace") => 3  ("ace")
function lcs(text1, text2) {}

// Challenge 4: Coin Change
// Given coin denominations and a target amount, return the fewest coins
// needed to make that amount. Return -1 if it cannot be made.
// Example: coinChange([1,2,5], 11) => 3  (5+5+1)
function coinChange(coins, amount) {}

// Challenge 5: Longest Increasing Subsequence
// Given an integer array, return the length of the longest strictly
// increasing subsequence.
// Example: lengthOfLIS([10,9,2,5,3,7,101,18]) => 4  ([2,3,7,101])
function lengthOfLIS(nums) {}

// Challenge 6: House Robber
// Given an array of nightly earnings from houses in a row, return the max
// amount you can rob without robbing two adjacent houses.
// Example: rob([2,7,9,3,1]) => 12  (2+9+1)
function rob(nums) {}

// Challenge 7: Unique Paths
// A robot starts at the top-left of an m×n grid and can only move down or
// right. Return the number of unique paths to the bottom-right corner.
// Example: uniquePaths(3, 7) => 28
function uniquePaths(m, n) {}

// Challenge 8: Word Break
// Given a string s and a dictionary of words, return true if s can be
// segmented into a space-separated sequence of one or more dictionary words.
// Example: wordBreak("leetcode", ["leet","code"]) => true
function wordBreak(s, wordDict) {}

// Challenge 9: Edit Distance
// Given two strings word1 and word2, return the minimum number of insert,
// delete, or replace operations to convert word1 into word2.
// Example: minDistance("horse", "ros") => 3
function minDistance(word1, word2) {}

// Challenge 10: Maximum Product Subarray
// Given an integer array, find the contiguous subarray with the largest
// product and return that product.
// Example: maxProduct([2,3,-2,4]) => 6  ([2,3])
function maxProduct(nums) {}

module.exports = {
  climbStairs,
  knapsack,
  lcs,
  coinChange,
  lengthOfLIS,
  rob,
  uniquePaths,
  wordBreak,
  minDistance,
  maxProduct,
};

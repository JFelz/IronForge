// ─── Dynamic Programming ──────────────────────────────────────────────────────

// Challenge 1: Climbing Stairs
// You can climb 1 or 2 steps at a time. In how many distinct ways can you
// reach the top of an n-step staircase?
// Example: climbStairs(5) => 8
function climbStairs(n) {}

// Challenge 2: 0/1 Knapsack
// Given weights and values of n items and a knapsack capacity W, find the
// maximum total value you can carry without exceeding weight W.
// Each item can only be taken once.
// Example: knapsack([1,3,4,5], [1,4,5,7], 7) => 9
function knapsack(weights, values, capacity) {}

// Challenge 3: Longest Common Subsequence
// Given two strings, return the length of their longest common subsequence.
// A subsequence maintains relative order but need not be contiguous.
// Example: lcs("abcde", "ace") => 3
function lcs(text1, text2) {}

// Challenge 4: Coin Change
// Given an array of coin denominations and a total amount, return the fewest
// number of coins needed to make up that amount, or -1 if impossible.
// Example: coinChange([1,5,11], 15) => 3  (5+5+5)
function coinChange(coins, amount) {}

// Challenge 5: Longest Increasing Subsequence
// Return the length of the longest strictly increasing subsequence in nums.
// Example: lengthOfLIS([10,9,2,5,3,7,101,18]) => 4  ([2,3,7,101])
function lengthOfLIS(nums) {}

module.exports = { climbStairs, knapsack, lcs, coinChange, lengthOfLIS };

// ─── Dynamic Programming ────────────────────────────────────────────────────

// Challenge 1: Climbing Stairs
// You can climb 1 or 2 steps at a time. Given n steps, return the number of
// distinct ways to climb to the top.
// Example: climbStairs(3) => 3
function climbStairs(n) {}

// Challenge 2: House Robber
// Given an array of non-negative integers representing money in each house,
// return the maximum amount you can rob without robbing two adjacent houses.
// Example: rob([1,2,3,1]) => 4
function rob(nums) {}

// Challenge 3: Longest Increasing Subsequence
// Given an integer array, return the length of the longest strictly
// increasing subsequence.
// Example: lengthOfLIS([10,9,2,5,3,7,101,18]) => 4
function lengthOfLIS(nums) {}

// Challenge 4: Coin Change
// Given an array of coin denominations and a target amount, return the
// fewest number of coins needed to make up that amount, or -1 if impossible.
// Example: coinChange([1,2,5], 11) => 3
function coinChange(coins, amount) {}

// Challenge 5: Edit Distance
// Given two strings word1 and word2, return the minimum number of
// insert/delete/replace operations to convert word1 into word2.
// Example: minDistance("horse", "ros") => 3
function minDistance(word1, word2) {}

module.exports = {
  climbStairs,
  rob,
  lengthOfLIS,
  coinChange,
  minDistance,
};

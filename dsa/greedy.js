// ─── Greedy ─────────────────────────────────────────────────────────────────

// Challenge 1: Jump Game
// Given an array where each element represents the max jump length from that
// position, return true if you can reach the last index starting from index 0.
// Example: canJump([2,3,1,1,4]) => true
function canJump(nums) {}

// Challenge 2: Gas Station
// Given gas and cost arrays for a circular route, return the starting gas
// station index from which you can travel around the circuit once, or -1.
// Example: canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]) => 3
function canCompleteCircuit(gas, cost) {}

// Challenge 3: Non-overlapping Intervals
// Given an array of intervals, return the minimum number of intervals to
// remove to make the rest non-overlapping.
// Example: eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]) => 1
function eraseOverlapIntervals(intervals) {}

// Challenge 4: Partition Labels
// Given a string, partition it into as many parts as possible so each letter
// appears in at most one part. Return the sizes of these parts.
// Example: partitionLabels("ababcbacadefegdehijhklij")
//          => [9,7,8]
function partitionLabels(s) {}

// Challenge 5: Best Time to Buy and Sell Stock II
// Given daily stock prices, return the maximum profit achievable by making
// as many transactions as you like (buy/sell before buying again).
// Example: maxProfit([7,1,5,3,6,4]) => 7
function maxProfit(prices) {}

module.exports = {
  canJump,
  canCompleteCircuit,
  eraseOverlapIntervals,
  partitionLabels,
  maxProfit,
};

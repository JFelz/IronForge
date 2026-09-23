// ─── Hash Tables ────────────────────────────────────────────────────────────

// Challenge 1: Group Anagrams
// Given an array of strings, group the anagrams together.
// Example: groupAnagrams(["eat","tea","tan","ate","nat","bat"])
//          => [["eat","tea","ate"],["tan","nat"],["bat"]]
function groupAnagrams(strs) {}

// Challenge 2: Top K Frequent Elements
// Given an integer array and an integer k, return the k most frequent
// elements.
// Example: topKFrequent([1,1,1,2,2,3], 2) => [1,2]
function topKFrequent(nums, k) {}

// Challenge 3: Longest Consecutive Sequence
// Given an unsorted array of integers, return the length of the longest
// consecutive elements sequence, in O(n) time.
// Example: longestConsecutive([100,4,200,1,3,2]) => 4
function longestConsecutive(nums) {}

// Challenge 4: Subarray Sum Equals K
// Given an array of integers and an integer k, return the total number of
// contiguous subarrays whose sum equals k.
// Example: subarraySum([1,1,1], 2) => 2
function subarraySum(nums, k) {}

// Challenge 5: First Unique Character in a String
// Given a string, return the index of its first non-repeating character, or
// -1 if none exists.
// Example: firstUniqChar("leetcode") => 0
function firstUniqChar(s) {}

module.exports = {
  groupAnagrams,
  topKFrequent,
  longestConsecutive,
  subarraySum,
  firstUniqChar,
};

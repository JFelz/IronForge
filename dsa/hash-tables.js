// ─── Hash Tables ──────────────────────────────────────────────────────────────

// Challenge 1: Group Anagrams
// Given an array of strings, group the anagrams together.
// Order of the groups and items within them does not matter.
// Example: groupAnagrams(["eat","tea","tan","ate","nat","bat"])
//          => [["bat"],["nat","tan"],["ate","eat","tea"]]
function groupAnagrams(strs) {}

// Challenge 2: Top K Frequent Elements
// Given an integer array and k, return the k most frequent elements.
// You may return the answer in any order.
// Example: topKFrequent([1,1,1,2,2,3], 2) => [1,2]
function topKFrequent(nums, k) {}

// Challenge 3: Longest Consecutive Sequence
// Given an unsorted array of integers, find the length of the longest
// consecutive sequence. Must run in O(n).
// Example: longestConsecutive([100,4,200,1,3,2]) => 4  (sequence: 1,2,3,4)
function longestConsecutive(nums) {}

// Challenge 4: Subarray Sum Equals K
// Count the total number of continuous subarrays whose sum equals k.
// Example: subarraySum([1,1,1], 2) => 2
function subarraySum(nums, k) {}

// Challenge 5: LRU Cache
// Design a data structure that follows the Least Recently Used eviction policy.
// Support get(key) in O(1) — returns value or -1 if not found.
// Support put(key, value) in O(1) — inserts/updates; evicts LRU if over capacity.
class LRUCache {
  constructor(capacity) {}
  get(key) {}
  put(key, value) {}
}

// Challenge 6: Contains Duplicate II
// Given an integer array and an integer k, return true if there are two
// distinct indices i and j such that nums[i] === nums[j] and abs(i-j) <= k.
// Example: containsNearbyDuplicate([1,2,3,1], 3) => true
function containsNearbyDuplicate(nums, k) {}

// Challenge 7: Ransom Note
// Given strings ransomNote and magazine, return true if ransomNote can be
// constructed using the letters from magazine (each letter used only once).
// Example: canConstruct("aa", "aab") => true
function canConstruct(ransomNote, magazine) {}

// Challenge 8: First Unique Character in a String
// Given a string, find the index of its first non-repeating character.
// Return -1 if none exists.
// Example: firstUniqChar("leetcode") => 0
function firstUniqChar(s) {}

// Challenge 9: Isomorphic Strings
// Given two strings s and t, return true if the characters in s can be
// replaced (one-to-one, order-preserving) to get t.
// Example: isIsomorphic("egg", "add") => true
function isIsomorphic(s, t) {}

// Challenge 10: Design HashSet
// Design a HashSet without using any built-in hash table library.
class MyHashSet {
  constructor() {}
  add(key) {}
  remove(key) {}
  contains(key) {}
}

module.exports = {
  groupAnagrams,
  topKFrequent,
  longestConsecutive,
  subarraySum,
  LRUCache,
  containsNearbyDuplicate,
  canConstruct,
  firstUniqChar,
  isIsomorphic,
  MyHashSet,
};

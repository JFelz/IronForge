// ─── Strings ──────────────────────────────────────────────────────────────────

// Challenge 1: Longest Substring Without Repeating Characters
// Return the length of the longest substring with no duplicate characters.
// Example: lengthOfLongestSubstring("abcabcbb") => 3  ("abc")
function lengthOfLongestSubstring(s) {}

// Challenge 2: Longest Palindromic Substring
// Return the longest substring of s that is a palindrome.
// Example: longestPalindrome("babad") => "bab"  (or "aba")
function longestPalindrome(s) {}

// Challenge 3: Valid Anagram
// Return true if string t is an anagram of string s (same characters, same counts).
// Example: isAnagram("anagram", "nagaram") => true
function isAnagram(s, t) {}

// Challenge 4: String Compression
// Compress a character array in-place using counts of consecutive characters.
// "aabcccccaaa" => "a2b1c5a3" — return the new length. Must use O(1) extra space.
// Example: compress(["a","a","b","b","c","c","c"]) => 6, array becomes ["a","2","b","2","c","3"]
function compress(chars) {}

// Challenge 5: Decode Ways
// A message is encoded by mapping 'A'->1, 'B'->2, ..., 'Z'->26.
// Given a string of digits, return the number of ways to decode it.
// Example: numDecodings("226") => 3  ("BZ", "VF", "BBF")
function numDecodings(s) {}

module.exports = { lengthOfLongestSubstring, longestPalindrome, isAnagram, compress, numDecodings };

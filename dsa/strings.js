// ─── Strings ────────────────────────────────────────────────────────────────

// Challenge 1: Valid Anagram
// Given two strings s and t, return true if t is an anagram of s.
// Example: isAnagram("anagram", "nagaram") => true
function isAnagram(s, t) {}

// Challenge 2: Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without
// repeating characters.
// Example: lengthOfLongestSubstring("abcabcbb") => 3
function lengthOfLongestSubstring(s) {}

// Challenge 3: Valid Palindrome
// Given a string, return true if it's a palindrome considering only
// alphanumeric characters and ignoring case.
// Example: isPalindrome("A man, a plan, a canal: Panama") => true
function isPalindrome(s) {}

// Challenge 4: Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.
// Example: longestPalindrome("babad") => "bab"  (or "aba")
function longestPalindrome(s) {}

// Challenge 5: String to Integer (atoi)
// Implement atoi: convert a string to a 32-bit signed integer, handling
// leading whitespace, an optional sign, digits, and overflow clamping.
// Example: myAtoi("   -42") => -42
function myAtoi(s) {}

// Challenge 6: Group Shifted Strings
// Group strings that can be shifted into one another by the same offset
// for every letter (wrapping z -> a).
// Example: groupStrings(["abc","bcd","acef","xyz","az","ba","a","z"])
//          => [["abc","bcd","xyz"],["acef"],["az","ba"],["a","z"]]
function groupStrings(strings) {}

// Challenge 7: Minimum Window Substring
// Given strings s and t, return the minimum window substring of s that
// contains every character of t (including duplicates). Return "" if none.
// Example: minWindow("ADOBECODEBANC", "ABC") => "BANC"
function minWindow(s, t) {}

// Challenge 8: String Compression
// Compress a character array in place using counts of repeated characters
// (e.g. ["a","a","b","b","b"] -> ["a","2","b","3"]). Return new length.
// Example: compress(["a","a","b","b","b"]) => 4
function compress(chars) {}

// Challenge 9: Zigzag Conversion
// Write a string in a zigzag pattern across numRows and read line by line.
// Example: convert("PAYPALISHIRING", 3) => "PAHNAPLSIIGYIR"
function convert(s, numRows) {}

// Challenge 10: Word Break
// Given a string s and a dictionary of words, return true if s can be
// segmented into a space-separated sequence of one or more dictionary words.
// Example: wordBreak("leetcode", ["leet","code"]) => true
function wordBreak(s, wordDict) {}

module.exports = {
  isAnagram,
  lengthOfLongestSubstring,
  isPalindrome,
  longestPalindrome,
  myAtoi,
  groupStrings,
  minWindow,
  compress,
  convert,
  wordBreak,
};

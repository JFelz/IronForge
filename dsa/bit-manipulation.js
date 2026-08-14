// ─── Bit Manipulation ───────────────────────────────────────────────────────

// Challenge 1: Single Number
// Given a non-empty array where every element appears twice except one,
// find the single one, using XOR.
// Example: singleNumber([4,1,2,1,2]) => 4
function singleNumber(nums) {}

// Challenge 2: Number of 1 Bits
// Given an unsigned integer, return the number of '1' bits it has (Hamming
// weight).
// Example: hammingWeight(11) => 3  (1011)
function hammingWeight(n) {}

// Challenge 3: Counting Bits
// Given an integer n, return an array of length n+1 where each element i
// is the number of 1 bits in the binary representation of i.
// Example: countBits(5) => [0,1,1,2,1,2]
function countBits(n) {}

// Challenge 4: Reverse Bits
// Reverse the bits of a given 32-bit unsigned integer.
// Example: reverseBits(43261596) => 964176192
function reverseBits(n) {}

// Challenge 5: Sum of Two Integers
// Calculate the sum of two integers a and b without using the + or -
// operators, using bitwise operations.
// Example: getSum(1, 2) => 3
function getSum(a, b) {}

// Challenge 6: Missing Number
// Given an array containing n distinct numbers from 0 to n, find the
// missing number, using XOR.
// Example: missingNumber([3,0,1]) => 2
function missingNumber(nums) {}

// Challenge 7: Single Number II
// Given an array where every element appears three times except one which
// appears once, find that single element using bit counting.
// Example: singleNumberII([2,2,3,2]) => 3
function singleNumberII(nums) {}

// Challenge 8: Bitwise AND of Numbers Range
// Given two integers left and right, return the bitwise AND of all numbers
// in the range [left, right] inclusive.
// Example: rangeBitwiseAnd(5, 7) => 4
function rangeBitwiseAnd(left, right) {}

// Challenge 9: Power of Two
// Given an integer n, return true if it is a power of two, using bit tricks.
// Example: isPowerOfTwo(16) => true
function isPowerOfTwo(n) {}

// Challenge 10: Subsets via Bitmask
// Given an array of unique integers, return all possible subsets by
// iterating over all bitmasks from 0 to 2^n - 1.
// Example: subsetsBitmask([1,2,3]) => [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
function subsetsBitmask(nums) {}

module.exports = {
  singleNumber,
  hammingWeight,
  countBits,
  reverseBits,
  getSum,
  missingNumber,
  singleNumberII,
  rangeBitwiseAnd,
  isPowerOfTwo,
  subsetsBitmask,
};

// ─── Recursion ────────────────────────────────────────────────────────────────

// Challenge 1: Fibonacci Number
// Return the nth Fibonacci number using recursion with memoization.
// F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)
// Example: fib(10) => 55
function fib(n, memo = {}) {}

// Challenge 2: Power Function (Fast Exponentiation)
// Implement pow(x, n) — x raised to the power n — using recursion.
// Handle negative exponents. Must run in O(log n).
// Example: myPow(2.0, 10) => 1024.0  |  myPow(2.0, -2) => 0.25
function myPow(x, n) {}

// Challenge 3: Generate All Subsets
// Given an integer array of unique elements, return all possible subsets (power set).
// The solution set must not contain duplicate subsets.
// Example: subsets([1,2,3]) => [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
function subsets(nums) {}

// Challenge 4: Permutations
// Given an array of distinct integers, return all possible permutations.
// Example: permute([1,2,3]) => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function permute(nums) {}

// Challenge 5: Tower of Hanoi
// Move n disks from source peg to destination peg using an auxiliary peg.
// A larger disk can never sit on a smaller disk. Return an array of move strings.
// Example: hanoi(2, 'A', 'C', 'B') => ["Move disk 1 from A to B", "Move disk 2 from A to C", "Move disk 1 from B to C"]
function hanoi(n, source, destination, auxiliary, moves = []) {}

module.exports = { fib, myPow, subsets, permute, hanoi };

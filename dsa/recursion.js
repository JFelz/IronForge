// ─── Recursion ──────────────────────────────────────────────────────────────

// Challenge 1: Fibonacci Number
// Given n, calculate the nth Fibonacci number recursively.
// Example: fib(4) => 3
function fib(n) {}

// Challenge 2: Pow(x, n)
// Implement pow(x, n), which calculates x raised to the power n, using
// recursion (fast exponentiation).
// Example: myPow(2.0, 10) => 1024.0
function myPow(x, n) {}

// Challenge 3: Generate Parentheses
// Given n pairs of parentheses, generate all combinations of well-formed
// parentheses.
// Example: generateParenthesis(3) => ["((()))","(()())","(())()","()(())","()()()"]
function generateParenthesis(n) {}

// Challenge 4: Permutations
// Given an array of distinct integers, return all possible permutations.
// Example: permute([1,2,3])
//          => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function permute(nums) {}

// Challenge 5: Tower of Hanoi
// Given n disks, return the sequence of moves (as [from, to] pairs) required
// to move all disks from rod 'A' to rod 'C' using rod 'B', following the
// rules of Tower of Hanoi.
// Example: towerOfHanoi(2, "A", "C", "B") => [["A","B"],["A","C"],["B","C"]]
function towerOfHanoi(n, from, to, aux) {}

module.exports = {
  fib,
  myPow,
  generateParenthesis,
  permute,
  towerOfHanoi,
};

// ─── Backtracking ───────────────────────────────────────────────────────────

// Challenge 1: Subsets
// Given an integer array of unique elements, return all possible subsets
// (the power set).
// Example: subsets([1,2,3])
//          => [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
function subsets(nums) {}

// Challenge 2: Combination Sum
// Given an array of distinct integers and a target, return all unique
// combinations where the chosen numbers sum to target. Numbers may be
// reused.
// Example: combinationSum([2,3,6,7], 7) => [[2,2,3],[7]]
function combinationSum(candidates, target) {}

// Challenge 3: N-Queens
// Given an integer n, return all distinct solutions to the n-queens puzzle,
// where each solution is a board configuration with queens placed so no two
// attack each other.
// Example: solveNQueens(4) => [[".Q..","...Q","Q...","..Q."],
//          ["..Q.","Q...","...Q",".Q.."]]
function solveNQueens(n) {}

// Challenge 4: Word Search
// Given an m x n grid of characters and a word, return true if the word
// exists in the grid by tracing adjacent (horizontal/vertical) cells.
// Example: exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED") => true
function exist(board, word) {}

// Challenge 5: Palindrome Partitioning
// Given a string s, partition it such that every substring of the partition
// is a palindrome. Return all possible partitions.
// Example: partition("aab") => [["a","a","b"],["aa","b"]]
function partition(s) {}

module.exports = {
  subsets,
  combinationSum,
  solveNQueens,
  exist,
  partition,
};

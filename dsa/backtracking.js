// ─── Backtracking ───────────────────────────────────────────────────────────

// Challenge 1: Subsets
// Given an array of unique integers, return all possible subsets (the
// power set).
// Example: subsets([1,2,3]) => [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
function subsets(nums) {}

// Challenge 2: Permutations
// Given an array of distinct integers, return all possible permutations.
// Example: permute([1,2,3]) => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function permute(nums) {}

// Challenge 3: Combination Sum
// Given an array of distinct integers and a target, return all unique
// combinations that sum to the target (numbers may be reused).
// Example: combinationSum([2,3,6,7], 7) => [[2,2,3],[7]]
function combinationSum(candidates, target) {}

// Challenge 4: Word Search
// Given a grid of letters and a word, determine if the word can be
// constructed from sequentially adjacent cells.
// Example: exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED") => true
function exist(board, word) {}

// Challenge 5: Palindrome Partitioning
// Given a string, partition it so every substring is a palindrome, and
// return all possible partitions.
// Example: partition("aab") => [["a","a","b"],["aa","b"]]
function partition(s) {}

// Challenge 6: N-Queens
// Place n queens on an n×n chessboard so no two queens attack each other;
// return all distinct solutions.
// Example: solveNQueens(4) => [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
function solveNQueens(n) {}

// Challenge 7: Generate Parentheses
// Given n pairs of parentheses, generate all combinations of well-formed
// parentheses.
// Example: generateParenthesis(3) => ["((()))","(()())","(())()","()(())","()()()"]
function generateParenthesis(n) {}

// Challenge 8: Letter Combinations of a Phone Number
// Given a string of digits 2-9, return all possible letter combinations
// the number could represent (as on a phone keypad).
// Example: letterCombinations("23") => ["ad","ae","af","bd","be","bf","cd","ce","cf"]
function letterCombinations(digits) {}

// Challenge 9: Combination Sum II
// Given a collection of candidate numbers (each may contain duplicates)
// and a target, return all unique combinations that sum to the target,
// using each number at most once.
// Example: combinationSum2([10,1,2,7,6,1,5], 8) => [[1,1,6],[1,2,5],[1,7],[2,6]]
function combinationSum2(candidates, target) {}

// Challenge 10: Sudoku Solver
// Write a program to solve a 9×9 Sudoku puzzle by filling empty cells,
// modifying the board in place.
function solveSudoku(board) {}

module.exports = {
  subsets,
  permute,
  combinationSum,
  exist,
  partition,
  solveNQueens,
  generateParenthesis,
  letterCombinations,
  combinationSum2,
  solveSudoku,
};

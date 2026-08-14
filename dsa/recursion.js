// ─── Recursion ──────────────────────────────────────────────────────────────

// Challenge 1: Fibonacci Number
// Compute the nth Fibonacci number using plain recursion.
// Example: fib(10) => 55
function fib(n) {}

// Challenge 2: Power Function (pow(x, n))
// Implement pow(x, n) which calculates x raised to the power n using
// recursive fast exponentiation.
// Example: myPow(2.0, 10) => 1024.0
function myPow(x, n) {}

// Challenge 3: Reverse a Linked List (Recursive)
// Given the head of a singly linked list, reverse it recursively.
// Example: reverseList([1,2,3,4,5]) => [5,4,3,2,1]
function reverseList(head) {}

// Challenge 4: Tower of Hanoi
// Given n disks, return the sequence of moves to solve the Tower of Hanoi
// puzzle, moving disks from source to destination using an auxiliary peg.
// Example: hanoi(2, "A", "C", "B") => [["A","B"],["A","C"],["B","C"]]
function hanoi(n, source, destination, auxiliary) {}

// Challenge 5: Merge Two Sorted Lists
// Merge two sorted linked lists into one sorted list, recursively.
// Example: mergeTwoLists([1,2,4], [1,3,4]) => [1,1,2,3,4,4]
function mergeTwoLists(list1, list2) {}

// Challenge 6: Flatten Nested List Iterator
// Given a nested list of integers, implement an iterator to flatten it
// using recursion.
class NestedIterator {
  constructor(nestedList) {}
  next() {}
  hasNext() {}
}

// Challenge 7: Generate All Binary Strings of Length N
// Recursively generate all binary strings of a given length.
// Example: generateBinaryStrings(2) => ["00","01","10","11"]
function generateBinaryStrings(n) {}

// Challenge 8: Count Down and Up
// Recursively print/collect numbers counting down from n to 1 and back up
// to n, returning the sequence as an array.
// Example: countDownUp(3) => [3,2,1,2,3]
function countDownUp(n) {}

// Challenge 9: Recursive Binary Search Tree Height
// Given the root of a binary tree, compute its height recursively without
// any auxiliary data structures.
// Example: treeHeight([3,9,20,null,null,15,7]) => 2
function treeHeight(root) {}

// Challenge 10: Josephus Problem
// Given n people in a circle and an elimination step k, find the position
// of the last remaining person, using recursion.
// Example: josephus(7, 3) => 3
function josephus(n, k) {}

module.exports = {
  fib,
  myPow,
  reverseList,
  hanoi,
  mergeTwoLists,
  NestedIterator,
  generateBinaryStrings,
  countDownUp,
  treeHeight,
  josephus,
};

// ─── Binary Search Trees ───────────────────────────────────────────────────

// Challenge 1: Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid BST.
// Example: isValidBST([2,1,3]) => true
function isValidBST(root) {}

// Challenge 2: Insert into a Binary Search Tree
// Given the root of a BST and a value, insert the value into the BST and
// return the root of the resulting tree.
// Example: insertIntoBST([4,2,7,1,3], 5) => [4,2,7,1,3,5]
function insertIntoBST(root, val) {}

// Challenge 3: Delete Node in a BST
// Given the root of a BST and a key, delete the node with that key and
// return the root of the resulting BST.
// Example: deleteNode([5,3,6,2,4,null,7], 3) => [5,4,6,2,null,null,7]
function deleteNode(root, key) {}

// Challenge 4: Kth Smallest Element in a BST
// Given the root of a BST and an integer k, return the kth smallest value.
// Example: kthSmallest([3,1,4,null,2], 1) => 1
function kthSmallest(root, k) {}

// Challenge 5: Lowest Common Ancestor of a BST
// Given a BST and two nodes p and q, find their lowest common ancestor,
// taking advantage of BST ordering.
function lowestCommonAncestorBST(root, p, q) {}

// Challenge 6: Convert Sorted Array to Binary Search Tree
// Given an array sorted in ascending order, convert it to a height-balanced
// BST.
// Example: sortedArrayToBST([-10,-3,0,5,9]) => [0,-3,9,-10,null,5]
function sortedArrayToBST(nums) {}

// Challenge 7: Balance a Binary Search Tree
// Given the root of a BST, return a balanced BST with the same node values,
// possibly with a different structure.
function balanceBST(root) {}

// Challenge 8: Two Sum IV - Input is a BST
// Given the root of a BST and a target, return true if there exist two
// elements in the BST that sum to the target.
// Example: findTarget([5,3,6,2,4,null,7], 9) => true
function findTarget(root, k) {}

// Challenge 9: Range Sum of BST
// Given the root of a BST and a range [low, high], return the sum of all
// node values within the range.
// Example: rangeSumBST([10,5,15,3,7,null,18], 7, 15) => 32
function rangeSumBST(root, low, high) {}

// Challenge 10: Recover Binary Search Tree
// Two nodes of a BST have been swapped by mistake. Recover the tree without
// changing its structure, in O(1) extra space if possible.
// Example: recoverTree([1,3,null,null,2]) => [3,1,null,null,2] (fixed in place)
function recoverTree(root) {}

module.exports = {
  isValidBST,
  insertIntoBST,
  deleteNode,
  kthSmallest,
  lowestCommonAncestorBST,
  sortedArrayToBST,
  balanceBST,
  findTarget,
  rangeSumBST,
  recoverTree,
};

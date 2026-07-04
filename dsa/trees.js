// ─── Trees ────────────────────────────────────────────────────────────────────

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Challenge 1: Maximum Depth of Binary Tree
// Return the maximum depth (number of nodes along the longest root-to-leaf path).
// Example: maxDepth([3,9,20,null,null,15,7]) => 3
function maxDepth(root) {}

// Challenge 2: Invert Binary Tree
// Invert (mirror) the binary tree and return its root.
// Example: invertTree([4,2,7,1,3,6,9]) => [4,7,2,9,6,3,1]
function invertTree(root) {}

// Challenge 3: Lowest Common Ancestor of a BST
// Given a BST and two nodes p and q, return their lowest common ancestor.
// The LCA is the deepest node that has both p and q as descendants.
// Example: lowestCommonAncestor(root, p=2, q=8) => node(6) for BST [6,2,8,0,4,7,9]
function lowestCommonAncestor(root, p, q) {}

// Challenge 4: Level Order Traversal (BFS)
// Return the level-order (breadth-first) traversal as an array of arrays per level.
// Example: levelOrder([3,9,20,null,null,15,7]) => [[3],[9,20],[15,7]]
function levelOrder(root) {}

// Challenge 5: Validate Binary Search Tree
// Determine if a binary tree is a valid BST.
// Each node's value must be strictly greater than all left subtree values
// and strictly less than all right subtree values.
// Example: isValidBST([2,1,3]) => true  |  isValidBST([5,1,4,null,null,3,6]) => false
function isValidBST(root) {}

module.exports = { TreeNode, maxDepth, invertTree, lowestCommonAncestor, levelOrder, isValidBST };

// ─── Trees ──────────────────────────────────────────────────────────────────

// Challenge 1: Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// Example: maxDepth([3,9,20,null,null,15,7]) => 3
function maxDepth(root) {}

// Challenge 2: Invert Binary Tree
// Given the root of a binary tree, invert it and return the root.
// Example: invertTree([4,2,7,1,3,6,9]) => [4,7,2,9,6,3,1]
function invertTree(root) {}

// Challenge 3: Diameter of Binary Tree
// Given the root of a binary tree, return the length of the diameter (the
// longest path between any two nodes, measured in edges).
// Example: diameterOfBinaryTree([1,2,3,4,5]) => 3
function diameterOfBinaryTree(root) {}

// Challenge 4: Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its
// node values (left to right, level by level).
// Example: levelOrder([3,9,20,null,null,15,7]) => [[3],[9,20],[15,7]]
function levelOrder(root) {}

// Challenge 5: Lowest Common Ancestor of a Binary Tree
// Given a binary tree and two nodes p and q, find their lowest common
// ancestor.
function lowestCommonAncestor(root, p, q) {}

// Challenge 6: Serialize and Deserialize Binary Tree
// Design an algorithm to serialize a binary tree to a string and deserialize
// that string back to the original tree structure.
function serialize(root) {}
function deserialize(data) {}

// Challenge 7: Path Sum II
// Given the root of a binary tree and a target sum, return all root-to-leaf
// paths where each path's values sum to the target.
// Example: pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 22)
//          => [[5,4,11,2],[5,8,4,5]]
function pathSum(root, targetSum) {}

// Challenge 8: Binary Tree Maximum Path Sum
// Given a binary tree, return the maximum path sum of any non-empty path
// (does not need to pass through the root).
// Example: maxPathSum([-10,9,20,null,null,15,7]) => 42
function maxPathSum(root) {}

// Challenge 9: Construct Binary Tree from Preorder and Inorder Traversal
// Given preorder and inorder traversal arrays of a binary tree, reconstruct
// and return the tree.
// Example: buildTree([3,9,20,15,7], [9,3,15,20,7]) => [3,9,20,null,null,15,7]
function buildTree(preorder, inorder) {}

// Challenge 10: Vertical Order Traversal of a Binary Tree
// Given the root of a binary tree, return its vertical order traversal
// (nodes grouped by column, top-to-bottom, left-to-right within ties).
function verticalTraversal(root) {}

module.exports = {
  maxDepth,
  invertTree,
  diameterOfBinaryTree,
  levelOrder,
  lowestCommonAncestor,
  serialize,
  deserialize,
  pathSum,
  maxPathSum,
  buildTree,
  verticalTraversal,
};

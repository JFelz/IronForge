// ─── Linked Lists ─────────────────────────────────────────────────────────────
// Assume a singly-linked list node shaped like: { val, next }

// Challenge 1: Reverse Linked List
// Reverse a singly linked list and return the new head.
// Example: reverseList(1->2->3->4->5) => 5->4->3->2->1
function reverseList(head) {}

// Challenge 2: Linked List Cycle
// Given the head of a linked list, determine if it has a cycle.
// Example: hasCycle(3->2->0->-4->(back to 2)) => true
function hasCycle(head) {}

// Challenge 3: Merge Two Sorted Lists
// Merge two sorted linked lists and return it as one sorted list.
// Example: mergeTwoLists(1->2->4, 1->3->4) => 1->1->2->3->4->4
function mergeTwoLists(list1, list2) {}

// Challenge 4: Middle of the Linked List
// Return the middle node of a singly linked list. If two middle nodes
// exist, return the second one.
// Example: middleNode(1->2->3->4->5) => 3->4->5
function middleNode(head) {}

// Challenge 5: Remove Nth Node From End of List
// Remove the nth node from the end of the list and return the head.
// Example: removeNthFromEnd(1->2->3->4->5, 2) => 1->2->3->5
function removeNthFromEnd(head, n) {}

// Challenge 6: Add Two Numbers
// Two non-negative integers are represented by a linked list, each node
// holding a single digit stored in reverse order. Add the two numbers and
// return the sum as a linked list.
// Example: addTwoNumbers(2->4->3, 5->6->4) => 7->0->8  (342 + 465 = 807)
function addTwoNumbers(l1, l2) {}

// Challenge 7: Palindrome Linked List
// Given the head of a singly linked list, return true if it is a palindrome.
// Example: isPalindrome(1->2->2->1) => true
function isPalindrome(head) {}

// Challenge 8: Reorder List
// Given a linked list L0->L1->...->Ln-1->Ln, reorder it in-place to
// L0->Ln->L1->Ln-1->L2->Ln-2->...
// Example: reorderList(1->2->3->4) => 1->4->2->3
function reorderList(head) {}

// Challenge 9: Intersection of Two Linked Lists
// Given the heads of two singly linked lists, return the node at which they
// intersect, or null if they do not intersect.
// Example: two lists that share a common tail starting at node c1 => c1
function getIntersectionNode(headA, headB) {}

// Challenge 10: Rotate List
// Given the head of a linked list, rotate the list to the right by k places.
// Example: rotateRight(1->2->3->4->5, 2) => 4->5->1->2->3
function rotateRight(head, k) {}

module.exports = {
  reverseList,
  hasCycle,
  mergeTwoLists,
  middleNode,
  removeNthFromEnd,
  addTwoNumbers,
  isPalindrome,
  reorderList,
  getIntersectionNode,
  rotateRight,
};

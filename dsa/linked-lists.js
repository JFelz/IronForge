// ─── Linked Lists ───────────────────────────────────────────────────────────

// Challenge 1: Reverse Linked List
// Given the head of a singly linked list, reverse it and return the new head.
// Example: reverseList([1,2,3,4,5]) => [5,4,3,2,1]
function reverseList(head) {}

// Challenge 2: Linked List Cycle
// Given the head of a linked list, determine if the list has a cycle in it.
// Example: hasCycle([3,2,0,-4] with tail connecting to index 1) => true
function hasCycle(head) {}

// Challenge 3: Merge Two Sorted Lists
// Merge two sorted linked lists and return it as a new sorted list.
// Example: mergeTwoLists([1,2,4], [1,3,4]) => [1,1,2,3,4,4]
function mergeTwoLists(list1, list2) {}

// Challenge 4: Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end and
// return the head.
// Example: removeNthFromEnd([1,2,3,4,5], 2) => [1,2,3,5]
function removeNthFromEnd(head, n) {}

// Challenge 5: Add Two Numbers
// Two non-negative integers are represented as linked lists in reverse order,
// with each node containing a single digit. Add the two numbers and return
// the sum as a linked list.
// Example: addTwoNumbers([2,4,3], [5,6,4]) => [7,0,8]  (342 + 465 = 807)
function addTwoNumbers(l1, l2) {}

module.exports = {
  reverseList,
  hasCycle,
  mergeTwoLists,
  removeNthFromEnd,
  addTwoNumbers,
};

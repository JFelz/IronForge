// ─── Linked Lists ─────────────────────────────────────────────────────────────

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Challenge 1: Reverse a Linked List
// Reverse the singly linked list and return the new head.
// Example: 1->2->3->4->5 => 5->4->3->2->1
function reverseList(head) {}

// Challenge 2: Detect a Cycle
// Return true if the linked list has a cycle (a node's next pointer loops back).
// Use Floyd's slow/fast pointer algorithm.
// Example: 3->2->0->-4->(back to 2) => true
function hasCycle(head) {}

// Challenge 3: Merge Two Sorted Lists
// Merge two sorted linked lists and return the merged list's head (also sorted).
// Example: 1->2->4 merged with 1->3->4 => 1->1->2->3->4->4
function mergeTwoLists(list1, list2) {}

// Challenge 4: Find the Middle Node
// Return the middle node of the linked list. If two middles exist, return the second.
// Example: 1->2->3->4->5 => node(3)
function middleNode(head) {}

// Challenge 5: Remove Nth Node from End
// Remove the nth node from the end of the list and return the head.
// Example: removeNthFromEnd(1->2->3->4->5, 2) => 1->2->3->5
function removeNthFromEnd(head, n) {}

module.exports = { ListNode, reverseList, hasCycle, mergeTwoLists, middleNode, removeNthFromEnd };

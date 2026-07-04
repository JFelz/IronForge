// ─── Sorting ──────────────────────────────────────────────────────────────────

// Challenge 1: Merge Sort
// Implement merge sort on an array of numbers. Return the sorted array.
// Time: O(n log n) | Space: O(n)
// Example: mergeSort([38,27,43,3,9,82,10]) => [3,9,10,27,38,43,82]
function mergeSort(arr) {}

// Challenge 2: Quick Sort
// Implement quicksort. Partition around a pivot and sort in-place.
// Time: O(n log n) avg | Space: O(log n)
// Example: quickSort([10,7,8,9,1,5]) => [1,5,7,8,9,10]
function quickSort(arr, low = 0, high = arr.length - 1) {}

// Challenge 3: Sort Colors (Dutch National Flag)
// Given an array with values 0, 1, or 2 (representing red, white, blue),
// sort it in-place so all 0s come first, then 1s, then 2s.
// Must be one-pass with O(1) extra space.
// Example: sortColors([2,0,2,1,1,0]) => [0,0,1,1,2,2]
function sortColors(nums) {}

// Challenge 4: Kth Largest Element in an Array
// Find the kth largest element in an unsorted array (not kth distinct).
// Example: findKthLargest([3,2,1,5,6,4], 2) => 5
function findKthLargest(nums, k) {}

// Challenge 5: Merge Intervals
// Given an array of intervals, merge all overlapping intervals and return
// an array of the non-overlapping intervals that cover all input intervals.
// Example: merge([[1,3],[2,6],[8,10],[15,18]]) => [[1,6],[8,10],[15,18]]
function merge(intervals) {}

module.exports = { mergeSort, quickSort, sortColors, findKthLargest, merge };

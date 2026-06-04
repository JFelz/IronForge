
/*
Problem: Remove Element

Given an array nums and a value val, remove all occurrences of val in-place and return the new length of the array.
The order of elements can change. Do not use extra space for another array.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would this change if we needed to preserve order?
*/

/*
  let nums = [0,1,2,4,3,5,3];
  let val = 3;
*/

function removeElement(nums, val) {
  // your code here
/* 
- create a for loop to check every element of the array
- then I would compare each element to val
- then I would remove every element that is equal to val from the array
- return nums array
*/

for (let i = nums.length - 1; i >= 0; i--) {
  if (nums[i] === val) {
    nums.splice(i, 1);
  }
}
return nums.length;

}

removeElement(nums, val);

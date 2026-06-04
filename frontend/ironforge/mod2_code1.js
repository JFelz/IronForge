/*
Problem: Reverse an Array

function reverseArray(arr) {
  
  let arr2 = [];

  for (let i=arr.length-1; i>=0; i++){
    arr2.push(arr[i]);
  }
  
  // Return the array
  return arr2;
  
  // Time Complexity: O(n) - we visit each element at most once
  // Space Complexity: O(n) - we add a new array that is as large as the current one
}
*/

function reverseArray_inPlace(arr) {
  
  //Use two-pointer technique
  let left = 0;
  let right = arr.length - 1;
  
  // Swap elements from both ends moving towards center
  while (left < right) {
    // Swap elements at left and right positions
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
    // Move pointers towards center
    left++;
    right--;
  }
  
  // Return the modified array (though it's modified in-place)
  return arr;
  
  // Time Complexity: O(n) - we visit each element at most once
  // Space Complexity: O(1) - only using constant extra space
}

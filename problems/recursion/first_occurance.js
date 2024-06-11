// [3,2,1,5,6,7,8]
// target = 8
// return index if element exists
// return -1 if element doesn't exists

// Iterative Approach
function firstOccuranceIterative(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// Recursive Approach
function firstOccuranceRecursive(arr, idx, target) {
  // Base Case 1 : if target is found
  if (arr[idx] === target) {
    return idx;
  }

  // Base Case 2 : we have reached the end of array
  if (arr.length === idx) {
    return -1;
  }

  // Let's iterate through the entire array
  return firstOccuranceRecursive(arr, idx + 1, target);
}

console.log(firstOccuranceIterative([3, 8, 2, 1, 5, 6, 7, 8], 8));
console.log(firstOccuranceRecursive([3, 2, 1, 5, 6, 7, 8], 0, 8));

// The mergeSort function is a classic implementation of the Merge Sort algorithm, which is a divide-and-conquer algorithm with a time complexity of O(nlogn).

/**
 * Sorts an array using the Merge Sort algorithm.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function mergeSort(array) {
  // Base case: If the array has only one element, it is already sorted.
  if (array.length === 1) {
    return array;
  }

  // Find the midpoint to divide the array into two halves.
  const mid = Math.floor(array.length / 2);

  // Recursively divide and sort the left half.
  const leftArr = mergeSort(array.slice(0, mid));

  // Recursively divide and sort the right half.
  const rightArr = mergeSort(array.slice(mid));

  // Merge the two sorted halves and return the result.
  return merge(leftArr, rightArr);
}

/**
 * Merges two sorted arrays into one sorted array.
 * @param {number[]} leftArr - The sorted left half.
 * @param {number[]} rightArr - The sorted right half.
 * @returns {number[]} - The merged and sorted array.
 */
function merge(leftArr, rightArr) {
  const result = [];
  let leftPointer = 0;
  let rightPointer = 0;

  // Compare elements from both arrays and merge them in ascending order.
  while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
    if (leftArr[leftPointer] < rightArr[rightPointer]) {
      result.push(leftArr[leftPointer]);
      leftPointer++;
    } else {
      result.push(rightArr[rightPointer]);
      rightPointer++;
    }
  }

  // Append any remaining elements from the left array.
  while (leftPointer < leftArr.length) {
    result.push(leftArr[leftPointer]);
    leftPointer++;
  }

  // Append any remaining elements from the right array.
  while (rightPointer < rightArr.length) {
    result.push(rightArr[rightPointer]);
    rightPointer++;
  }

  return result;
}

// Usage example
const array = [5, 3, 2, 1, 4];
console.log("Before sorting:", array); // Output the array before sorting
const sortedArray = mergeSort(array);
console.log("After sorting:", sortedArray); // Output the array after sorting
// Expected Output: Before sorting: [5, 3, 2, 1, 4]
//                  After sorting: [1, 2, 3, 4, 5]

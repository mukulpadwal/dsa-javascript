/**
 * Sorts an array using the Selection Sort algorithm.
 * @param {number[]} array - The array to be sorted.
 */
function selectionSort(array) {
  // Iterate over each element in the array.
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the remaining unsorted portion of the array.
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // If the minimum element is not already in its correct position, swap it with the first unsorted element.
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
}

// Usage example
const array = [4, 5, 3, 2, 1];
console.log("Before sorting:", array); // Output the array before sorting
selectionSort(array);
console.log("After sorting:", array); // Output the array after sorting
// Expected Output: Before sorting: [4, 5, 3, 2, 1]
//                  After sorting: [1, 2, 3, 4, 5]

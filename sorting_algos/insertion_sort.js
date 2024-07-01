/**
 * Sorts an array of numbers in ascending order using the insertion sort algorithm.
 * @param {number[]} array - The array of numbers to be sorted.
 */
function insertionSort(array) {
  // Iterate over each element in the array starting from the second element
  for (let i = 0; i < array.length; i++) {
    // Store the current element to be compared and inserted
    let currentElement = array[i];
    // Initialize j to the index of the last sorted element
    let j = i - 1;

    // Shift elements of the sorted portion to the right to make space for the current element
    while (j >= 0 && currentElement < array[j]) {
      array[j + 1] = array[j];
      j--;
    }

    // Insert the current element into its correct position
    array[j + 1] = currentElement;
  }
}

// Usage example
const array = [5, 3, 2, 1, 4];
console.log("Before sorting:", array); // Output the array before sorting
insertionSort(array);
console.log("After sorting:", array); // Output the array after sorting
// Expected Output: Before sorting: [5, 3, 2, 1, 4]
//                  After sorting: [1, 2, 3, 4, 5]

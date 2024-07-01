/**
 * Swaps two elements in an array.
 * @param {number[]} array - The array containing elements to swap.
 * @param {number} i - The index of the first element.
 * @param {number} j - The index of the second element.
 */
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 * @param {number[]} array - The array of numbers to be sorted.
 */
function bubbleSort(array) {
  // Logic to sort array using bubble sort

  // METHOD 1 : Simple bubble sort
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = i + 1; j < array.length; j++) {
  //     if (array[i] > array[j]) {
  //       // Swap the array elements if they are in the wrong order
  //       swap(array, i, j);
  //     }
  //   }
  // }

  // METHOD 2 : Optimized bubble sort with swapped flag
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      // Compare adjacent elements and swap if they are in the wrong order
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
    // Continue the process until no swaps are needed
  } while (swapped);
}

// Usage example
const array = [4, 5, 3, 2, 1];
console.log("Before sorting:", array); // Output the array before sorting
bubbleSort(array);
console.log("After sorting:", array);  // Output the array after sorting
// Expected Output: Before sorting: [4, 5, 3, 2, 1]
//                  After sorting: [1, 2, 3, 4, 5]

/**
 * Finds the pivot index for Quick Sort.
 * @param {number[]} array - The array to find the pivot index in.
 * @param {number} low - The starting index of the subset to consider.
 * @param {number} high - The ending index of the subset to consider.
 * @returns {number} - The pivot index.
 */
function pivotIndex(array, low = 0, high = array.length - 1) {
    const pivotElement = array[high];
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      if (array[j] < pivotElement) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
  
    return i + 1;
  }
  
  /**
   * Sorts an array using the Quick Sort algorithm.
   * @param {number[]} array - The array to be sorted.
   * @param {number} low - The starting index of the subset to sort.
   * @param {number} high - The ending index of the subset to sort.
   */
  function quickSort(array, low = 0, high = array.length - 1) {
    // Base Case
    if (low >= high) {
      return;
    }
  
    const pivot = pivotIndex(array, low, high);
  
    // Sort the left side of the pivot
    quickSort(array, low, pivot - 1);
    
    // Sort the right side of the pivot
    quickSort(array, pivot + 1, high);
  }
  
  // Usage example
  const array = [5, 3, 2, 1, 4];
  console.log("Before sorting:", array); // Output the array before sorting
  quickSort(array);
  console.log("After sorting:", array); // Output the array after sorting
  // Expected Output: Before sorting: [5, 3, 2, 1, 4]
  //                  After sorting: [1, 2, 3, 4, 5]
  
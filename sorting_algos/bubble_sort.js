function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  // Logic to sort array using bubble sort

  // METHOD 1 :
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = i + 1; j < array.length; j++) {
  //       if (array[i] > array[j]) {
  //         // Swap the array
  //         let temp = array[i];
  //         array[i] = array[j];
  //         array[j] = temp;
  //       }
  //     }
  //   }

  // METHOD 2 :
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (i < array.length && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

// Usage
const array = [4, 5, 3, 2, 1];
console.log(array);
const sortedArray = bubbleSort(array);
console.log(sortedArray);

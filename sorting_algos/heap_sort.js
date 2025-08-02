function heapSort(arr) {
    const length = arr.length;

    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, i, length);
    }

    for (let i = length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyDown(arr, 0, i);
    }
}

function heapifyDown(arr, index, length) {
    let largest = index;
    let left = (2 * index) + 1;
    let right = (2 * index) + 2;

    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (index === largest) {
        return;
    } else {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapifyDown(arr, largest, length);
    }
}




const arr = [10, 2, 3, 4, 22, 13, 16, 28, 19, 16];
heapSort(arr);
console.log(arr);
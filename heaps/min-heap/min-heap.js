/**
 * A MinHeap is a special type of binary tree that satisfies the min-heap property.
 * The min-heap property states that for any given node I, if P(I) is the parent node of I, then the key (the value) of P(I) is either greater than or equal to the key of I.
 * The min-heap is a complete binary tree, meaning that every level is fully filled except for the last level which is filled from left to right.
 */
class MinHeap {
  /**
   * Initializes a new MinHeap with an empty array and a size of 0.
   * @constructor
   * @param {Function} [compareFn] The compare function used to compare two elements in the heap.
   *        The default compare function is (a, b) => a - b.
   */
  constructor(compareFn) {
    // For Min-Heap (this will be valid if a - b < 0)
    this.compareFn = compareFn || ((a, b) => a - b);
    this.minHeap = [];
  }

  /**
   * Returns the index of the parent node of the given index.
   * @param {number} index The index of the node for which the parent index is to be found.
   * @returns {number} The index of the parent node.
   */
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * Returns the index of the left child node of the given index.
   * @param {number} index The index of the node for which the left child index is to be found.
   * @returns {number} The index of the left child node.
   */
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  /**
   * Returns the index of the right child node of the given index.
   * @param {number} index The index of the node for which the right child index is to be found.
   * @returns {number} The index of the right child node.
   */
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  /**
   * Swaps the elements at the given indices in the heap.
   * @param {number} index1 The index of the first element to be swapped.
   * @param {number} index2 The index of the second element to be swapped.
   */
  swap(index1, index2) {
    [this.minHeap[index1], this.minHeap[index2]] = [
      this.minHeap[index2],
      this.minHeap[index1],
    ];
  }

  /**
   * Checks if a swap is needed between the given indices in the heap.
   * @param {number} parentIndex The index of the parent node.
   * @param {number} childIndex The index of the child node.
   * @returns {boolean} True if a swap is needed, false otherwise.
   */
  swapNeeded(parentIndex, childIndex) {
    return (
      this.compareFn(this.minHeap[parentIndex], this.minHeap[childIndex]) > 0
    );
  }

  /**
   * Returns the top element of the heap without removing it.
   * @returns {*} The top element of the heap.
   */
  peek() {
    return this.minHeap[0];
  }

  /**
   * Returns the size of the heap.
   * @returns {number} The size of the heap.
   */
  size() {
    return this.minHeap.length;
  }

  /**
   * Adds a new element to the heap.
   * @param {*} value The new element to be added to the heap.
   */
  enqueue(value) {
    this.minHeap.push(value);
    this.heapifyUp(this.size() - 1);
  }

  /**
   * Rebuilds the heap by comparing the given index with its parent node and swapping if needed.
   * @param {number} index The index of the node to start rebuilding from.
   */
  heapifyUp(index) {
    while (true) {
      let parentIndex = this.getParentIndex(index);
      if (index > 0 && this.swapNeeded(parentIndex, index)) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        return;
      }
    }
  }

  /**
   * Removes the top element of the heap and returns it.
   * @returns {*} The top element of the heap.
   */
  dequeue() {
    if (this.size() === 0) {
      return null;
    }

    const top = this.peek();
    this.swap(0, this.size() - 1);
    this.minHeap.pop();
    this.heapifyDown(0);
    return top;
  }

  /**
   * Rebuilds the heap by comparing the given index with its child nodes and swapping if needed.
   * @param {number} index The index of the node to start rebuilding from.
   */
  heapifyDown(index) {
    while (true) {
      let swapIndex = index;
      let leftChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);

      if (
        leftChildIndex < this.size() &&
        this.swapNeeded(swapIndex, leftChildIndex)
      ) {
        swapIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.size() &&
        this.swapNeeded(swapIndex, rightChildIndex)
      ) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex !== index) {
        this.swap(index, swapIndex);
        index = swapIndex;
      } else {
        return;
      }
    }
  }
}

// Usage
const minHeap = new MinHeap();
minHeap.enqueue(5);
minHeap.enqueue(3);
minHeap.enqueue(1);
minHeap.enqueue(4);
minHeap.enqueue(2);

console.log(minHeap.dequeue()); // 1
console.log(minHeap.dequeue()); // 2
console.log(minHeap.dequeue()); // 3
console.log(minHeap.dequeue()); // 4
console.log(minHeap.dequeue()); // 5

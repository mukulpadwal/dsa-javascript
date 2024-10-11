# MinHeap Class Documentation
=============================

## Overview

The `MinHeap` class is an implementation of a min-heap data structure, which is a special type of binary tree that satisfies the min-heap property. The min-heap property states that for any given node I, if P(I) is the parent node of I, then the key (the value) of P(I) is either greater than or equal to the key of I. The min-heap is a complete binary tree, meaning that every level is fully filled except for the last level which is filled from left to right.

## Constructor

* `constructor(compareFn)`: Initializes a new MinHeap with an empty array and a size of 0.

### Parameters

* `compareFn`: The compare function used to compare two elements in the heap. The default compare function is `(a, b) => a - b`.

## Methods

### `size()`

Returns the size of the heap.

#### Returns

* `number`: The size of the heap.

### `peek()`

Returns the top element of the heap without removing it.

#### Returns

* `*`: The top element of the heap.

### `enqueue(value)`

Adds a new element to the heap.

#### Parameters

* `value`: The new element to be added to the heap.

### `dequeue()`

Removes the top element of the heap and returns it.

#### Returns

* `*`: The top element of the heap.

### `getParentIndex(index)`

Returns the index of the parent node of the given index.

#### Parameters

* `index`: The index of the node for which the parent index is to be found.

#### Returns

* `number`: The index of the parent node.

### `getLeftChildIndex(index)`

Returns the index of the left child node of the given index.

#### Parameters

* `index`: The index of the node for which the left child index is to be found.

#### Returns

* `number`: The index of the left child node.

### `getRightChildIndex(index)`

Returns the index of the right child node of the given index.

#### Parameters

* `index`: The index of the node for which the right child index is to be found.

#### Returns

* `number`: The index of the right child node.

### `swap(index1, index2)`

Swaps the elements at the given indices in the heap.

#### Parameters

* `index1`: The index of the first element to be swapped.
* `index2`: The index of the second element to be swapped.

### `swapNeeded(parentIndex, childIndex)`

Checks if a swap is needed between the given indices in the heap.

#### Parameters

* `parentIndex`: The index of the parent node.
* `childIndex`: The index of the child node.

#### Returns

* `boolean`: True if a swap is needed, false otherwise.

### `heapifyUp(index)`

Rebuilds the heap by comparing the given index with its parent node and swapping if needed.

#### Parameters

* `index`: The index of the node to start rebuilding from.

### `heapifyDown(index)`

Rebuilds the heap by comparing the given index with its child nodes and swapping if needed.

#### Parameters

* `index`: The index of the node to start rebuilding from.

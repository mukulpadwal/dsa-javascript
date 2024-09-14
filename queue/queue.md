# Queue
================

A queue is a collection of elements that follows the First In First Out (FIFO) principle, meaning the first element added to the queue will be the first one to be removed. This class provides an implementation of a basic queue data structure.

## Methods

### 1. `enqueue(element)`

Adds an element to the end of the queue.

#### Parameters

* `element`: The element to be added to the queue.

#### Returns

* `undefined`

### 2. `dequeue()`

Removes and returns the front element from the queue. If the queue is empty, it returns "Queue is Empty!!!"

#### Returns

* The removed element from the queue or a message if the queue is empty.

### 3. `isEmpty()`

Checks if the queue is empty.

#### Returns

* `boolean`: True if the queue is empty, false otherwise.

### 4. `size()`

Returns the number of elements in the queue.

#### Returns

* `number`: The number of elements in the queue.

### 5. `peek()`

Returns the front element of the queue without removing it. If the queue is empty, it returns "Queue is Empty!!!"

#### Returns

* The front element of the queue or a message if the queue is empty.

### 6. `print()`

Returns a string representation of the elements in the queue.

#### Returns

* `string`: A string representation of the elements in the queue.

### 7. `contains(element)`

Checks if a specific element is present in the queue.

#### Parameters

* `element`: The element to check for in the queue.

#### Returns

* `boolean`: True if the element is present, false otherwise.

### 8. `reverse()`

Reverses the order of elements in the queue.

#### Returns

* `Array`: The reversed queue.

### 9. `clear()`

Clears all elements from the queue.

#### Returns

* `undefined`


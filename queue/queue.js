/**
 * Queue class that implements a queue data structure.
 * A queue follows the First In First Out (FIFO) principle.
 * This class provides methods to add, remove, check size, and other queue operations.
 */
class Queue {
  constructor() {
    this.queue = [];
  }

  /**
   * Method to add elements to the queue.
   * @param {any} element - The element to be added to the queue.
   */
  enqueue(element) {
    this.queue.push(element);
  }

  /**
   * Method to remove elements from the queue.
   * @returns {any} The removed element from the queue or a message if the queue is empty.
   */
  dequeue() {
    // Case 1: if the queue is already empty
    if (this.isEmpty()) {
      return "Queue is Empty!!!";
    }

    return this.queue.shift();
  }

  /**
   * Method to check if the queue is empty.
   * @returns {boolean} True if the queue is empty, false otherwise.
   */
  isEmpty() {
    return this.queue.length === 0;
  }

  /**
   * Method to return the length of the queue.
   * @returns {number} The number of elements in the queue.
   */
  size() {
    return this.queue.length;
  }

  /**
   * Method to peek at the current front element of the queue without removing it.
   * @returns {any} The front element of the queue or a message if the queue is empty.
   */
  peek() {
    // Case 1: if the queue is empty
    if (this.isEmpty()) {
      return "Queue is Empty!!!";
    }

    return this.queue[0];
  }

  /**
   * Method to traverse and print all elements in the queue.
   * @returns {string} A string representation of the elements in the queue.
   */
  print() {
    const output = [];
    for (const element of this.queue) {
      output.push(element);
    }

    return output.join(" ");
  }

  /**
   * Method to check if an element is present in the queue.
   * @param {any} element - The element to check for in the queue.
   * @returns {boolean} True if the element is present, false otherwise.
   */
  contains(element) {
    return this.queue.includes(element);
  }

  /**
   * Method to reverse the order of elements in the queue.
   * @returns {Array} The reversed queue.
   */
  reverse() {
    return this.queue.reverse();
  }

  /**
   * Method to clear all elements from the queue.
   */
  clear() {
    this.queue = [];
  }
}

// Example usage of the Queue class
const queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.isEmpty()); // false
console.log(queue.print()); // 1 2 3

console.log(queue.dequeue()); // 1
console.log(queue.print()); // 2 3

console.log(queue.peek()); // 2

console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // Queue is Empty!!!

class Stack {
  /**
   * Initializes an empty stack.
   */
  constructor() {
    this.stack = [];
  }

  /**
   * Method to add elements to the stack.
   * @param {any} element - The element to be added to the stack.
   */
  push(element) {
    this.stack.push(element);
  }

  /**
   * Method to remove elements from the stack.
   * @returns {any} The removed element from the stack or a message if the stack is empty.
   */
  pop() {
    // Case 1 : if the stack is empty
    if (this.isEmpty()) {
      return "Stack is empty!!!";
    }

    return this.stack.pop();
  }

  /**
   * Method to check if the stack is empty.
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty() {
    return this.stack.length === 0;
  }

  /**
   * Method to peek at the current top element of the stack without removing it.
   * @returns {any} The top element of the stack or a message if the stack is empty.
   */
  peek() {
    // Case 1 : if the stack is empty
    if (this.isEmpty()) {
      return "Stack is empty!!!";
    }
    return this.stack[this.size() - 1];
  }

  /**
   * Method to return the length of the stack.
   * @returns {number} The number of elements in the stack.
   */
  size() {
    return this.stack.length;
  }

  /**
   * Method to traverse and print all elements in the stack.
   * @returns {string} A string representation of the elements in the stack.
   */
  print() {
    const output = [];

    for (const element of this.stack) {
      output.push(element);
    }

    return output.join(" ");
  }

  /**
   * Method to clear all elements from the stack.
   */
  clear() {
    this.stack = [];
  }

  /**
   * Method to reverse the order of elements in the stack.
   * @returns {Stack} The reversed stack.
   */
  reverse() {
    return this.stack.reverse();
  }

  /**
   * Method to check if an element is present in the stack.
   * @param {any} element - The element to check for in the stack.
   * @returns {boolean} True if the element is present, false otherwise.
   */
  contains(element) {
    return this.stack.includes(element);
  }
}

// Example usage:

// An empty stack will be initialized
const stack = new Stack();
console.log(stack.isEmpty()); // true, since the stack is initially empty

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.isEmpty()); // false, since elements have been added to the stack
console.log(stack.print()); // 1 2 3, the current elements in the stack

console.log(stack.pop()); // 3, removes and returns the top element
console.log(stack.print()); // 1 2, the current elements after popping the top element

console.log(stack.peek()); // 2, returns the current top element without removing it

stack.reverse();
console.log(stack.print()); // 2 1, the elements in the stack are now reversed

stack.push(3);

console.log(stack.print()); // 2 1 3, the current elements in the stack after adding 3

stack.clear(); // clears the stack
console.log(stack.pop()); // Stack is empty!!!, since the stack has been cleared
console.log(stack.print()); // empty string, since the stack is empty

console.log(stack.contains(9)); // false, 9 is not present in the stack

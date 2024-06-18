class Stack {
  constructor() {
    this.stack = [];
  }

  // Method to insert elements in stack
  // This method takes an element as an argument and adds it to the top of the stack.
  push(element) {
    this.stack.push(element);
  }

  // Method to remove elements from stack
  // This method removes and returns the top element of the stack.
  // If the stack is empty, it returns a message indicating that the stack is empty.
  pop() {
    // Check 1 : if the stack is already empty
    if (this.isEmpty()) {
      return "Stack is empty!!!";
    }

    return this.stack.pop();
  }

  // Method to check if stack is empty or not
  // This method returns true if the stack is empty, otherwise false.
  isEmpty() {
    return this.stack.length === 0;
  }

  // Method to peek the current top element in the stack
  // This method returns the top element of the stack without removing it.
  // If the stack is empty, it returns a message indicating that the stack is empty.
  peek() {
    // Case 1 : if the stack is empty
    if (this.isEmpty()) {
      return "Stack is empty!!!";
    }
    return this.stack[this.size() - 1];
  }

  // Method to check the length of stack
  // This method returns the number of elements in the stack.
  size() {
    return this.stack.length;
  }

  // Method to traverse the entire stack
  // This method returns a string representation of all elements in the stack, separated by spaces.
  print() {
    const output = [];

    for (const element of this.stack) {
      output.push(element);
    }

    return output.join(" ");
  }

  // Method to clear the stack
  // This method removes all elements from the stack, leaving it empty.
  clear() {
    this.stack = [];
  }

  // Method to reverse the stack
  // This method reverses the order of elements in the stack.
  reverse() {
    return this.stack.reverse();
  }

  // Method to check if an element is present in stack or not
  // This method takes an element as an argument and returns true if the element is in the stack, otherwise false.
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

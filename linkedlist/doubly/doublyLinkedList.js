class Node {
  /**
   * Initializes a new Node with the given data and next/prev node.
   * @param {*} data - The data to be stored in the node.
   * @param {Node} [next=null] - The next node in the doubly linked list.
   * @param {Node} [prev=null] - The previous node in the doubly linked list.
   */
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  /**
   * Initializes a new DoublyLinkedList with no nodes.
   * @constructor
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

/**
 * Inserts a new node at the beginning of the doubly linked list.
 * @function insertAtBeginning
 * @param {*} data - The data to be stored in the new node.
 * @returns nothing
 * @description
 * 1. Create a new node with the given data and the current head as the next node.
 * 2. If the head is not null, set the prev of the head to the new node.
 * 3. Set the head to the new node.
 * 4. If the tail is null, set the tail to the new node.
 */
DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  // Step 1 : Create a new node
  let newNode = new Node(data, this.head, null);

  // Step 2 : insert at beginning
  if (this.head !== null) {
    this.head.prev = newNode;
  }

  this.head = newNode;

  // Step 3 : check if the linked list is empty
  if (this.tail === null) {
    this.tail = newNode;
  }
};

/**
 * Inserts a new node at the end of the doubly linked list.
 * @function insertAtEnd
 * @param {*} data - The data to be stored in the new node.
 * @returns nothing
 * @description
 * 1. Create a new node with the given data and the current tail as the prev node.
 * 2. Check if the tail is not null and set the next of the tail to the new node.
 * 3. Set the tail to the new node.
 * 4. If the head is null, set the head to the new node.
 */
DoublyLinkedList.prototype.insertAtEnd = function (data) {
  // Step 1 : create a new node
  let newNode = new Node(data, null, this.tail);

  // Step 2 : Check if the tail is not null
  if (this.tail !== null) {
    this.tail.next = newNode;
  }

  // Step 3 : if the list is empty
  this.tail = newNode;
  if (this.head === null) {
    this.head = newNode;
  }
};

/**
 * Inserts a new node after a given node in the doubly linked list.
 * @function insertAfter
 * @param {Node} node - The node after which the new node is to be inserted.
 * @param {*} data - The data to be stored in the new node.
 * @returns nothing
 * @description
 * 1. Create a new node with the given data and the current tail as the prev node.
 * 2. Check if the element to insert after is the last element and set the tail to the new node.
 * 3. Insert between two elements by setting the prev of the next node to the new node and the next of the given node to the new node.
 */
DoublyLinkedList.prototype.insertAfter = function (node, data) {
  if (node === null) {
    console.log("Invalid Node");
    return;
  }

  // Step 1 : create a new node
  let newNode = new Node(data, node.next, node);

  // Step 2 : Check if the element to insert after is the last element
  if (node.next === null) {
    node.next = newNode;
    this.tail = newNode;
    return;
  }

  // Step 3 : insert between two elements
  if (node.next !== null) {
    node.next.prev = newNode;
    node.next = newNode;
  }
};

/**
 * Deletes the first node of the doubly linked list.
 * @function deleteFirst
 * @returns nothing
 * @description
 * 1. Check if the list is empty.
 * 2. If the list has only one element, point head and tail to null.
 * 3. If the list has more than one element, point head to the next node and set prev of the new head to null.
 */
DoublyLinkedList.prototype.deleteFirst = function () {
  // Case 1 : if the list is empty
  if (this.head === null) {
    console.log("List is empty...");
    return;
  }

  // Case 2 : Only one element is present in list
  if (this.head.next === null) {
    this.head = null;
    this.tail = null;
    return;
  }

  // Case 3 : we have a proper list
  this.head = this.head.next;
  this.head.prev = null;
};

/**
 * Deletes the last node of the doubly linked list.
 * @function deleteLast
 * @returns nothing
 * @description
 * 1. Check if the list is empty.
 * 2. If the list has only one element, point head and tail to null.
 * 3. If the list has more than one element, point tail to the second last node, set the next of the second last node to null and the prev of the new tail to null.
 */
DoublyLinkedList.prototype.deleteLast = function () {
  // Case 1 : if the list is empty
  if (this.tail === null) {
    return;
  }

  // Case 2 : if there is only one node
  if (this.tail === this.head) {
    this.tail = null;
    this.head = null;
  }

  // Case 3 : if there is a proper list
  this.tail = this.tail.prev;
  this.tail.next = null;
};

/**
 * Reverses the doubly linked list.
 * @function reverse
 * @returns nothing
 * @description
 * 1. Traverse the list, keeping track of the previous node.
 * 2. Reverse the next and prev pointers of each node.
 * 3. Set head to the new first node and tail to the new last node.
 */
DoublyLinkedList.prototype.reverse = function () {
  let current = this.head;
  let temp = null;

  while (current) {
    temp = current.prev;
    current.prev = current.next;
    current.next = prev;
    current = current.prev;
  }

  if (temp.prev !== null) {
    this.tail = this.head;
    this.head = temp.prev;
  }
};

/**
 * Prints the doubly linked list in the format "node1 = node2 = ... = nodeN"
 * @function print
 * @returns {string} - A string representation of the doubly linked list
 * @description
 * 1. Traverse the list, keeping track of the current node.
 * 2. Add the data of each node to an array.
 * 3. Join the array with " = " and return the string representation of the linked list.
 */
DoublyLinkedList.prototype.print = function () {
  let current = this.head;
  let answer = [];

  if (current === null) {
    return answer;
  }

  while (current) {
    answer.push(current.data);
    current = current.next;
  }

  return answer.join(" = ");
};

/**
 * Searches the doubly linked list for a node with a given key and returns the node if found, null otherwise.
 * @function searchWithKey
 * @param {*} key - The key to be searched in the list
 * @returns {Node|null} - The node containing the key if found, null otherwise
 * @description
 * 1. Check if the list is empty.
 * 2. Traverse the list, keeping track of the current node.
 * 3. If the data of the current node matches the given key, return the node.
 * 4. If the list is fully traversed and no node matches the given key, return null.
 */
DoublyLinkedList.prototype.searchWithKey = function (key) {
  if (this.head === null) {
    return null;
  }

  let current = this.head;

  while (current) {
    if (current.data === key) {
      return current;
    }
    current = current.next;
  }

  return null;
};

/**
 * Usage
 */
console.log("Doubly Linked List Usage");
let dll = new DoublyLinkedList();
console.log(`Empty Doubly Linked List: ${dll.print()}`);

console.log("Inserting at the beginning");
dll.insertAtBeginning(1);
console.log(`After inserting 1: ${dll.print()}`);
dll.insertAtBeginning(2);
console.log(`After inserting 2: ${dll.print()}`);

console.log("Inserting at the end");
dll.insertAtEnd(3);
dll.insertAtEnd(6);
dll.insertAtEnd(9);
console.log(`After inserting 3, 6 and 9: ${dll.print()}`);

console.log("Inserting after a given node");
dll.insertAfter(dll.searchWithKey(1), 8);
console.log(`After inserting 8 after 1: ${dll.print()}`);

console.log("Deleting the first node");
dll.deleteFirst();
console.log(`After deleting the first node: ${dll.print()}`);

console.log("Deleting the last node");
dll.deleteLast();
console.log(`After deleting the last node: ${dll.print()}`);

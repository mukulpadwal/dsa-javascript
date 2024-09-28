class Node {
  /**
   * Initializes a new Node with the given data and next node.
   * @param {*} data - The data to be stored in the node.
   * @param {Node} [next=null] - The next node in the linked list.
   */
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  /**
   * Initializes a new LinkedList with no nodes.
   * @constructor
   */
  constructor() {
    this.head = null;
  }
}

/**
 * Inserts a new node at the beginning of the linked list
 * @function insertAtBeginning
 * @param {*} data - The data to be stored in the new node
 * @returns nothing
 */
LinkedList.prototype.insertAtBeginning = function (data) {
  // Step 1 : Create a new Node
  let newNode = new Node(data);

  // Step 2 : check if the list is empty or not
  if (!this.head) {
    this.head = newNode;
    return;
  }
  
  // Step 3 : point head to new node
  newNode.next = this.head;
  this.head = newNode;
};

/**
 * Inserts a new node at the end of the linked list
 * @function insertAtEnd
 * @param {*} data - The data to be stored in the new node
 * @returns nothing
 */
LinkedList.prototype.insertAtEnd = function (data) {
  // Step 1 : Create a new Node
  let newNode = new Node(data);

  // Step 2 : check if the list is empty or not
  if (!this.head) {
    this.head = newNode;
    return;
  }

  // Step 3 : point tail to new node
  let tail = this.head;
  while (tail.next) {
    tail = tail.next;
  }
  tail.next = newNode;
};


  /**
   * Inserts a new node after a given node in the linked list
   * @function insertAfter
   * @param {Node} prevNode - The node after which the new node is to be inserted.
   * @param {*} data - The data to be stored in the new node.
   * @returns nothing
   * @throws {Error} - If the prevNode is null.
   */
LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (prevNode == null) {
    console.log(`prevNode cannot be null.`);
    return;
  }

  let newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};


  /**
   * Deletes the first node of the linked list
   * @function deleteFirst
   * @returns nothing
   */
LinkedList.prototype.deleteFirst = function () {
  // Step 1 : check if the list is empty
  if (!this.head) {
    return;
  }

  // Step 2 : move head to next position
  this.head = this.head.next;
};


  /**
   * Deletes the last node of the linked list
   * @function deleteLast
   * @returns nothing
   */
LinkedList.prototype.deleteLast = function () {
  // Step 1 : check if the list is empty
  if (!this.head) {
    return;
  }

  // Step 2 : if list has only one element
  if (!this.head.next) {
    this.head = null;
    return;
  }

  // Step 3 : find the second last element
  let secondLast = this.head;

  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }

  // Step 4 : point the secondLast node to null
  secondLast.next = null;
};


  /**
   * Deletes the node containing a given key from the linked list.
   * @function deleteWithGivenKey
   * @param {*} key - The key to be searched in the list
   * @returns nothing
   */
LinkedList.prototype.deleteWithGivenKey = function (key) {
  // Step 1 : if the list is empty
  if (!this.head) {
    console.log(`List already empty...`);
    return;
  }

  // Step 2 : if the key is present at first element
  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }

  let curr = this.head;

  while (curr.next !== null) {
    if (curr.next.data === key) {
      curr.next = curr.next.next;
      return;
    }
    curr = curr.next;
  }

  console.log(`No node with the given key is present in the list.`);
};


/**
 * Finds a node containing a given key in the linked list
 * @function findWithGivenKey
 * @param {*} key - The key to be searched in the list
 * @returns {Node|null} - The node containing the key if found, null otherwise
 */
LinkedList.prototype.findWithGivenKey = function (key) {
  let curr = this.head;

  while (curr) {
    if (curr.data === key) {
      return curr;
    }
    curr = curr.next;
  }

  return null;
};


/**
 * Traverses the linked list and returns a string representation
 * of the list, with '->' separating each element.
 * @function traverse
 * @returns {string} - A string representation of the linked list
 */
LinkedList.prototype.traverse = function () {
  let output = [];

  if (this.head === null) {
    return output;
  }

  // let curr = this.head;
  // while(curr){
  //     output.push(curr.data);
  //     curr = curr.next;
  // }

  for (let curr = this.head; curr !== null; curr = curr.next) {
    output.push(curr.data);
  }

  return output.join(" -> ");
};


/**
 * Reverses the linked list
 * @function reverse
 * @returns nothing
 */
LinkedList.prototype.reverse = function () {
  // helper nodes
  let curr = this.head;
  let prev = null;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  this.head = prev;
};

// Usage
let linkedList = new LinkedList();

// Case 1 : Linked list is empty
console.log(linkedList.traverse());

// Case 2 : Inserting at the beginning
linkedList.insertAtBeginning(1);
console.log(linkedList.traverse());

linkedList.insertAtBeginning(2);
console.log(linkedList.traverse());

// Case 3 : Inserting at the end
linkedList.insertAtEnd(3);
linkedList.insertAtEnd(4);
console.log(linkedList.traverse());

// Case 4 : Inserting after a given node
linkedList.insertAfter(linkedList.head, 69);
console.log(linkedList.traverse());

// Case 5 : Deleting a node with a given key
linkedList.deleteWithGivenKey(69);
console.log(linkedList.traverse());

// Case 6 : Finding a node with a given key
let desiredNode = linkedList.findWithGivenKey(3);
linkedList.insertAfter(desiredNode, 9);
console.log(linkedList.traverse());

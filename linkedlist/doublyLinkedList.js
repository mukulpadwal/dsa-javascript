class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

// Insert element at the beginning
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

// Insert element at the end
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

// Insert after a particular node
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


// Delete first element
DoublyLinkedList.prototype.deleteFirst = function () {
    // Case 1 : if the list is empty
    if(this.head === null){
        console.log("List is empty...");
        return;
    }

    // Case 2 : Only one element is present in list
    if(this.head.next === null){
        this.head = null;
        this.tail = null;
        return;
    }

    // Case 3 : we have a proper list
    this.head = this.head.next;
    this.head.prev = null;
}


// Delete last element
DoublyLinkedList.prototype.deleteLast = function () {
    // Case 1 : if the list is empty
    if(this.tail === null){
        return;
    }


    // Case 2 : if there is only one node
    if(this.tail === this.head){
        this.tail = null;
        this.head = null;
    }

    // Case 3 : if there is a proper list
    this.tail = this.tail.prev;
    this.tail.next = null;
}


// Reverse a doubly linked list
DoublyLinkedList.prototype.reverse = function () {
    let current = this.head;
    let temp = null;

    while(current){
        temp = current.prev;
        current.prev = current.next;
        current.next = prev;
        current = current.prev;
    }

    if(temp !== null){
        this.tail = this.head;
        this.head = temp.prev;
    }
}
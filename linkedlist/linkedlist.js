class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}


// Insert Data at the beginning
LinkedList.prototype.insertAtBeginning = function (data) {
    // Step 1 : Create a new Node
    let newNode = new Node(data);

    // Step 2 : point the head to this node
    if(this.head === null){
        this.head = newNode;
        return;
    }

    let newHead = newNode;
    newHead.next = this.head;
    this.head = newHead;
}


// Insert data at the end
LinkedList.prototype.insertAtEnd = function (data) {
    // Step 1 : Create a new Node
    let newNode = new Node(data);

    // Step 2 : check if the list is empty or not
    if(!this.head){
        this.head = newNode;
        return;
    }

    // Step 3 : point tail to head
    let tail = this.head;

    while(tail.next != null){
        tail = tail.next;
    }

    // Step 4 : point tail to new node
    tail.next = newNode;
}


// Insert after a given node 
LinkedList.prototype.insertAfter = function (prevNode, data){
    if(prevNode == null){
        console.log(`prevNode cannot be null.`);
        return;
    }

    let newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
}


// Delete first node
LinkedList.prototype.deleteFirst = function () {
    // Step 1 : check if the list is empty
    if(!this.head){
        return;
    }

    // Step 2 : move head to next position
    this.head = this.head.next;
}


// Delete last node
LinkedList.prototype.deleteLast = function (){
    // Step 1 : check if the list is empty
    if(!this.head){
        return;
    }

    // Step 2 : if list has only one element
    if(!this.head.next){
        this.head = null;
        return;
    }

    // Step 3 : find the second last element
    let secondLast = this.head;

    while(secondLast.next.next){
        secondLast = secondLast.next;
    }

    // Step 4 : point the secondLast node to null
    secondLast.next = null;
}


// Delete a node with given key
LinkedList.prototype.deleteWithGivenKey = function (key){
    // Step 1 : if the list is empty
    if(!this.head){
        console.log(`List already empty...`);
        return;
    }

    // Step 2 : if the key is present at first element
    if(this.head.data === key){
        this.head = this.head.next;
        return;
    }

    let curr = this.head;

    while(curr.next !== null){
        if(curr.next.data === key){
            curr.next = curr.next.next;
            return;
        }
        curr = curr.next;
    }

    console.log(`No node with the given key is present in the list.`);
}

// Search an element with given key
LinkedList.prototype.findWithGivenKey = function (key) {
    let curr = this.head;

    while(curr){
        if(curr.data === key){
            return curr;
        }
        curr = curr.next;
    }

    return null;
}


// Traverse through linked list
LinkedList.prototype.traverse = function () {
    let output = [];

    if(this.head === null){
        return output;
    }

    // let curr = this.head;
    // while(curr){
    //     output.push(curr.data);
    //     curr = curr.next;
    // }

    for(let curr = this.head; curr !== null; curr=curr.next){
        output.push(curr.data);
    }

    return output.join(" -> ");
}

// Reverse a linked list
LinkedList.prototype.reverse = function (){
    // helper nodes
    let curr = this.head;
    let prev = null;
    let next = null;

    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    this.head = prev;
}



// Usage
let linkedList = new LinkedList();
console.log(linkedList.traverse());
linkedList.insertAtBeginning(1);
console.log(linkedList.traverse());
linkedList.insertAtBeginning(2);
console.log(linkedList.traverse());
linkedList.insertAtEnd(3);
linkedList.insertAtEnd(4);
console.log(linkedList.traverse());
linkedList.insertAfter(linkedList.head, 69);
console.log(linkedList.traverse());

linkedList.deleteWithGivenKey(69);
console.log(linkedList.traverse());

let desiredNode = linkedList.findWithGivenKey(3);
linkedList.insertAfter(desiredNode , 9);
console.log(linkedList.traverse());

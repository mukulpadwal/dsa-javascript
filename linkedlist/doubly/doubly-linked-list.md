# Doubly Linked List Algorithms
==============================

## 1. `insertAtBeginning(data)`

Inserts a new node at the beginning of the doubly linked list.

#### Step-by-Step

1. Create a new Node with the given `data`.
2. Check if the list is empty.
    * If yes, set `head` to the new Node and set `prev` of the new Node to `null`.
    * If no, set `next` of the new Node to the current `head` and set `prev` of the current `head` to the new Node.
3. Set `head` to the new Node.

## 2. `insertAtEnd(data)`

Inserts a new node at the end of the doubly linked list.

#### Step-by-Step

1. Create a new Node with the given `data`.
2. Check if the list is empty.
    * If yes, set `head` to the new Node and set `prev` of the new Node to `null`.
    * If no, traverse the list to find the last Node.
        + Set `next` of the last Node to the new Node.
        + Set `prev` of the new Node to the last Node.

## 3. `deleteFirst()`

Deletes the first node of the doubly linked list.

#### Step-by-Step

1. Check if the list is empty.
    * If yes, return.
2. Set `head` to the next Node of the current `head` and set `prev` of the new `head` to `null`.

## 4. `deleteLast()`

Deletes the last node of the doubly linked list.

#### Step-by-Step

1. Check if the list is empty.
    * If yes, return.
2. If the list has only one element, set `head` to `null`.
3. Traverse the list to find the second last Node.
    * Set `next` of the second last Node to `null`.

## 5. `deleteWithGivenKey(key)`

Deletes the node containing a given `key` from the doubly linked list.

#### Step-by-Step

1. Check if the list is empty.
    * If yes, return.
2. If the `key` is present at first element, set `head` to the next Node of the current `head` and set `prev` of the new `head` to `null`.
3. Traverse the list to find the Node containing the `key`.
    * If found, set `next` of the previous Node to the next Node of the current Node and set `prev` of the next Node of the current Node to the previous Node.
    * If not found, return.

## 6. `reverse()`

Reverses the doubly linked list.

#### Step-by-Step

1. Initialize three pointers: `curr`, `prev`, and `next`.
2. Traverse the list, keeping track of the previous Node.
3. Reverse the `next` and `prev` pointers of each Node.
4. Set `head` to the new first Node.

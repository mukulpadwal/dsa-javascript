# Singly Linked List Algorithms
==============================

## 1. `insertAtBeginning(data)`

Inserts a new node at the beginning of the linked list.

#### Step-by-Step

1. Create a new Node with the given `data`.
2. Check if the list is empty.
	* If yes, set `head` to the new Node.
	* If no, set `next` of the new Node to the current `head`.
3. Set `head` to the new Node.

![Insert at beginning diagram](./insert-at-beginning-diagram.png)

## 2. `insertAtEnd(data)`

Inserts a new node at the end of the linked list.

#### Step-by-Step

1. Create a new Node with the given `data`.
2. Check if the list is empty.
	* If yes, set `head` to the new Node.
	* If no, traverse the list to find the last Node.
		+ Set `next` of the last Node to the new Node.

![Insert at end diagram](./insert-at-end-diagram.png)

## 3. `deleteFirst()`

Deletes the first node of the linked list.

#### Step-by-Step

1. Check if the list is empty.
	* If yes, return.
2. Set `head` to the next Node of the current `head`.

![Delete first diagram](./delete-first-diagram.png)

## 4. `deleteLast()`

Deletes the last node of the linked list.

#### Step-by-Step

1. Check if the list is empty.
	* If yes, return.
2. If the list has only one element, set `head` to `null`.
3. Traverse the list to find the second last Node.
	* Set `next` of the second last Node to `null`.

![Delete last diagram](./delete-last-diagram.png)

## 5. `deleteWithGivenKey(key)`

Deletes the node containing a given `key` from the linked list.

#### Step-by-Step

1. Check if the list is empty.
	* If yes, return.
2. If the `key` is present at first element, set `head` to the next Node of the current `head`.
3. Traverse the list to find the Node containing the `key`.
	* If found, set `next` of the previous Node to the next Node of the current Node.
	* If not found, return.

![Delete with given key diagram](./delete-with-given-key-diagram.png)

## 6. `reverse()`

Reverses the linked list.

#### Step-by-Step

1. Initialize three pointers: `curr`, `prev`, and `next`.
2. Traverse the list, keeping track of the previous Node.
3. Reverse the `next` pointers of each Node.
4. Set `head` to the new first Node.

![Reverse diagram](./reverse-diagram.png)

## 7. `traverse()`

Traverses the linked list and returns a string representation of the list, with '->' separating each element.

#### Step-by-Step

1. Create an array to store the elements of the list.
2. Traverse the list, adding each element to the array.
3. Join the array with '->' to create the string representation.

![Traverse diagram](./traverse-diagram.png)

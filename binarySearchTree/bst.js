import {
  depthFirstTraversalIterative,
  depthFirstTraversalRecursive,
} from "./dft.js";
import {
  breadthFirstTraversalIterative,
  breadthFirstTraversalRecursive,
} from "./bft.js";
import { treeSumBFS, treeSumDFS } from "../problems/treesum/treeSum.js";

class BSTNode {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * function to insert a new node
   * @function insert
   * @augment key
   * @returns nothing
   */
  insert(key) {
    // Step 1 : create a new node
    let newNode = new BSTNode(key);

    if (this.root === null) {
      this.root = newNode;
      return;
    } else {
      this.#insertNode(this.root, newNode);
      return;
    }
  }

  /**
   * function to insert a new node
   * @function insertNode
   * @augments node: BSTNode, newNode: BSTNode
   * @returns nothing
   */
  #insertNode(node, newNode) {
    // If newNode.key < node.key
    // We need to move to left
    if (newNode.key < node.key) {
      // If the left of node is null
      if (node.left === null) {
        node.left = newNode;
        return;
      } else {
        this.#insertNode(node.left, newNode);
      }
    } else if (newNode.key > node.key) {
      // If the righy of node is null
      if (node.right === null) {
        node.right = newNode;
        return;
      } else {
        this.#insertNode(node.right, newNode);
      }
    }
  }

  /**
   * function to insert a new node
   * @function delete
   * @augment key
   * @returns BSTNode
   */
  delete(key) {
    this.root = this.#deleteNode(this.root, key);
  }

  /**
   * function to delete a new node
   * @function deleteNode
   * @augments node: BSTNode, key
   * @returns BSTNode
   */
  #deleteNode(node, key) {
    // if node is empty
    if (this.root === null) {
      console.log("Tree is empty");
      return null;
    }

    // Lets us find the node to delete
    if (key < node.key) {
      // We need to move to left side of the tree
      node.left = this.#deleteNode(node.left, key);
    } else if (key > node.key) {
      // We need to move to right side of the tree
      node.right = this.#deleteNode(node.right, key);
    } else {
      // We got the key
      // CASE 1 : the node is a leaf node
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        // inordersuccessor
        let tempNode = this.#inOrderSuccessor(node.right);
        node.key = tempNode.key;
        node.right = this.#deleteNode(node.right, tempNode.key);
      }
    }

    return node;
  }

  /**
   * function to return minimum most key in right subtree
   * @function #inOrderSuccessor
   * @augments node: BSTNode
   * @returns BSTNode
   */
  #inOrderSuccessor(node) {
    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }

  /**
   * function to tarverse the tree in inorder fashion (LNR)
   * @function inOrderTraversal
   * @returns output: array
   */
  inOrderTraversal() {
    let output = [];
    this.#inOrder(this.root, output);
    return output;
  }

  /**
   * function to tarverse the tree in inorder fashion (LNR)
   * @function inOrder
   * @argument node -> BSTNode, output -> array
   * @returns nothing
   */
  #inOrder(node, output) {
    // Base Case
    if (node === null) {
      return;
    }

    // Go to the left side (traverse to left)
    this.#inOrder(node.left, output);

    // Now we will include the node value in our array
    output.push(node.key);

    // Go to the right side (traverse to right)
    this.#inOrder(node.right, output);
  }

  /**
   * function to tarverse the tree in preorder fashion (NLR)
   * @function preOrderTraversal
   * @returns output: array
   */
  preOrderTraversal() {
    let output = [];
    this.#preOrder(this.root, output);
    return output;
  }

  /**
   * function to tarverse the tree in inorder fashion (NLR)
   * @function preOrder
   * @argument node -> BSTNode, output -> array
   * @returns nothing
   */
  #preOrder(node, output) {
    // Base Case
    if (node === null) {
      return;
    }

    // Let's include the node value in output
    output.push(node.key);

    // Let's traverse towards left tree
    this.#preOrder(node.left, output);

    // Let's traverse towards right tree
    this.#preOrder(node.right, output);
  }

  /**
   * function to tarverse the tree in preorder fashion (LRN)
   * @function postOrderTraversal
   * @returns output: array
   */
  postOrderTraversal() {
    let output = [];
    this.#postOrder(this.root, output);
    return output;
  }

  /**
   * function to tarverse the tree in inorder fashion (LRN)
   * @function postOrder
   * @argument node -> BSTNode, output -> array
   * @returns nothing
   */
  #postOrder(node, output) {
    // Base Case
    if (node === null) {
      return;
    }

    // Let's traverse towards left tree
    this.#postOrder(node.left, output);

    // Let's traverse towards right tree
    this.#postOrder(node.right, output);

    // Let's include the node value in output
    output.push(node.key);
  }

  // depthFirstTraversalIterative1(node){
  //   if(node == null){
  //     return [];
  //   }

  //   let output = [];
  //   let stack = [node];

  //   while(stack.length !== 0){
  //     let currentNode = stack.pop();
  //     output.push(currentNode.key);

  //     if(currentNode.right !== null){
  //       stack.push(currentNode.right);
  //     }

  //     if(currentNode.left !== null){
  //       stack.push(currentNode.left);
  //     }
  //   }

  //   return output;
  // }
}

// Usage
let tree = new BinarySearchTree();
tree.insert(15);
tree.insert(13);
tree.insert(17);
tree.insert(12);
tree.insert(14);
tree.insert(16);
tree.insert(18);

// console.log(tree.inOrderTraversal());
// console.log(tree.postOrderTraversal());
// console.log(tree.preOrderTraversal());

// tree.delete(15);
// console.log(tree.inOrderTraversal());

console.log(depthFirstTraversalIterative(tree.root));
// console.log(depthFirstTraversalRecursive(tree.root, []));

// console.log(breadthFirstTraversalIterative(tree.root));
// console.log(breadthFirstTraversalRecursive(tree.root, [], [tree.root]));

// console.log(treeSumBFS(tree.root))
// console.log(treeSumDFS(tree.root))

// import Stack from "../stack/index.js";

// Depth First Traversal

// Reference
// class Node {
//   constructor(key, left = null, right = null) {
//     this.key = key;
//     this.left = left;
//     this.right = right;
//   }
// }

export const depthFirstTraversalIterative = function (node) {
  // If our node is empty
  if (node === null) {
    console.log("Node is null");
    return []; // return depends on the question asked
  }

  // we need one array to store keys
  // we need one stack to keep track
  let output = [];
  //   let stack = new Stack();
  //   stack.push(node);
  let stack = [node];

  while (!(stack.length === 0)) {
    let currentNode = stack.pop();
    output.push(currentNode.key);

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }

    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
  }

  return output;
};

export const depthFirstTraversalRecursive = function (node, output) {
  // Base Case
  if (node === null) {
    return output;
  }

  let currentNodeValue = node.key;

  output.push(currentNodeValue);

  // Keep going Left
  depthFirstTraversalRecursive(node.left, output);
  // Go to right
  depthFirstTraversalRecursive(node.right, output);

  return output;
};

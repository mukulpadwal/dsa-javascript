// Breadth First Traversal (Level Sabke Niklenge Par niklenge uske jo queue mei khada rahega)

// Reference
// class Node {
//   constructor(key, left = null, right = null) {
//     this.key = key;
//     this.left = left;
//     this.right = right;
//   }
// }

export const breadthFirstTraversalIterative = function (node) {
  if (node === null) {
    return [];
  }

  let output = [];
  let queue = [node];

  while (queue.length !== 0) {
    let currentNode = queue.shift();
    output.push(currentNode.key);

    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }

  return output;
};

export const breadthFirstTraversalRecursive = function (node, output, queue) {
  // Base Case
  if (node === null) {
    return output;
  }

  while (queue.length !== 0) {
    let currentNode = queue.shift();
    output.push(currentNode.key);
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }

  breadthFirstTraversalRecursive(node.left, output, queue);
  breadthFirstTraversalRecursive(node.right, output, queue);

  return output;
};

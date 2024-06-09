// Method 1 : Breadth First Search

export function treeSumBFS(node) {
  // Edge Case
  if (node === null) {
    return 0;
  }

  let sum = 0;
  let queue = [node];

  while (queue.length !== 0) {
    let currNode = queue.shift();
    sum += currNode.key;

    if (currNode.left !== null) {
      queue.push(currNode.left);
    }

    if (currNode.right !== null) {
      queue.push(currNode.right);
    }
  }

  return sum;
}

// Method 2 : Depth First Search
export function treeSumDFS(node) {
  if (node === null) {
    return 0;
  }

  let sum = 0;
  let stack = [node];

  while (stack.length !== 0) {
    let currNode = stack.pop();
    sum += currNode.key;

    if (currNode.right !== null) {
      stack.push(currNode.right);
    }

    if (currNode.left !== null) {
      stack.push(currNode.left);
    }
  }

  return sum;
}

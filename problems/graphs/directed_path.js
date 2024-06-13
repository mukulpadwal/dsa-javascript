/**
 * Determines if there is a directed path from the start node to the destination node
 * in a directed acyclic graph (DAG) using a Depth-First Search (DFS) approach.
 *
 * This function uses a stack to traverse the graph iteratively. It checks each node
 * and its neighbors to find if there is a path to the destination node.
 *
 * @function directedPathDFS
 * @param {Object} graph - The graph represented as an adjacency list.
 *                         The keys are node names, and the values are arrays of neighbor node names.
 * @param {number} start - The starting node for the path search.
 * @param {number} dest - The destination node for the path search.
 * @returns {boolean} - True if there is a directed path from start to dest, false otherwise.
 *
 * @example
 * const graph = {
 *   1: [2, 3],
 *   2: [3, 4],
 *   3: [],
 *   4: [],
 *   5: [2],
 * };
 *
 * console.log(directedPathDFS(graph, 1, 4)); // Output: true
 * console.log(directedPathDFS(graph, 1, 5)); // Output: false
 */
function directedPathDFS(graph, start, dest) {
  let stack = [start];
  let visited = new Set();

  while (stack.length !== 0) {
    let currNode = stack.pop();

    if (!visited.has(currNode)) {
      visited.add(currNode);

      // If the current node is the destination, return true
      if (currNode === dest) {
        return true;
      }

      // Push all unvisited neighbors onto the stack
      for (const neighbour of graph[currNode]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }

  // If the stack is exhausted without finding the destination, return false
  return false;
}

/**
 * Determines if there is a directed path from the start node to the destination node
 * in a directed acyclic graph (DAG) using a Breadth-First Search (BFS) approach.
 *
 * This function uses a queue to traverse the graph iteratively. It checks each node
 * and its neighbors to find if there is a path to the destination node.
 *
 * @function directedPathBFS
 * @param {Object} graph - The graph represented as an adjacency list.
 *                         The keys are node names, and the values are arrays of neighbor node names.
 * @param {number} start - The starting node for the path search.
 * @param {number} dest - The destination node for the path search.
 * @returns {boolean} - True if there is a directed path from start to dest, false otherwise.
 *
 * @example
 * const graph = {
 *   1: [2, 3],
 *   2: [3, 4],
 *   3: [],
 *   4: [],
 *   5: [2],
 * };
 *
 * console.log(directedPathBFS(graph, 1, 4)); // Output: true
 * console.log(directedPathBFS(graph, 1, 5)); // Output: false
 */
function directedPathBFS(graph, start, dest) {
  let queue = [start];
  let visited = new Set();
  visited.add(start);

  while (queue.length !== 0) {
    let currNode = queue.shift();

    // If the current node is the destination, return true
    if (currNode === dest) {
      return true;
    }

    // Enqueue all unvisited neighbors
    for (const neighbour of graph[currNode]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }

  // If the queue is exhausted without finding the destination, return false
  return false;
}

const graph = {
  1: [2, 3],
  2: [3, 4],
  3: [],
  4: [],
  5: [2],
};

console.log(directedPathDFS(graph, 1, 4)); // Output: true
console.log(directedPathDFS(graph, 1, 5)); // Output: false
console.log(directedPathBFS(graph, 1, 4)); // Output: true
console.log(directedPathBFS(graph, 1, 5)); // Output: false

/**
 * Performs a depth-first traversal on a graph starting from a specified node using an iterative approach.
 *
 * This function uses a stack to traverse the graph, visiting each node and its neighbors.
 * It ensures each node is visited only once by keeping track of visited nodes in a set.
 *
 * @function depthFirstTraversalIterative
 * @param {Object} graph - The graph represented as an adjacency list.
 *                         The keys are node names, and the values are arrays of neighbor node names.
 * @param {string} start - The starting node for the traversal.
 * @returns {Set} - A set of nodes visited during the traversal.
 *
 * @example
 * // Example usage:
 * const graph = {
 *   a: ["b", "c"],
 *   b: ["a", "c", "d"],
 *   c: ["a", "b", "d"],
 *   d: ["b", "c"],
 *   e: ["f"],
 *   f: ["e"],
 * };
 *
 * const visitedNodes = depthFirstTraversalIterative(graph, "a");
 * console.log(visitedNodes); // Output: Set { 'a', 'c', 'd', 'b' } or another valid DFS order
 */
function depthFirstTraversalIterative(graph, start) {
  // Initialize a stack with the starting node and a set to track visited nodes
  let stack = [start];
  let visited = new Set();

  // Continue the traversal until there are no more nodes in the stack
  while (stack.length !== 0) {
    // Pop the current node from the stack
    let currNode = stack.pop();

    // If the current node has not been visited, process it
    if (!visited.has(currNode)) {
      // Mark the current node as visited
      visited.add(currNode);

      // Traverse the current node's neighbors
      for (const neighbour of graph[currNode]) {
        // If the neighbor has not been visited, add it to the stack
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }

  // Return the set of visited nodes
  return visited;
}

// Example usage:
const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

console.log(depthFirstTraversalIterative(graph, "a")); // Output: Set { 'a', 'b', 'd', 'c' } or another valid DFS order

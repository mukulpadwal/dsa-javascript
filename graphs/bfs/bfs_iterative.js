/**
 * Performs a breadth-first traversal on a graph starting from a specified node using an iterative approach.
 *
 * This function uses a queue to traverse the graph level by level, visiting each node and its neighbors.
 * It ensures each node is visited only once by keeping track of visited nodes in a set.
 *
 * @function breadthFirstTraversalIterative
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
 * const visitedNodes = breadthFirstTraversalIterative(graph, "a");
 * console.log(visitedNodes); // Output: Set { 'a', 'b', 'c', 'd' } or another valid BFS order
 */
function breadthFirstTraversalIterative(graph, start) {
  // Initialize a queue with the starting node and a set to track visited nodes
  let queue = [start];
  let visited = new Set();
  visited.add(start);

  // Continue the traversal until there are no more nodes in the queue
  while (queue.length !== 0) {
    // Dequeue the current node from the queue
    const currNode = queue.shift();

    // Traverse the current node's neighbors
    for (const neighbor of graph[currNode]) {
      // If the neighbor has not been visited, mark it as visited and enqueue it
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
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

console.log(breadthFirstTraversalIterative(graph, "a")); // Output: Set { 'a', 'b', 'c', 'd' } or another valid BFS order

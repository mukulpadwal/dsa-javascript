/**
 * Performs a breadth-first traversal on a graph starting from a specified node using a recursive approach.
 *
 * This function uses a queue to traverse the graph level by level, visiting each node and its neighbors.
 * It ensures each node is visited only once by keeping track of visited nodes in a set.
 *
 * @function breadthFirstTraversalRecursive
 * @param {Object} graph - The graph represented as an adjacency list.
 *                         The keys are node names, and the values are arrays of neighbor node names.
 * @param {string} start - The starting node for the traversal.
 * @param {Set} [visited=new Set()] - A set to track visited nodes, initialized to an empty set if not provided.
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
 * const visitedNodes = breadthFirstTraversalRecursive(graph, "a");
 * console.log(visitedNodes); // Output: Set { 'a', 'b', 'c', 'd' } or another valid BFS order
 */
function breadthFirstTraversalRecursive(
  graph,
  start,
  visited = new Set(),
  queue = [start]
) {
  // Base Case: If the queue is empty, return the visited set
  if (queue.length === 0) {
    return visited;
  }

  // Dequeue the current node from the front of the queue
  const currNode = queue.shift();

  // Process the current node if it hasn't been visited
  if (!visited.has(currNode)) {
    visited.add(currNode);

    // Add the neighbors to the queue
    for (const neighbor of graph[currNode]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  // Recursive call with the updated queue and visited set
  return breadthFirstTraversalRecursive(graph, null, visited, queue);
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

console.log(breadthFirstTraversalRecursive(graph, "a")); // Output: Set { 'a', 'b', 'c', 'd' } or another valid BFS order

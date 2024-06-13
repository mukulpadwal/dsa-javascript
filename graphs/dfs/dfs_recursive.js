/**
 * Performs a depth-first traversal on a graph starting from a specified node using a recursive approach.
 *
 * This function uses recursion to traverse the graph, visiting each node and its neighbors.
 * It ensures each node is visited only once by keeping track of visited nodes in a set.
 *
 * @function depthFirstTraversalRecursive
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
 * const visitedNodes = depthFirstTraversalRecursive(graph, "a");
 * console.log(visitedNodes); // Output: Set { 'a', 'b', 'c', 'd' } or another valid DFS order
 */
function depthFirstTraversalRecursive(graph, start, visited = new Set()) {
  // Base Case: If the start node has already been visited, return to avoid processing it again
  if (visited.has(start)) {
    return visited;
  }

  // Mark the start node as visited
  visited.add(start);

  // Recursively visit each neighbor of the start node
  for (const neighbour of graph[start]) {
    depthFirstTraversalRecursive(graph, neighbour, visited);
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

const visitedNodes = depthFirstTraversalRecursive(graph, "a");
console.log(visitedNodes); // Output: Set { 'a', 'b', 'c', 'd' } or another valid DFS order

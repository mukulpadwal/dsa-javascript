// The problem is to find the size of the largest connected component (or island) in an undirected graph represented by an adjacency list. We'll use depth-first search (DFS) to explore each component, keeping track of the number of nodes in each component and updating the size of the largest component encountered.

/**
 * Finds the size of the largest connected component (island) in an undirected graph.
 *
 * @param {Object} graph - The graph represented as an adjacency list.
 * @returns {number} - The size of the largest connected component in the graph.
 */
function biggestIsland(graph) {
  const visited = new Set();
  let largest = 0;

  /**
   * Depth-First Search (DFS) helper function to explore the graph and count the size of the component.
   *
   * @param {string} node - The current node being explored.
   * @returns {number} - The size of the component starting from the given node.
   */
  function dfs(node) {
    // Base Case: If the node has already been visited, return 0
    if (visited.has(node)) {
      return 0;
    }

    // Mark the node as visited
    visited.add(node);
    let count = 1; // Count the current node

    // Explore all the neighbors of the current node
    for (const neighbour of graph[node]) {
      count += dfs(neighbour);
    }

    return count;
  }

  // Iterate through all nodes in the graph
  for (const node in graph) {
    if (!visited.has(node)) {
      // Perform DFS for each unvisited node and get the size of the component
      const componentSize = dfs(node);
      // Update the largest component size found
      if (componentSize > largest) {
        largest = componentSize;
      }
    }
  }

  return largest;
}

// Example usage:
const graph = {
  1: ["2"],
  2: ["1", "3"],
  3: ["2"],

  4: ["5"],
  5: ["4", "6", "7"],
  6: ["5"],
  7: ["5", "8"],
  8: ["7"],

  9: [],
};

console.log(biggestIsland(graph)); // Expected output: 5

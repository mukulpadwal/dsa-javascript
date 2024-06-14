// The problem is to count the number of connected components (or islands) in an undirected graph. A connected component is a subgraph in which any two vertices are connected to each other by paths, and which is connected to no additional vertices in the supergraph.

/**
 * Counts the number of connected components (islands) in an undirected graph.
 *
 * @param {Object} graph - The graph represented as an adjacency list.
 * @returns {number} - The number of connected components in the graph.
 */
function connectedIslandCount(graph) {
  const visited = new Set();
  let count = 0;

  /**
   * Depth-First Search (DFS) helper function to explore the graph.
   *
   * @param {string} node - The current node being explored.
   */
  function dfs(node) {
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        dfs(neighbour);
      }
    }
  }

  // Iterate through all nodes in the graph
  for (const node in graph) {
    if (!visited.has(node)) {
      visited.add(node);
      dfs(node);
      count++;
    }
  }

  return count;
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

console.log(connectedIslandCount(graph)); // Expected output: 3

// To find the shortest path in an undirected graph represented by edges, we use Breadth-First Search (BFS). BFS is suitable for this problem because it explores all nodes at the present depth level before moving on to nodes at the next depth level, ensuring that the shortest path is found first.

// Example edges
const edges = [
  ["a", "b"],
  ["a", "f"],
  ["b", "c"],
  ["c", "d"],
  ["f", "e"],
  ["d", "e"],
];

/**
 * Creates an adjacency list from the given edges.
 *
 * @param {Array} edges - Array of edges representing the graph.
 * @returns {Object} - The adjacency list of the graph.
 */
function createGraph(edges) {
  const graph = {};

  for (const edge of edges) {
    const [fNode, sNode] = edge;

    if (!(fNode in graph)) {
      graph[fNode] = [];
    }

    if (!(sNode in graph)) {
      graph[sNode] = [];
    }

    graph[fNode].push(sNode);
    graph[sNode].push(fNode);
  }

  return graph;
}

/**
 * Finds the shortest path between two nodes in an undirected graph using BFS.
 *
 * @param {Object} graph - The adjacency list of the graph.
 * @param {string} start - The start node.
 * @param {string} dest - The destination node.
 * @returns {number} - The shortest path length or -1 if the destination is not reachable.
 */
function shortestPath(graph, start, dest) {
  // Edge case: if start and dest are the same
  if (start === dest) {
    return 1;
  }

  let queue = [[start, 1]]; // Initialize queue with start node and distance 0
  const visited = new Set([start]); // Set to keep track of visited nodes

  while (queue.length !== 0) {
    let [node, distance] = queue.shift();
    if (node === dest) {
      return distance;
    }

    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }

  return -1; // Return -1 if the destination is not reachable
}

// Create the graph from edges
const graph = createGraph(edges);

// Example usage
console.log(shortestPath(graph, "a", "a")); // 1 (start and destination are the same)
console.log(shortestPath(graph, "a", "e")); // 3
console.log(shortestPath(graph, "a", "3")); // -1 (invalid node)

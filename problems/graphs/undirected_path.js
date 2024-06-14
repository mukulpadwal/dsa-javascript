// The problem is to determine if there's a path between two nodes in an undirected graph given as an array of edges. We can solve this by first converting the edge list into an adjacency list, and then applying a depth-first search (DFS) to check for the existence of a path between the two nodes. We can also implement the solution using breadth-first search (BFS) for completeness.

// Step 1: Convert the Edge List to an Adjacency List
/**
 * Converts an edge list to an adjacency list representation of a graph.
 *
 * @param {Array} edges - The array of edges where each edge is represented by a two-element array [node1, node2].
 * @returns {Object} - The adjacency list representation of the graph.
 */
function createGraph(edges) {
  const graph = {};

  for (const edge of edges) {
    const [firstNode, secondNode] = edge;

    // Add the edge to the adjacency list
    if (!(firstNode in graph)) {
      graph[firstNode] = [];
    }
    if (!(secondNode in graph)) {
      graph[secondNode] = [];
    }

    // Since it's an undirected graph, add both connections
    graph[firstNode].push(secondNode);
    graph[secondNode].push(firstNode);
  }

  return graph;
}

/*
const graph = {
  b: [ 'a', 'c' ],
  a: [ 'b', 'c' ],
  c: [ 'a', 'b' ],
  q: [ 'r', 's', 'u', 't' ],
  r: [ 'q' ],
  s: [ 'q' ],
  u: [ 'q' ],
  t: [ 'q' ]
}
 */

// Step 2 : Now we can apply and DFS or BFS to solve the problem
/**
 * Determines if there is a path between two nodes in an undirected graph using DFS.
 *
 * @param {Object} graph - The adjacency list representation of the graph.
 * @param {string} start - The starting node for the path search.
 * @param {string} end - The destination node for the path search.
 * @returns {boolean} - True if there is a path from start to end, false otherwise.
 */
function undirectedPathDFS(graph, start, end) {
  let stack = [start];
  let visited = new Set();

  while (stack.length !== 0) {
    const currNode = stack.pop();

    if (currNode === end) {
      return true;
    }

    if (!visited.has(currNode)) {
      visited.add(currNode);

      for (const neighbour of graph[currNode]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }

  return false;
}

/**
 * Determines if there is a path between two nodes in an undirected graph using BFS.
 *
 * @param {Object} graph - The adjacency list representation of the graph.
 * @param {string} start - The starting node for the path search.
 * @param {string} end - The destination node for the path search.
 * @returns {boolean} - True if there is a path from start to end, false otherwise.
 */
function undirectedPathBFS(graph, start, end) {
  let queue = [start];
  let visited = new Set();
  visited.add(start);

  while (queue.length !== 0) {
    let currNode = queue.shift();

    if (currNode === end) {
      return true;
    }

    for (const neighbour of graph[currNode]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }

  return false;
}

const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

const graph = createGraph(edges);

console.log(undirectedPathDFS(graph, "b", "c")); // true
console.log(undirectedPathDFS(graph, "a", "c")); // true
console.log(undirectedPathDFS(graph, "a", "r")); // false
console.log(undirectedPathDFS(graph, "q", "r")); // true
console.log(undirectedPathDFS(graph, "r", "q")); // true

console.log(undirectedPathBFS(graph, "b", "c")); // true
console.log(undirectedPathBFS(graph, "a", "c")); // true
console.log(undirectedPathBFS(graph, "a", "r")); // false
console.log(undirectedPathBFS(graph, "q", "r")); // true
console.log(undirectedPathBFS(graph, "r", "q")); // true

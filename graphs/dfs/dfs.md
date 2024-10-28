# Depth-First Search (DFS) in JavaScript

Depth-First Search (DFS) is a fundamental algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary node in the case of a graph) and explores as far as possible along each branch before backtracking.

## Iterative DFS

The iterative implementation of DFS uses a stack to backtrack. This is efficient for graphs with many nodes and edges.

### Example Implementation

```javascript
/**
 * Performs a depth-first traversal of a graph starting from a given node.
 *
 * @param {Object} graph - An adjacency list representing the graph.
 * @param {string} start - The starting node for the traversal.
 * @returns {Set<string>} - A set of visited nodes in DFS order.
 */
function depthFirstTraversalIterative(graph, start) {
  let stack = [start];
  let visited = new Set();

  while (stack.length > 0) {
    let currNode = stack.pop();

    if (!visited.has(currNode)) {
      visited.add(currNode);

      for (const neighbour of graph[currNode]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }

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

console.log(depthFirstTraversalIterative(graph, "a")); // Output: Set { 'a', 'c', 'd', 'b' } or another valid DFS order
```

## Recursive DFS

The recursive version of DFS is more intuitive but can lead to stack overflow issues for large graphs due to JavaScript's call stack limitations.

### Example Implementation

```javascript
/**
 * Performs a depth-first traversal of a graph starting from a given node.
 *
 * @param {Object} graph - An adjacency list representing the graph.
 * @param {string} node - The current node being visited.
 * @param {Set<string>} visited - A set of visited nodes.
 * @returns {Set<string>} - A set of visited nodes in DFS order.
 */
function depthFirstTraversalRecursive(graph, node, visited = new Set()) {
  if (!visited.has(node)) {
    visited.add(node);

    for (const neighbour of graph[node]) {
      depthFirstTraversalRecursive(graph, neighbour, visited);
    }
  }

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

console.log(depthFirstTraversalRecursive(graph, "a")); // Output: Set { 'a', 'b', 'c', 'd' } or another valid DFS order
```

## Conclusion

DFS is a versatile algorithm used in various applications such as topological sorting, cycle detection, pathfinding, and solving puzzles. Both iterative and recursive implementations have their advantages and can be chosen based on the specific requirements and constraints of the problem at hand.

class DSU {
  constructor(n) {
    // Initialize parent and rank arrays
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  // Find the root of the set that contains 'i'
  find(i) {
    if (this.parent[i] === i) {
      return i; // 'i' is the root
    }
    // Path compression: update the parent to the root
    return (this.parent[i] = this.find(this.parent[i]));
  }

  // Union the sets containing 'u' and 'v'
  union(u, v) {
    const pu = this.find(u); // Find the root of 'u'
    const pv = this.find(v); // Find the root of 'v'

    if (pu === pv) {
      return; // 'u' and 'v' are already in the same set
    }

    // Union by rank
    if (this.rank[pu] < this.rank[pv]) {
      this.parent[pu] = pv;
    } else if (this.rank[pu] > this.rank[pv]) {
      this.parent[pv] = pu;
    } else {
      this.parent[pv] = pu; // Attach 'pv' under 'pu'
      this.rank[pu]++; // Increment the rank of the new root
    }
  }
}

// Function to detect cycles in a graph using DSU
function detectCycle(graph) {
  const dsu = new DSU(6); // Assuming nodes are labeled 0 to 5
  let cycleFound = false;

  // Process each edge in the graph
  for (const [u, v] of graph) {
    // Find the roots of the sets containing 'u' and 'v'
    if (dsu.find(u) === dsu.find(v)) {
      console.log("Cycle detected between nodes:", u, v);
      cycleFound = true;
      break; // Exit loop if a cycle is found
    }
    // Union the sets of 'u' and 'v'
    dsu.union(u, v);
  }

  if (!cycleFound) {
    console.log("No cycle detected");
  }
}

// Example with a cycle
const graphWithCycle = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0], // This edge creates a cycle
  [3, 4],
  [4, 5],
];

console.log("Graph with cycle:");
detectCycle(graphWithCycle);

// Example without a cycle
const graphWithoutCycle = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  // No edges connecting back to any previous nodes
];

console.log("\nGraph without cycle:");
detectCycle(graphWithoutCycle);
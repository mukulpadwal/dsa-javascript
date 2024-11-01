// Function to generate an adjacency list from a list of edges
function generateAdjacencyList(edges) {
    const adjList = new Map(); // Initialize an empty adjacency list
  
    for (const edge of edges) {
      const [u, v] = edge; // Destructure the edge into two vertices u and v
  
      // Ensure that u has an entry in the adjacency list
      if (!adjList.has(u)) {
        adjList.set(u, []);
      }
      // Add v to the adjacency list of u
      adjList.get(u).push(v);
  
      // Ensure that v has an entry in the adjacency list
      if (!adjList.has(v)) {
        adjList.set(v, []);
      }
    }
  
    return adjList; // Return the completed adjacency list
  }
  
  // Function to perform BFS and generate the topological sort order
  function bfs(queue, adjList, indegree, answer = []) {
    while (queue.length > 0) {
      const u = queue.shift(); // Dequeue an element from the front of the queue
      answer.push(u); // Add u to the topological order
  
      // Iterate over all adjacent vertices of u
      for (const v of adjList.get(u)) {
        indegree[v]--; // Decrease the indegree of v
        if (indegree[v] === 0) { // If indegree becomes zero, add v to the queue
          queue.push(v);
        }
      }
    }
  
    return answer.join(","); // Return the topological order as a comma-separated string
  }
  
  // Function to perform topological sort using Kahn's algorithm
  function topologicalSort(adjList, n) {
    const indegree = new Array(n).fill(0); // Initialize indegree array
  
    // Calculate the indegree for each vertex
    for (let u = 0; u < n; u++) {
      for (const v of adjList.get(u)) {
        indegree[v]++; // Increment indegree for each adjacent vertex
      }
    }
  
    const queue = []; // Initialize queue for vertices with indegree 0
    for (let i = 0; i < n; i++) {
      if (indegree[i] === 0) { // If indegree is zero, add to the queue
        queue.push(i);
      }
    }
  
    return bfs(queue, adjList, indegree); // Start BFS and return the result
  }
  
  // Example graph represented as edges
  const graph = [
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 3],
    [3, 4],
    [3, 5],
  ];
  const n = 6; // Number of vertices
  const adjList = generateAdjacencyList(graph); // Generate the adjacency list
  console.log(topologicalSort(adjList, n)); // Perform topological sort and print the result
  
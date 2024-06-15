// To solve the problem of counting the number of islands in a given grid, you can use Depth-First Search (DFS). The main idea is to traverse the grid and initiate a DFS whenever you encounter an unvisited land cell (1). This DFS will mark all the connected land cells of the current island as visited. Each time you initiate a DFS, it signifies the discovery of a new island, so you increment the island count.

const grid = [
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
];

/**
 * Counts the number of islands in the given grid.
 *
 * @param {number[][]} grid - The grid representing land (1) and water (0).
 * @returns {number} - The number of islands.
 */
function countIslands(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited = new Set();
  let count = 0;

  /**
   * Depth-First Search (DFS) to mark all connected land cells.
   *
   * @param {number} r - The current row.
   * @param {number} c - The current column.
   */
  function dfs(r, c) {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === 0 ||
      visited.has(`${r},${c}`)
    ) {
      return;
    }

    visited.add(`${r},${c}`);

    dfs(r - 1, c); // Check top
    dfs(r + 1, c); // Check bottom
    dfs(r, c - 1); // Check left
    dfs(r, c + 1); // Check right
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1 && !visited.has(`${r},${c}`)) {
        dfs(r, c);
        count++;
      }
    }
  }

  return count;
}

console.log(countIslands(grid)); // Expected output: 4

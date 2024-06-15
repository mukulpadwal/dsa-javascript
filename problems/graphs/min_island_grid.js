// To find the smallest island in a given grid, we can use a similar approach to the one used for counting the number of islands. Instead of counting the number of islands, we need to keep track of the size of each island encountered and update the minimum size accordingly.

const grid = [
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
];

/**
 * Finds the size of the smallest island in the given grid.
 *
 * @param {number[][]} grid - The grid representing land (1) and water (0).
 * @returns {number} - The size of the smallest island.
 */
function minIslandGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let min = Number.MAX_VALUE;
  const visited = new Set();

  /**
   * Depth-First Search (DFS) to count all connected land cells.
   *
   * @param {number} r - The current row.
   * @param {number} c - The current column.
   * @returns {number} - The size of the island.
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
      return 0;
    }

    visited.add(`${r},${c}`);
    let count = 1;

    count += dfs(r - 1, c); // Check top
    count += dfs(r + 1, c); // Check bottom
    count += dfs(r, c - 1); // Check left
    count += dfs(r, c + 1); // Check right

    return count;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1 && !visited.has(`${r},${c}`)) {
        const islandSize = dfs(r, c);
        if (islandSize < min) {
          min = islandSize;
        }
      }
    }
  }

  return min === Number.MAX_VALUE ? 0 : min;
}

console.log(minIslandGrid(grid)); // Expected output: 1

const maxAreaOfIsland = grid => {
  let maxIslandLength = 0;
  let currentIslandLength = 0;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (grid[r][c] === 1) {
        currentIslandLength += findMaxAreaOfCurrIsland(grid, r, c)
        maxIslandLength = Math.max(maxIslandLength, currentIslandLength)
        currentIslandLength = 0;
      }
    }
  }
  return maxIslandLength;
};

const findMaxAreaOfCurrIsland = (grid, rIndex, cIndex) => {
  let count = 1;
  grid[rIndex][cIndex] = 0;
  if (grid[rIndex]?.[cIndex + 1] === 1) {
    count += findMaxAreaOfCurrIsland(grid, rIndex, cIndex + 1)
  }
  if (grid[rIndex]?.[cIndex - 1] === 1) {
    count += findMaxAreaOfCurrIsland(grid, rIndex, cIndex - 1)
  }
  if (grid[rIndex + 1]?.[cIndex] === 1) {
    count += findMaxAreaOfCurrIsland(grid, rIndex + 1, cIndex)
  }
  if (grid[rIndex - 1]?.[cIndex] === 1) {
    count += findMaxAreaOfCurrIsland(grid, rIndex - 1, cIndex)
  }
  return count;
}

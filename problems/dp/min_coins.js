function minimumCoins(target, coins, memo = {}, index, steps) {
  // Case 1 : if the target was already processed check in memo
  if (target in memo) {
    return;
  }

  // Base Case 1 : if the target becomes 0 store the steps taken in memo
  if (target === 0) {
    memo[coins[index]] = steps;
    return;
  }

  // Base Case 2 : if the target becomes negative or the index goes out of bound
  if (target < 0 || index === coins.length) {
    return;
  }

  // Include the current coin
  minimumCoins(target - coins[index], coins, memo, index, steps + 1);

  // Exclude the coin
  minimumCoins(target, coins, memo, index + 1, steps);
}

function minimumCoins2(target, coins, index, memo = {}) {
  // Case 1 : if the target was already processed check in memo
  if (target in memo) {
    return memo[target];
  }

  // Base Case 1 : if the target becomes 0 store the steps taken in memo
  if (target === 0) {
    return 1;
  }

  // Base Case 2 : if the target becomes negative or the index goes out of bound
  if (target < 0 || index === coins.length) {
    return 0;
  }

  let steps = 0;

  // Include the current coin
  steps += minimumCoins2(target - coins[index], coins, index, memo);

  // Exclude the coin
  steps += minimumCoins2(target, coins, index + 1, memo);

  memo[coins[index]] = steps;

  return steps;
}

const memo = {};
// console.log(minimumCoins(8, [5, 12, 4], memo, 0, 0)); // 2
console.log(minimumCoins(6, [1, 2, 3, 6], memo, 0, 0)); // 1

console.log(memo);

// Lets check out memo
let minimum = Number.MAX_SAFE_INTEGER;
for (const key in memo) {
  if (memo[key] < minimum) {
    minimum = memo[key];
  }
}

console.log(minimum === Number.MAX_SAFE_INTEGER ? -1 : minimum);

console.log(minimumCoins2(6, [1, 2, 3, 6], 0));

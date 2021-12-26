import assert from "assert";

function maxProfit(prices) {
  if (prices.length < 2) {
    return 0;
  }

  let min = Infinity;
  let max = 0;
  let result = max - min;

  prices.forEach(price => {
    if (min > price) {
      min = price;
      max = 0;
    } else if (max < price) {
      max = price;
      const potentialResult = max - min;
      if (potentialResult > result) {
        result = potentialResult
      }
    }
  })

  if (result < 0) {
    return 0;
  }

  return result;
};

assert.strictEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5)
assert.strictEqual(maxProfit([7, 1, 5, 8, 6, 4]), 7)
assert.strictEqual(maxProfit([1, 9, 0, 8, 6, 4]), 8)
assert.strictEqual(maxProfit([7, 6, 4, 3, 1]), 0)
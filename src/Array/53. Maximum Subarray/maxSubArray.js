import assert from "assert";

function kadaneAlgorithm(nums) {
  let maxSoFar = -Infinity;
  let maxEndingHere = 0;
  nums.forEach(num => {
    maxEndingHere = maxEndingHere + num;
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere
    }

    if (maxEndingHere < 0) {
      maxEndingHere = 0
    }
  })

  return maxSoFar;
}

function maxSubArray(nums) {
  return kadaneAlgorithm(nums);
}

assert.strictEqual(maxSubArray([3, 1, -3, 7]), 8)
assert.strictEqual(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
assert.strictEqual(maxSubArray([1]), 1)
assert.strictEqual(maxSubArray([5, 4, -1, 7, 8]), 23)
import assert from "assert";

function leftProducts(nums) {
  const result = [1]
  for (let i = 1; i < nums.length; i++) {
    result.push(result[i - 1] * nums[i - 1])
  }

  return result;
}

function rightProducts(nums) {
  const result = [1]
  for (let i = nums.length - 2; i !== -1; i--) {
    result.unshift(nums[i + 1] * result[0])
  }

  return result;
}

function fixNegativeZero(n) {
  if (n === 0) {
    return 0;
  }

  return n;
}

function productExceptSelf(nums) {
  const lProducts = leftProducts(nums)
  const rProducts = rightProducts(nums);
  return nums.map((_, index) => lProducts[index] * rProducts[index])
    .map(n => fixNegativeZero(n))
}

assert.deepStrictEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6])
assert.deepStrictEqual(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0])